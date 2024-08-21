import { buildAutoLayoutFrame } from "./buildAutoLayoutFrame";

export function buildTextDataFrame(
  key: string,
  title: any,
  selectedNote: any,
  note: any,
  noteCharacters: string,
  nodeId: string
) {
  console.log("nodeId", nodeId);
  const textDataFrame = buildAutoLayoutFrame(key, "VERTICAL", 0, 0, 24);

  if (title) {
    const noteTitle = figma.createText();
    noteTitle.characters = title;
    noteTitle.fontName = {
      family: "Inter",
      style: "Regular",
    };
    noteTitle.fontSize = 50;
    noteTitle.hyperlink = {
      type: "NODE",
      value: nodeId,
    };
    textDataFrame.appendChild(noteTitle);
  }

  if (selectedNote || note) {
    const noteText = figma.createText();
    noteText.fontName = {
      family: "Inter",
      style: "Regular",
    };
    noteText.fontSize = 35;
    noteText.characters = noteCharacters;
    textDataFrame.appendChild(noteText);
  }
  textDataFrame.resize(464, textDataFrame.height);
  return textDataFrame;
}
