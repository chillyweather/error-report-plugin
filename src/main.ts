import { on, emit, showUI } from "@create-figma-plugin/utilities";
import { addNote } from "./addNote";
import { addFrame } from "./addFrame";
import { buildReport } from "./report-building-functions/buildReport";

const loadFonts = async () => {
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });
};

const allowedTypes = [
  "FRAME",
  "INSTANCE",
  "COMPONENT",
  "COMPONENT_SET",
  "GROUP",
];

export default async function () {
  await loadFonts();
  const document = figma.root;

  let selection = figma.currentPage.selection;
  let isSelectionValid: boolean;

  figma.on("run", () => {
    emitSelection(selection);
  });

  figma.on("selectionchange", () => {
    selection = figma.currentPage.selection;
    emitSelection(selection);
  });

  on("CRITICAL", (data) => {
    isSelectionValid = checkSelection(selection);
    if (!isSelectionValid) {
      return;
    }
    selection.forEach((element) => {
      handleNoteData(element, data, "critical");
    });
  });

  on("HIGH", (data) => {
    isSelectionValid = checkSelection(selection);
    if (!isSelectionValid) {
      return;
    }
    selection.forEach((element) => {
      handleNoteData(element, data, "high");
    });
  });

  on("MEDIUM", (data) => {
    isSelectionValid = checkSelection(selection);
    if (!isSelectionValid) {
      return;
    }
    selection.forEach((element) => {
      handleNoteData(element, data, "medium");
    });
  });

  on("LOW", (data) => {
    console.log("selection[0].type", selection[0].type);
    console.log(
      "selection[0].type in allowedTypes",
      selection[0].type in allowedTypes
    );
    isSelectionValid = checkSelection(selection);
    console.log("isSelectionValid", isSelectionValid);
    if (!isSelectionValid) {
      return;
    }
    selection.forEach((element) => {
      handleNoteData(element, data, "low");
    });
  });

  on("ERASE", () => {
    const keys = figma.root.getPluginDataKeys();
    keys.forEach((key) => figma.root.setPluginData(key, ""));
  });

  on("REPORT", () => buildReport(selection));

  function checkSelection(selection: readonly SceneNode[]): boolean {
    if (selection.length === 0) {
      figma.notify("Please select at least one node");
      return false;
    } else if (selection.length > 1) {
      figma.notify("Please select only one node");
      return false;
    } else if (!allowedTypes.includes(selection[0].type)) {
      figma.notify("Please select a frame, instance or component");
      return false;
    }
    return true;
  }

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
