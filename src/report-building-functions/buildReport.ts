import { REPORT_FRAME_WIDTH } from "../constants";
import { buildAutoLayoutFrame } from "./buildAutoLayoutFrame";
import { buildHeaderFrame } from "./buildHeaderFrame";
import { buildLayoutFrames } from "./buildLayoutFrames";
import { buildNotesElement } from "./buildNotesElement";
import { buildScreenShotFrame } from "./buildScreenShotFrame";
import { buildTextDataFrame } from "./buildTextDataFrame";
export async function buildReport(selction: readonly SceneNode[]) {
  const document = figma.root;
  let reportPage = figma.root.children.find(
    (page) => page.name === "audit result"
  );
  if (!reportPage) {
    reportPage = figma.createPage();
    reportPage.name = "📊 Audit result";
  }
  const keys = document.getPluginDataKeys();

  const headerFrame = buildHeaderFrame(keys);
  const { criticalFrame, reportFrame, highFrame, mediumFrame, lowFrame } =
    buildLayoutFrames(keys);

  appendSections(
    headerFrame,
    criticalFrame,
    reportFrame,
    highFrame,
    mediumFrame,
    lowFrame
  );

  for (const key of keys) {
    const [nodeId, severity] = key.split("_");
    const value = document.getPluginData(key);
    const textContentJSON = JSON.parse(value);
    const title = textContentJSON.title;
    const selectedNote = textContentJSON.selectedNote;
    const note = textContentJSON.note;
    const noteCharacters = `${selectedNote ? selectedNote + "\n" : ""}${
      note ?? ""
    }`;

    const reportElementFrame = await buildOneReportElementFrame(
      key,
      title,
      selectedNote,
      note,
      noteCharacters,
      nodeId
    );

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

async function buildOneReportElementFrame(
  key: string,
  title: any,
  selectedNote: any,
  note: any,
  noteCharacters: string,
  nodeId: string
) {
  const textDataFrame = buildTextDataFrame(
    key,
    title,
    selectedNote,
    note,
    noteCharacters,
    nodeId
  );

  const notesFrame = buildNotesElement();

  const screenShotFrame = await buildScreenShotFrame(nodeId);
  const reportElementFrame = buildAutoLayoutFrame(key, "HORIZONTAL", 0, 0, 190);
  reportElementFrame.appendChild(textDataFrame);
  reportElementFrame.appendChild(screenShotFrame);
  reportElementFrame.appendChild(notesFrame);
  return reportElementFrame;
}

function appendSections(
  headerFrame: FrameNode,
  criticalFrame: FrameNode | null,
  reportFrame: FrameNode,
  highFrame: FrameNode | null,
  mediumFrame: FrameNode | null,
  lowFrame: FrameNode | null
) {
  const framesToAppend = [
    { frame: headerFrame, name: "Header" },
    { frame: criticalFrame, name: "Critical" },
    { frame: highFrame, name: "High" },
    { frame: mediumFrame, name: "Medium" },
    { frame: lowFrame, name: "Low" },
  ];

  framesToAppend.forEach(({ frame, name }) => {
    if (frame) {
      appendAndResize(frame, reportFrame, REPORT_FRAME_WIDTH, frame.height);
      console.log(`${name} frame appended and resized`);
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
