import { REPORT_FRAME_WIDTH } from "../constants";
import { buildAutoLayoutFrame } from "./buildAutoLayoutFrame";
import { buildLayoutFrames } from "./buildLayoutFrames";
import { buildScreenShotFrame } from "./buildScreenShotFrame";
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

  const { criticalFrame, reportFrame, highFrame, mediumFrame, lowFrame } =
    buildLayoutFrames(keys);

  appendSections(criticalFrame, reportFrame, highFrame, mediumFrame, lowFrame);

  for (const key of keys) {
    const value = document.getPluginData(key);
    console.log("key, value", key, value);
    const [id, type] = key.split("_");
    const textContentJSON = JSON.parse(value);
    const title = textContentJSON.title;
    const selectedNote = textContentJSON.selectedNote;
    const note = textContentJSON.note;
    const severity = textContentJSON.severity;
    const noteCharacters = `${selectedNote ? selectedNote + "\n" : ""}${
      note ?? ""
    }`;

    const textDataFrame = buildAutoLayoutFrame(key, "VERTICAL", 0, 0, 24);

    if (title) {
      const noteTitle = figma.createText();
      noteTitle.characters = title;
      noteTitle.fontName = {
        family: "Inter",
        style: "Regular",
      };
      noteTitle.fontSize = 50;
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

    const notesFrame = buildAutoLayoutFrame("notes", "VERTICAL", 0, 0, 12);
    const notesTitle = figma.createText();
    notesTitle.fontName = {
      family: "Inter",
      style: "Regular",
    };
    notesTitle.fontSize = 50;
    notesTitle.characters = "Notes";
    notesFrame.appendChild(notesTitle);

    const notesContent = figma.createText();
    notesContent.fontName = {
      family: "Inter",
      style: "Regular",
    };
    notesContent.fontSize = 20;
    notesContent.characters = "Your notes here...";
    notesFrame.appendChild(notesContent);

    const screenShotFrame = buildScreenShotFrame();
    const reportElementFrame = buildAutoLayoutFrame(
      key,
      "HORIZONTAL",
      0,
      0,
      190
    );
    reportElementFrame.appendChild(textDataFrame);
    reportElementFrame.appendChild(screenShotFrame);
    reportElementFrame.appendChild(notesFrame);

    if (textContentJSON.severity === "critical" && criticalFrame) {
      criticalFrame.appendChild(reportElementFrame);
    } else if (textContentJSON.severity === "high" && highFrame) {
      highFrame.appendChild(reportElementFrame);
    } else if (textContentJSON.severity === "medium" && mediumFrame) {
      mediumFrame.appendChild(reportElementFrame);
    } else if (textContentJSON.severity === "low" && lowFrame) {
      lowFrame.appendChild(reportElementFrame);
    }
    // document.setPluginData(key, "");
  }
}

function appendSections(
  criticalFrame: FrameNode | null,
  reportFrame: FrameNode,
  highFrame: FrameNode | null,
  mediumFrame: FrameNode | null,
  lowFrame: FrameNode | null
) {
  if (criticalFrame) {
    appendAndResize(
      criticalFrame,
      reportFrame,
      REPORT_FRAME_WIDTH,
      criticalFrame.height
    );
  }
  if (highFrame) {
    appendAndResize(
      highFrame,
      reportFrame,
      REPORT_FRAME_WIDTH,
      highFrame.height
    );
  }
  if (mediumFrame) {
    appendAndResize(
      mediumFrame,
      reportFrame,
      REPORT_FRAME_WIDTH,
      mediumFrame.height
    );
  }
  if (lowFrame) {
    appendAndResize(lowFrame, reportFrame, REPORT_FRAME_WIDTH, lowFrame.height);
  }
}

function appendAndResize(
  frame: FrameNode,
  parent: FrameNode,
  width: number,
  height: number
) {
  frame.resize(width, height);
  parent.appendChild(frame);
}
