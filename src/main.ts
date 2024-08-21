import { on, emit, showUI } from "@create-figma-plugin/utilities";
import { addNote } from "./addNote";
import { addFrame } from "./addFrame";
import { buildReport } from "./report-building-functions/buildReport";

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

  on("CRITICAL", (data) => {
    selection.forEach((element) => {
      handleNoteData(element, data, "critical");
    });
  });

  on("HIGH", (data) => {
    selection.forEach((element) => {
      handleNoteData(element, data, "high");
    });
  });

  on("MEDIUM", (data) => {
    selection.forEach((element) => {
      handleNoteData(element, data, "medium");
    });
  });

  on("LOW", (data) => {
    selection.forEach((element) => {
      handleNoteData(element, data, "low");
    });
  });

  on("ERASE", () => {
    const keys = figma.root.getPluginDataKeys();
    keys.forEach((key) => figma.root.setPluginData(key, ""));
  });

  on("REPORT", () => buildReport());

  function handleNoteData(element: SceneNode, data: any, type: string) {
    data.link = {
      type: "NODE",
      value: element.id,
    };
    data.severity = type;

    document.setPluginData(`${element.id}_${type}`, JSON.stringify(data));

    addFrame(element, type);
    const note = addNote(element, type);

    if (data.title) {
      const titleText = figma.createText();
      titleText.characters = data.title;
      titleText.fontName = {
        family: "Inter",
        style: "Bold",
      };
      note.appendChild(titleText);
    }

    const noteText = figma.createText();
    noteText.characters = `${
      data.selectedNote ? data.selectedNote + "\n" : ""
    }${data.note}`;
    note.appendChild(noteText);
  }
}

showUI({
  height: 430,
  width: 400,
});

function emitSelection(selection: readonly SceneNode[]) {
  if (!selection.length) {
    emit("NO_SELECTION");
  } else {
    emit("SELECTION");
  }
}
