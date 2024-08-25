async function selectionToImage(selection: SceneNode, frame: FrameNode) {
  const width = selection.width;
  const height = selection.height;
  const aspectRatio = width / height;

  frame.resize(frame.width, frame.width / aspectRatio);

  const imageBuffer = await selection.exportAsync({
    format: "PNG",
    constraint: { type: "SCALE", value: 1 },
  });

  const image = figma.createImage(imageBuffer);

  frame.fills = [
    {
      type: "IMAGE",
      scaleMode: "FILL",
      imageHash: image.hash,
    },
  ];
}

export default selectionToImage;
