import { on, emit, showUI } from "@create-figma-plugin/utilities";
import { addNote } from "./addNote";
import { addFrame } from "./addFrame";

const loadFonts = async () => {
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });
};

export default async function () {
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
      // document.setPluginData(key, "");
    }
  });

  function handleNoteData(element: SceneNode, data: any, type: string) {
    (data.link = {
      type: "NODE",
      value: element.id,
    }),
      document.setPluginData(`${type}_${element.id}`, JSON.stringify(data));
    addFrame(element, type);
    const note = addNote(element, type);
    const noteText = figma.createText();
    noteText.characters = data.note;
    note.appendChild(noteText);
  }
}

showUI({
  height: 360,
  width: 300,
});

function emitSelection(selection: readonly SceneNode[]) {
  if (!selection.length) {
    emit("NO_SELECTION");
  } else {
    emit("SELECTION");
  }
}
