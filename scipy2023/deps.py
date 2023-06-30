class Node:
    def __init__(self, name, x, y):
        self.name = name
        self.x = x
        self.y = y
        self.edges = []
        self.start = (800, 450)


a = Node("a", 1341, 89)
b = Node("b", 431, 160)
c = Node("c", 1202, 199)
d = Node("d", 149, 331)
e = Node("e", 328, 331)
f = Node("f", 525, 331)
g = Node("g", 1053, 331)
h = Node("h", 1230, 414)
i = Node("i", 608, 648)
j = Node("j", 413, 721)
k = Node("k", 626, 827)
l = Node("l", 800, 450)

f.start = (588, 672)
i.start = (800, 750)
g.start = (1012, 672)

l.edges.append(f)
l.edges.append(g)
l.edges.append(i)

c.edges.append(a)

e.edges.append(d)

f.edges.append(e)
f.edges.append(b)

g.edges.append(c)
g.edges.append(h)

i.edges.append(j)
i.edges.append(k)


nodes = [a, b, c, d, e, f, g, h, i, j, k, l]
edges = []

for node in nodes:
    for node2 in node.edges:
        edges.append((node, node2))


for i, (n1, n2) in enumerate(edges):
    print(
        f'<line animid="edge{i}" x1="{n1.start[0]}" y1="{n1.start[1]}" x2="{n2.start[0]}" y2="{n2.start[1]}" stroke="#ff7f2a" stroke-width="10" />'
    )

for node in nodes:
    print(
        f'<g animid="pkg{node.name}" transform="translate({node.start[0]},{node.start[1]})"><use href="#planet" transform="scale(1.2)"/></g>'
    )

print()

for i, (n1, n2) in enumerate(edges):
    print(
        f'<line animid="edge{i}" x1="{n1.x}" y1="{n1.y}" x2="{n2.x}" y2="{n2.y}" stroke="#ff7f2a" stroke-width="10" />'
    )

for node in nodes:
    print(
        f'<g animid="pkg{node.name}" transform="translate({node.x},{node.y})"><use href="#planet" transform="scale(1.2)"/></g>'
    )
