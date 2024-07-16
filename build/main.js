var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@create-figma-plugin/utilities/lib/events.js
function on(name, handler) {
  const id = `${currentId}`;
  currentId += 1;
  eventHandlers[id] = { handler, name };
  return function() {
    delete eventHandlers[id];
  };
}
function invokeEventHandler(name, args) {
  let invoked = false;
  for (const id in eventHandlers) {
    if (eventHandlers[id].name === name) {
      eventHandlers[id].handler.apply(null, args);
      invoked = true;
    }
  }
  if (invoked === false) {
    throw new Error(`No event handler with name \`${name}\``);
  }
}
var eventHandlers, currentId, emit;
var init_events = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
    eventHandlers = {};
    currentId = 0;
    emit = typeof window === "undefined" ? function(name, ...args) {
      figma.ui.postMessage([name, ...args]);
    } : function(name, ...args) {
      window.parent.postMessage({
        pluginMessage: [name, ...args]
      }, "*");
    };
    if (typeof window === "undefined") {
      figma.ui.onmessage = function(args) {
        if (!Array.isArray(args)) {
          return;
        }
        const [name, ...rest] = args;
        if (typeof name !== "string") {
          return;
        }
        invokeEventHandler(name, rest);
      };
    } else {
      window.onmessage = function(event) {
        if (typeof event.data.pluginMessage === "undefined") {
          return;
        }
        const args = event.data.pluginMessage;
        if (!Array.isArray(args)) {
          return;
        }
        const [name, ...rest] = event.data.pluginMessage;
        if (typeof name !== "string") {
          return;
        }
        invokeEventHandler(name, rest);
      };
    }
  }
});

// node_modules/@create-figma-plugin/utilities/lib/node/absolute-position/get-absolute-position.js
function getAbsolutePosition(node) {
  return {
    x: node.absoluteTransform[0][2],
    y: node.absoluteTransform[1][2]
  };
}
var init_get_absolute_position = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/node/absolute-position/get-absolute-position.js"() {
  }
});

// node_modules/@create-figma-plugin/utilities/lib/node/get-nodes/get-parent-node.js
function getParentNode(node) {
  const parentNode = node.parent;
  if (parentNode === null) {
    throw new Error(`\`node.parent\` is \`null\``);
  }
  return parentNode;
}
var init_get_parent_node = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/node/get-nodes/get-parent-node.js"() {
  }
});

// node_modules/@create-figma-plugin/utilities/lib/node/compute-bounding-box.js
function computeBoundingBox(node) {
  if ("rotation" in node && node.rotation === 0) {
    const absolutePosition2 = getAbsolutePosition(node);
    const { width: width2, height: height2 } = node;
    return __spreadProps(__spreadValues({}, absolutePosition2), { height: height2, width: width2 });
  }
  const parentNode = getParentNode(node);
  const index = parentNode.children.indexOf(node);
  const group = figma.group([node], parentNode, index);
  const absolutePosition = getAbsolutePosition(group);
  const { width, height } = group;
  parentNode.insertChild(index, node);
  return __spreadProps(__spreadValues({}, absolutePosition), { height, width });
}
var init_compute_bounding_box = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/node/compute-bounding-box.js"() {
    init_get_absolute_position();
    init_get_parent_node();
  }
});

// node_modules/@create-figma-plugin/utilities/lib/node/compute-maximum-bounds.js
function computeMaximumBounds(nodes) {
  let maximumBounds = [
    {
      x: Number.MAX_VALUE,
      y: Number.MAX_VALUE
    },
    {
      x: -1 * Number.MAX_VALUE,
      y: -1 * Number.MAX_VALUE
    }
  ];
  for (const node of nodes) {
    const { x, y, width, height } = computeBoundingBox(node);
    maximumBounds = [
      {
        x: Math.min(maximumBounds[0].x, x),
        y: Math.min(maximumBounds[0].y, y)
      },
      {
        x: Math.max(maximumBounds[1].x, x + width),
        y: Math.max(maximumBounds[1].y, y + height)
      }
    ];
  }
  return maximumBounds;
}
var init_compute_maximum_bounds = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/node/compute-maximum-bounds.js"() {
    init_compute_bounding_box();
  }
});

// node_modules/@create-figma-plugin/utilities/lib/ui.js
function showUI(options, data) {
  if (typeof __html__ === "undefined") {
    throw new Error("No UI defined");
  }
  const html = `<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${figma.editorType}');const __FIGMA_COMMAND__='${typeof figma.command === "undefined" ? "" : figma.command}';const __SHOW_UI_DATA__=${JSON.stringify(typeof data === "undefined" ? {} : data)};${__html__}</script>`;
  figma.showUI(html, __spreadProps(__spreadValues({}, options), {
    themeColors: typeof options.themeColors === "undefined" ? true : options.themeColors
  }));
}
var init_ui = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/ui.js"() {
  }
});

// node_modules/@create-figma-plugin/utilities/lib/index.js
var init_lib = __esm({
  "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
    init_events();
    init_compute_maximum_bounds();
    init_ui();
  }
});

// src/buildAutoLayoutFrame.ts
function buildAutoLayoutFrame(name, direction, paddingHorizontal = 20, paddingVertical = 20, itemSpacing = 10) {
  const frame = figma.createFrame();
  frame.layoutMode = direction;
  frame.paddingTop = paddingVertical;
  frame.paddingBottom = paddingVertical;
  frame.paddingLeft = paddingHorizontal;
  frame.paddingRight = paddingHorizontal;
  frame.itemSpacing = itemSpacing;
  frame.counterAxisSizingMode = "AUTO";
  frame.clipsContent = false;
  frame.fills = [];
  frame.name = name;
  return frame;
}
var init_buildAutoLayoutFrame = __esm({
  "src/buildAutoLayoutFrame.ts"() {
    "use strict";
  }
});

// src/addNote.ts
function addNote(selection, type) {
  const note = buildAutoLayoutFrame("admin-note", "VERTICAL", 20, 20, 16);
  note.name = "admin-note";
  note.resize(selection.width, 200);
  note.x = selection.x;
  note.y = selection.y + selection.height + 32;
  if (type === "error") {
    note.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: {
          r: 0.9960784316062927,
          g: 0.8549019694328308,
          b: 0.8078431487083435
        }
      }
    ];
  }
  if (type === "warning") {
    note.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: {
          r: 0.9806478023529053,
          g: 0.9118025898933411,
          b: 0.6677151322364807
        },
        boundVariables: {}
      }
    ];
  }
  if (type === "notice") {
    note.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: {
          r: 0.8213211297988892,
          g: 0.9546784162521362,
          b: 0.9839518070220947
        },
        boundVariables: {}
      }
    ];
  }
  return note;
}
var init_addNote = __esm({
  "src/addNote.ts"() {
    "use strict";
    init_buildAutoLayoutFrame();
  }
});

// src/addFrame.ts
function addFrame(selection, type) {
  var _a;
  const [topLeft, bottomRight] = computeMaximumBounds([selection]);
  const width = bottomRight.x - topLeft.x;
  const height = bottomRight.y - topLeft.y;
  const frame = figma.createFrame();
  (_a = selection.parent) == null ? void 0 : _a.appendChild(frame);
  frame.name = `${type} ${selection.name}`;
  frame.x = topLeft.x;
  frame.y = topLeft.y;
  frame.resize(width, height);
  frame.strokeWeight = 14;
  frame.strokeAlign = "OUTSIDE";
  if (type === "error") {
    frame.strokes = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: {
          r: 1,
          g: 0,
          b: 0
        }
      }
    ];
    frame.fills = [];
  }
  if (type === "warning") {
    frame.strokes = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: {
          r: 1,
          g: 0.8399999737739563,
          b: 0
        }
      }
    ];
    frame.fills = [];
  }
  if (type === "notice") {
    frame.strokes = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: {
          r: 0.7699869871139526,
          g: 0.9447969198226929,
          b: 1
        },
        boundVariables: {}
      }
    ];
    frame.fills = [];
  }
}
var init_addFrame = __esm({
  "src/addFrame.ts"() {
    "use strict";
    init_lib();
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => main_default
});
async function main_default() {
  await loadFonts();
  const document = figma.root;
  let selection = figma.currentPage.selection;
  figma.on("run", () => {
    emitSelection(selection);
  });
  figma.on("selectionchange", () => {
    selection = figma.currentPage.selection;
    emitSelection(selection);
  });
  on("ERROR", (data) => {
    selection.forEach((element) => {
      handleNoteData(element, data, "error");
    });
  });
  on("WARNING", (data) => {
    selection.forEach((element) => {
      handleNoteData(element, data, "warning");
    });
  });
  on("NOTICE", (data) => {
    selection.forEach((element) => {
      handleNoteData(element, data, "notice");
    });
  });
  on("REPORT", () => {
    const keys = document.getPluginDataKeys();
    for (const key of keys) {
      const value = document.getPluginData(key);
      console.log(key, value);
    }
  });
  function handleNoteData(element, data, type) {
    data.link = {
      type: "NODE",
      value: element.id
    }, document.setPluginData(`${type}_${element.id}`, JSON.stringify(data));
    addFrame(element, type);
    const note = addNote(element, type);
    const noteText = figma.createText();
    noteText.characters = data.note;
    note.appendChild(noteText);
  }
}
function emitSelection(selection) {
  if (!selection.length) {
    emit("NO_SELECTION");
  } else {
    emit("SELECTION");
  }
}
var loadFonts;
var init_main = __esm({
  "src/main.ts"() {
    "use strict";
    init_lib();
    init_addNote();
    init_addFrame();
    loadFonts = async () => {
      await figma.loadFontAsync({ family: "Inter", style: "Regular" });
      await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    };
    showUI({
      height: 360,
      width: 300
    });
  }
});

// <stdin>
var modules = { "src/main.ts--default": (init_main(), __toCommonJS(main_exports))["default"] };
var commandId = true ? "src/main.ts--default" : figma.command;
modules[commandId]();
