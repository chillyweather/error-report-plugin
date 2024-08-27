import { computeMaximumBounds } from "@create-figma-plugin/utilities";

export function addFrame(element: SceneNode, type: string) {
  const [topLeft, bottomRight] = computeMaximumBounds([element]);
  const width = bottomRight.x - topLeft.x;
  const height = bottomRight.y - topLeft.y;

  const frame = figma.createFrame();
  element.parent?.appendChild(frame);
  frame.name = `${element.id}-highlight`;
  frame.x = topLeft.x;
  frame.y = topLeft.y;
  frame.resize(width, height);

  frame.strokeWeight = 14;
  frame.strokeAlign = "OUTSIDE";
  if (type === "critical") {
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
  if (type === "high") {
    frame.strokes = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: {
          r: 1,
          g: 0.7139676809310913,
          b: 0.3781901001930237,
        },
        boundVariables: {},
      },
    ];
    frame.fills = [];
  }
  if (type === "medium") {
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
  if (type === "low") {
    frame.strokes = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: {
          r: 0.8213211297988892,
          g: 0.9839518070220947,
          b: 0.864689290523529,
        },
        boundVariables: {},
      },
    ];
    frame.fills = [];
  }
}
