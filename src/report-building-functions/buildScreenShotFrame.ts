export function buildScreenShotFrame() {
  const screenShotFrame = figma.createFrame();
  screenShotFrame.name = "screenshot";
  screenShotFrame.resize(412, 322);
  screenShotFrame.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8509804010391235,
        g: 0.8509804010391235,
        b: 0.8509804010391235,
      },
      boundVariables: {},
    },
  ];
  return screenShotFrame;
}
