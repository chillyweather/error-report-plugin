import { computeMaximumBounds } from "@create-figma-plugin/utilities";

export function addFrame(selection: SceneNode, type: string) {
  const [topLeft, bottomRight] = computeMaximumBounds([selection]);
  const width = bottomRight.x - topLeft.x;
  const height = bottomRight.y - topLeft.y;

  const frame = figma.createFrame();
  selection.parent?.appendChild(frame);
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
          b: 0,
        },
      },
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
          b: 0,
        },
      },
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
          b: 1,
        },
        boundVariables: {},
      },
    ];
    frame.fills = [];
  }
}
