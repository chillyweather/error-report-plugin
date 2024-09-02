import { REPORT_FRAME_WIDTH, REPORT_PAGE, SEVERITY_LEVELS } from "../constants";
import { buildAutoLayoutFrame } from "./buildAutoLayoutFrame";
import { buildHeaderFrame } from "./buildHeaderFrame";
import { buildLayoutFrames } from "./buildLayoutFrames";
import { buildNotesElement } from "./buildNotesElement";
import { buildScreenShotFrame } from "./buildScreenShotFrame";
import { buildTextDataFrame } from "./buildTextDataFrame";

export async function buildReport() {
  const document = figma.root;
  let reportPage = figma.root.children.find(
    (page) => page.name === REPORT_PAGE
  );
  if (!reportPage) {
    reportPage = figma.createPage();
    reportPage.name = REPORT_PAGE;
  }
  const existingReportFrame = reportPage.findChild(
    (frame) => frame.name === "report-frame"
  );
  if (existingReportFrame) {
    existingReportFrame.remove();
  }

  const keys = document.getPluginDataKeys();

  const headerFrame = buildHeaderFrame(keys);
  const {
    criticalFrame,
    reportFrame,
    highFrame,
    mediumFrame,
    lowFrame,
    quickWinFrame,
  } = buildLayoutFrames(keys);

  appendSections(
    headerFrame,
    criticalFrame,
    reportFrame,
    highFrame,
    mediumFrame,
    lowFrame,
    quickWinFrame
  );

  for (const key of keys) {
    const [nodeId, severity] = key.split("_");
    const value = document.getPluginData(key);
    const textContentJSON = JSON.parse(value);
    const title = textContentJSON.title;
    const selectedNote = textContentJSON.selectedNote;
    const note = textContentJSON.note;
    const isQuickWin = textContentJSON.quickWin || false;
    const noteCharacters = `${selectedNote ? selectedNote + "\n" : ""}${
      note ?? ""
    }`;

    const reportElementFrame = await buildOneReportElementFrame(
      key,
      title,
      selectedNote,
      note,
      noteCharacters,
      nodeId,
      isQuickWin
    );

    appendSectionContent(
      textContentJSON,
      criticalFrame,
      reportElementFrame,
      highFrame,
      mediumFrame,
      lowFrame,
      quickWinFrame
    );
  }
  reportPage.appendChild(reportFrame);
  figma.currentPage = reportPage;
  figma.viewport.scrollAndZoomIntoView([reportFrame]);
  return reportFrame;
}

function appendSectionContent(
  textContentJSON: any,
  criticalFrame: FrameNode | null,
  reportElementFrame: FrameNode,
  highFrame: FrameNode | null,
  mediumFrame: FrameNode | null,
  lowFrame: FrameNode | null,
  quickWinFrame: FrameNode | null
) {
  if (textContentJSON.severity === "critical" && criticalFrame) {
    criticalFrame.appendChild(reportElementFrame);
  } else if (textContentJSON.severity === "high" && highFrame) {
    highFrame.appendChild(reportElementFrame);
  } else if (textContentJSON.severity === "medium" && mediumFrame) {
    mediumFrame.appendChild(reportElementFrame);
  } else if (textContentJSON.severity === "low" && lowFrame) {
    lowFrame.appendChild(reportElementFrame);
  }
  if (textContentJSON.quickWin && quickWinFrame) {
    const clonedFrame = reportElementFrame.clone();
    replaceReportElementBulletWithStatus(clonedFrame, textContentJSON.severity);
    quickWinFrame.appendChild(clonedFrame);
  }
  const ordinalNum = reportElementFrame.parent?.children.length;
  if (!ordinalNum) return;
  replaceReportElementBullet(reportElementFrame, ordinalNum - 1);
}

function replaceReportElementBullet(
  reportElementFrame: FrameNode,
  ordinalNum: number
) {
  const textToChange = reportElementFrame.findOne(
    (node) => node.name.startsWith("•") && node.type === "TEXT"
  ) as TextNode;

  if (textToChange) {
    const newText = textToChange.characters.replace(
      /^•/,
      ordinalNum.toString()
    );
    textToChange.characters = newText;
    textToChange.name = textToChange.name.replace(/^•/, ordinalNum.toString());
  }
}

function replaceReportElementBulletWithStatus(
  reportElementFrame: FrameNode,
  status: string
) {
  const currentSeverityData =
    SEVERITY_LEVELS[status.toUpperCase() as keyof typeof SEVERITY_LEVELS];
  const textToChange = reportElementFrame.findOne(
    (node) => node.name.startsWith("•") && node.type === "TEXT"
  ) as TextNode;
  if (textToChange) {
    const newText = textToChange.characters.replace(
      /^•\./,
      currentSeverityData.symbol
    );
    textToChange.characters = newText;
    textToChange.name = textToChange.name.replace(
      /^•\./,
      currentSeverityData.symbol
    );
  }
}
async function buildOneReportElementFrame(
  key: string,
  title: any,
  selectedNote: any,
  note: any,
  noteCharacters: string,
  nodeId: string,
  isQuickWin: boolean
) {
  const textDataFrame = buildTextDataFrame(
    key,
    title,
    selectedNote,
    note,
    noteCharacters,
    nodeId,
    isQuickWin
  );

  const notesFrame = buildNotesElement();

  const screenShotFrame = await buildScreenShotFrame(nodeId);
  const reportElementFrame = buildAutoLayoutFrame(
    `re-${key}`,
    "HORIZONTAL",
    0,
    0,
    190
  );
  reportElementFrame.appendChild(textDataFrame);
  if (screenShotFrame) reportElementFrame.appendChild(screenShotFrame);
  reportElementFrame.appendChild(notesFrame);
  return reportElementFrame;
}

function appendSections(
  headerFrame: FrameNode,
  criticalFrame: FrameNode | null,
  reportFrame: FrameNode,
  highFrame: FrameNode | null,
  mediumFrame: FrameNode | null,
  lowFrame: FrameNode | null,
  quickWinFrame: FrameNode | null
) {
  const framesToAppend = [
    { frame: headerFrame, name: "Header" },
    { frame: quickWinFrame, name: "Quick Win" },
    { frame: criticalFrame, name: "Critical" },
    { frame: highFrame, name: "High" },
    { frame: mediumFrame, name: "Medium" },
    { frame: lowFrame, name: "Low" },
  ];

  framesToAppend.forEach(({ frame }) => {
    if (frame) {
      appendAndResize(frame, reportFrame, REPORT_FRAME_WIDTH, frame.height);
    }
  });
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
