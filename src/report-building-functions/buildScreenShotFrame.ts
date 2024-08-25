import selectionToImage from "./selectionToImage";
export async function buildScreenShotFrame(nodeId: string) {
  const screenShotFrame = figma.createFrame();
  screenShotFrame.name = "screenshot";
  screenShotFrame.resize(412, 322);

  const foundNode = figma.getNodeById(nodeId);
  if (
    !foundNode ||
    !(
      foundNode.type === "COMPONENT" ||
      foundNode.type === "FRAME" ||
      foundNode.type === "INSTANCE" ||
      foundNode.type === "COMPONENT_SET" ||
      foundNode.type === "GROUP"
    )
  ) {
    return screenShotFrame;
  }

  await selectionToImage(foundNode, screenShotFrame);

  return screenShotFrame;
}
