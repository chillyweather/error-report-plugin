export function buildReport() {
  const document = figma.root;
  let reportPage = figma.root.children.find(
    (page) => page.name === "audit result"
  );
  if (!reportPage) {
    reportPage = figma.createPage();
    reportPage.name = "audit result";
  }
  const keys = document.getPluginDataKeys();

  const reportFrame = buildAutoLayoutFrame("Report", "VERTICAL", 20, 20, 12);
  console.log("reportFrame", reportFrame);
  reportFrame.fills = [
    {
      type: "SOLID",
      color: {
        r: 0.49938151240348816,
        g: 0.49938151240348816,
        b: 0.49938151240348816,
      },
      opacity: 1,
    },
  ];

  for (const key of keys) {
    const value = document.getPluginData(key);
    const [id, type] = key.split("_");
    const textContentJSON = JSON.parse(value);
    const noteCharacters = `${textContentJSON.title + "\n"}${
      textContentJSON.selectedNote + "\n"
    }${textContentJSON.note}`;
    const noteText = figma.createText();
    noteText.characters = noteCharacters;
    const valueFrame = buildAutoLayoutFrame(key, "HORIZONTAL", 8, 8, 4);

    valueFrame.fills = [
      {
        type: "SOLID",
        color: {
          r: 0.8784313797950745,
          g: 0.8784313797950745,
          b: 0.8784313797950745,
        },
        opacity: 1,
      },
    ];
    valueFrame.appendChild(noteText);
    reportFrame.appendChild(valueFrame);
    valueFrame.layoutSizingHorizontal = "FILL";
    // document.setPluginData(key, "");
  }
}

export function buildAutoLayoutFrame(
  name: string,
  direction: "NONE" | "HORIZONTAL" | "VERTICAL",
  paddingHorizontal = 20,
  paddingVertical = 20,
  itemSpacing = 10
): FrameNode {
  const frame = figma.createFrame();
  frame.layoutMode = direction;
  frame.paddingBottom = paddingVertical;
  frame.paddingLeft = paddingHorizontal;
  frame.paddingRight = paddingHorizontal;
  frame.paddingTop = paddingVertical;
  frame.itemSpacing = itemSpacing;
  frame.counterAxisSizingMode = "AUTO";
  frame.name = name;
  return frame;
}
