from pathlib import Path
import xml.etree.ElementTree as ET


ROOT = Path(__file__).parent

NS = {"": "http://www.w3.org/2000/svg", "xlink": "http://www.s3.org/1999/xlink"}
for key, val in NS.items():
    ET.register_namespace(key, val)


REMOVE_NAMESPACES = [
    "http://www.inkscape.org/namespaces/inkscape",
    "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",
]


def clean(element):
    for key in list(element.attrib.keys()):
        for ns in REMOVE_NAMESPACES:
            if key.startswith("{%s}" % ns):
                del element.attrib[key]
                break

    for child in element:
        for ns in REMOVE_NAMESPACES:
            if child.tag.startswith("{%s}" % ns):
                element.remove(child)
                break
        else:
            clean(child)


def do_includes():
    index_tree = ET.parse(ROOT / "index.src.svg")
    root = index_tree.getroot()

    references = set()
    for elem in index_tree.iter():
        for val in elem.attrib.values():
            if val.startswith("#"):
                references.add(val[1:])

    slides = index_tree.findall(".//*[@id='slides']")[0]
    for slide in slides:
        slide.attrib["display"] = "none"

    defs = root.find("defs", NS)

    for filename in (ROOT / "pages").glob("*.svg"):
        if filename.name.startswith("index"):
            continue

        if filename.stem not in references:
            continue

        entry_tree = ET.parse(filename)
        entry_root = entry_tree.getroot()

        for src_defs in entry_root.findall("defs", NS):
            for gradient in ("radialGradient", "linearGradient", "filter"):
                for child in src_defs.findall(gradient, NS):
                    clean(child)
                    defs.append(child)

        for child in entry_root.findall("g", NS):
            if child.attrib.get("id") == "layer1":
                clean(child)
                child.attrib["id"] = filename.stem
                defs.append(child)
                break

    ET.indent(index_tree, "    ")
    index_tree.write(ROOT / "index.svg")


def main():
    do_includes()


if __name__ == "__main__":
    main()
