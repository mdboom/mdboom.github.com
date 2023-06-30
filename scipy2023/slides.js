const animatableAttributes = [
  "cx",
  "cy",
  "d",
  "height",
  "opacity",
  "r",
  "stroke-width",
  "transform",
  "width",
  "x",
  "x1",
  "x2",
  "y",
  "y1",
  "y2",
];
const svgns = "http://www.w3.org/2000/svg";

var slides;
var currentSlide = 0;
var animation = [];
var frame = 0;
var nframes = 100;
var frameDur = 10;
var easingFunction = undefined;
var actionRunning = false;
var actionQueue = [];

const nfaces = 70;
var newFace = 16;

const zeroPad = (num, places) => String(num).padStart(places, "0");

function initFaces() {
  const faces = document.getElementById("faces");

  for (var i = 0; i < 16; ++i) {
    const scale = Math.random() * 0.15 + 0.1;
    const image = document.createElementNS(svgns, "image");
    image.setAttribute("href", "avatars/image" + zeroPad(i, 4) + ".png");
    image.setAttribute("clip-path", "url(#faceclip)");
    image.setAttribute(
      "transform",
      "translate(" +
        -250 * scale +
        " " +
        -250 * scale +
        ") scale(" +
        scale +
        ")"
    );
    image.setAttribute("id", "face" + i);
    const animateMotion = document.createElementNS(svgns, "animateMotion");
    animateMotion.setAttribute("dur", "15s");
    animateMotion.setAttribute("repeatCount", "indefinite");
    animateMotion.setAttribute("begin", (-i % 10) - 1 + "s");
    const mpath = document.createElementNS(svgns, "mpath");
    mpath.setAttribute("href", "#orbit" + ((i % 4) + 1));
    animateMotion.appendChild(mpath);
    image.appendChild(animateMotion);
    faces.appendChild(image);
  }
}

function initStarfield() {
  const background = document.getElementById("background");

  for (var i = 0; i < 100; ++i) {
    const use = document.createElementNS(svgns, "use");
    use.setAttribute("href", "#star");
    use.setAttribute(
      "transform",
      "translate(" +
        Math.random() * 1600 +
        "," +
        Math.random() * 900 +
        "), " +
        "rotate(" +
        Math.random() * 90 +
        "), " +
        "scale(" +
        (Math.random() * 0.5 + 0.1) +
        ")"
    );
    const brightness = Math.random() * 96 + 16;
    use.setAttribute(
      "fill",
      "rgb(" + brightness + "," + brightness + "," + brightness + ")"
    );
    background.appendChild(use);
  }
}

function initialize() {
  slides = document.getElementById("slides").children;
  for (const slide of slides) {
    slide.setAttribute("display", "none");
  }

  const hash = window.location.hash;
  currentSlide = 0;
  var newSlide;
  if (hash === undefined || hash === "") {
    newSlide = 0;
  } else {
    newSlide = parseInt(hash.substr(1));
  }
  setCurrentSlide(newSlide);

  initStarfield();
  initFaces();

  document.addEventListener("keydown", handleKey);
  document.addEventListener("mousedown", handleMouse);
}

function findElements(el, res) {
  var animid = el.getAttribute("animid");
  if (animid !== null) {
    res[animid] = el;
  }

  for (const child of el.children) {
    findElements(child, res);
  }
}

function restartAnimations(el) {
  if (el.tagName === "animateTransform" || el.tagName === "animate") {
    el.beginElement();
  }

  for (const child of el.children) {
    restartAnimations(child);
  }
}

function easeInOutSine(x) {
  return -(Math.cos(Math.PI * x) - 1) / 2;
}

function easeInOutElastic(x) {
  const c5 = (2 * Math.PI) / 4.5;

  return x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5
    ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
    : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
}

function easeLinear(x) {
  return x;
}

function stepAnimation() {
  const incr = easingFunction(frame / nframes);

  for (const entry of animation) {
    switch (entry[1]) {
      case "transform":
        const a_mtx = entry[2];
        const b_mtx = entry[3];
        const matrix = entry[0].ownerSVGElement.createSVGMatrix();
        matrix.a = (b_mtx.a - a_mtx.a) * incr + a_mtx.a;
        matrix.b = (b_mtx.b - a_mtx.b) * incr + a_mtx.b;
        matrix.c = (b_mtx.c - a_mtx.c) * incr + a_mtx.c;
        matrix.d = (b_mtx.d - a_mtx.d) * incr + a_mtx.d;
        matrix.e = (b_mtx.e - a_mtx.e) * incr + a_mtx.e;
        matrix.f = (b_mtx.f - a_mtx.f) * incr + a_mtx.f;
        const transform = entry[0].transform.baseVal;
        transform.clear();
        transform.initialize(transform.createSVGTransformFromMatrix(matrix));
        break;

      case "d":
        const a_parts = entry[2].split(" ");
        const b_parts = entry[3].split(" ");
        const out_parts = [];
        if (a_parts.length === b_parts.length) {
          for (var i = 0; i < a_parts.length; ++i) {
            if (a_parts[i].includes(",")) {
              const a_point = a_parts[i].split(",");
              const b_point = b_parts[i].split(",");
              const a_x = parseFloat(a_point[0]);
              const b_x = parseFloat(b_point[0]);
              const x = (b_x - a_x) * incr + a_x;
              const a_y = parseFloat(a_point[1]);
              const b_y = parseFloat(b_point[1]);
              const y = (b_y - a_y) * incr + a_y;
              out_parts.push(x + "," + y);
            } else {
              out_parts.push(a_parts[i]);
            }
          }
          entry[0].setAttribute("d", out_parts.join(" "));
        }
        break;

      default:
        const a_val = entry[2];
        const b_val = entry[3];
        const val = (b_val - a_val) * incr + a_val;
        entry[0].setAttribute(entry[1], val);
    }
  }

  frame++;
  if (frame < nframes) {
    setTimeout(stepAnimation, frameDur);
  } else {
    var slide = slides[currentSlide];
    slide.setAttribute("display", "none");
    for (const entry of animation) {
      if (entry[1] === "transform") {
        const transform = entry[0].transform.baseVal;
        transform.initialize(transform.createSVGTransformFromMatrix(entry[2]));
      } else {
        entry[0].setAttribute(entry[1], entry[2]);
      }
    }
    setCurrentSlide(currentSlide + 1);
    slide = slides[currentSlide];
    slide.setAttribute("display", "");
    if (slide.getAttribute("continue") !== null) {
      stepForward();
    } else {
      actionRunning = false;
      handleAction();
    }
  }
}

function setupAnimation() {
  var a = slides[currentSlide];
  var b = slides[currentSlide + 1];

  frame = 0;
  animation = [];

  switch (b.getAttribute("easing")) {
    case "sine":
      easingFunction = easeInOutSine;
      break;
    case "linear":
      easingFunction = easeLinear;
      break;
    default:
      easingFunction = easeInOutElastic;
  }

  const duration = b.getAttribute("duration");
  if (duration === null) {
    nframes = 1000 / frameDur;
  } else {
    nframes = parseFloat(duration) / frameDur;
  }

  const a_elements = {};
  findElements(a, a_elements);
  const b_elements = {};
  findElements(b, b_elements);

  for (const child in a_elements) {
    if (Object.hasOwn(b_elements, child)) {
      const a_child = a_elements[child];
      const b_child = b_elements[child];
      for (attr of animatableAttributes) {
        switch (attr) {
          case "transform":
            const a_transform = a_child.transform.baseVal.consolidate();
            const b_transform = b_child.transform.baseVal.consolidate();
            if (a_transform !== null && b_transform !== null) {
              const a_matrix = a_transform.matrix;
              const b_matrix = b_transform.matrix;
              if (a_matrix !== b_matrix) {
                animation.push([a_child, attr, a_matrix, b_matrix]);
              }
            }
            break;

          case "d":
            const a_d = a_child.getAttribute("d");
            const b_d = b_child.getAttribute("d");
            if (a_d !== undefined && b_d !== undefined && a_d !== b_d) {
              animation.push([a_child, attr, a_d, b_d]);
            }
            break;

          default:
            const a_attr = a_child.getAttribute(attr);
            const b_attr = b_child.getAttribute(attr);
            if (
              a_attr !== undefined &&
              b_attr !== undefined &&
              a_attr !== b_attr
            ) {
              animation.push([
                a_child,
                attr,
                parseFloat(a_attr),
                parseFloat(b_attr),
              ]);
            }
        }
      }
    }
  }

  console.log("animation entries " + animation.length);

  if (animation.length > 0) {
    setTimeout(stepAnimation);
  } else {
    setCurrentSlide(currentSlide + 1);
    actionRunning = false;
    if (b.getAttribute("continue") !== null) {
      stepForward();
    } else {
      handleAction();
    }
  }
}

function setCurrentSlide(newVal) {
  slides[currentSlide].setAttribute("display", "none");
  const onexitslide = slides[currentSlide].getAttribute("onexitslide");
  if (onexitslide !== null) {
    window[onexitslide](slides[currentSlide]);
  }
  currentSlide = newVal;
  window.location.hash = currentSlide;
  restartAnimations(slides[currentSlide]);
  slides[currentSlide].setAttribute("display", "");
  const onenterslide = slides[currentSlide].getAttribute("onenterslide");
  if (onenterslide !== null) {
    window[onenterslide](slides[currentSlide]);
  }
}

function handleAction() {
  if (!actionRunning) {
    if (actionQueue.length) {
      actionRunning = true;
      actionQueue.shift()();
    }
  }
}

function runAction(func) {
  actionQueue.push(func);
  handleAction();
}

function stepForward() {
  if (currentSlide + 1 >= slides.length) {
    return;
  }

  actionRunning = true;
  setupAnimation();
}

function stepBackward() {
  if (currentSlide == 0) {
    actionRunning = false;
    return;
  }

  setCurrentSlide(currentSlide - 1);
  actionRunning = false;
}

function stepHome() {
  setCurrentSlide(0);
  actionRunning = false;
}

function handleKey(e) {
  switch (e.key) {
    case " ":
    case "ArrowRight":
      runAction(stepForward);
      break;
    case "ArrowLeft":
      runAction(stepBackward);
      break;
    case "0":
    case "Home":
      runAction(stepHome);
      break;
  }
}

function handleMouse(e) {
  switch (e.button) {
    case 0:
      runAction(stepForward);
      break;
    case 2:
      runAction(stepBackward);
      break;
  }
}

var facesRunning = false;

function enterFaces() {
  facesRunning = true;
  setTimeout(changeFace, 1000);
}

function changeFace() {
  console.log("changeFace", newFace);
  document
    .getElementById("face" + (newFace % 16))
    .setAttribute(
      "href",
      "avatars/image" + zeroPad(newFace % nfaces, 4) + ".png"
    );
  newFace = newFace + 1;

  if (facesRunning) {
    setTimeout(changeFace, 1000);
  }
}

function exitFaces() {
  facesRunning = false;
}
