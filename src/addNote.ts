import { buildAutoLayoutFrame } from "./buildAutoLayoutFrame";

export function addNote(selection: SceneNode, type: string) {
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
          b: 0.8078431487083435,
        },
      },
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
          b: 0.6677151322364807,
        },
        boundVariables: {},
      },
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
          b: 0.9839518070220947,
        },
        boundVariables: {},
      },
    ];
  }
  return note;
}
