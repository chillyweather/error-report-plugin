import { on, emit, showUI } from "@create-figma-plugin/utilities";
import { addNote } from "./addNote";
import { addFrame } from "./addFrame";
import { buildReport } from "./report-building-functions/buildReport";
import { REPORT_PAGE } from "./constants";
import { updateFromCanvas } from "./report-building-functions/updateFromCanvas";
import { eraseNotesOnCanvas } from "./report-building-functions/eraseNotesOnCanvas";
import { exportDataForCSV } from "./report-building-functions/exportDataForCSV";

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
    isSelectionValid = checkSelection(selection);
    if (!isSelectionValid) {
      return;
    }
    selection.forEach((element) => {
      handleNoteData(element, data, "low");
    });
  });

  on("QUICK_WIN", (data) => {
    isSelectionValid = checkSelection(selection);
    if (!isSelectionValid) {
      return;
    }
    selection.forEach((element) => {
      handleAddQuickWin(element);
    });
  });

  on("ERASE", () => {
    const keys = figma.root.getSharedPluginDataKeys("audit");
    keys.forEach((key) => figma.root.setSharedPluginData("audit", key, ""));
  });

  on("REPORT", async () => {
    await buildReport();
  });

  on("EXPORT_PDF", async () => {
    const reportFrame = findReportFrame();
    if (!reportFrame) {
      return;
    }

    const pdf = await reportFrame.exportAsync({
      format: "PDF",
    });
    if (!pdf) {
      console.log("PDF export failed");
      return;
    }
    emit("PDF", pdf);
  });

  on("EXPORT_MULTIPAGE_PDF", async () => {
    const reportFrame = findReportFrame();
    if (!reportFrame) {
      return;
    }

    const pages: Uint8Array[] = [];

    for (const child of reportFrame.children) {
      const pdf = await child.exportAsync({
        format: "PDF",
      });
      if (!pdf) {
        console.log("PDF export failed");
        return;
      }
      pages.push(pdf);
    }

    emit("PDF_MULTIPAGE", pages);
  });

  on("EXPORT_CSV", () => {
    exportDataForCSV();
  });

  on("UPDATE_FROM_CANVAS", () => {
    updateFromCanvas();
  });

  on("ERASE_NOTES_ON_CANVAS", () => {
    eraseNotesOnCanvas();
  });

  function findReportFrame() {
    const reportPage = figma.root.children.find(
      (page) => page.name === REPORT_PAGE
    );
    if (!reportPage) {
      console.log("Report page not found");
      return;
    }
    const reportFrame = reportPage.children.find(
      (frame) => frame.name === "report-frame"
    );
    if (!(reportFrame && reportFrame.type === "FRAME")) {
      console.log("Report frame not found");
      return;
    }
    reportFrame.layoutMode = "VERTICAL";
    return reportFrame;
  }

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

  function handleAddQuickWin(element: SceneNode) {
    document.getSharedPluginDataKeys("audit").forEach((key) => {
      if (key.includes(`${element.id}`)) {
        const data = JSON.parse(document.getSharedPluginData("audit", key));
        data.quickWin = true;
        document.setSharedPluginData("audit", key, JSON.stringify(data));
      }
    });
  }

  function handleNoteData(element: SceneNode, data: any, type: string) {
    data.link = {
      type: "NODE",
      value: element.id,
    };
    data.severity = type;

    document.setSharedPluginData(
      "audit",
      `${element.id}_${type}`,
      JSON.stringify(data)
    );

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
  height: 712,
  width: 400,
});

function emitSelection(selection: readonly SceneNode[]) {
  if (!selection.length) {
    emit("NO_SELECTION");
  } else {
    emit("SELECTION");
  }
}
