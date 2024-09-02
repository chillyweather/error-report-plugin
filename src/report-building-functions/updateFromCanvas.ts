import { REPORT_PAGE } from "../constants";
export function updateFromCanvas() {
  const reportFrame = findReportFrame();
  if (!(reportFrame && reportFrame.type == "FRAME")) {
    return;
  }

  const keys = figma.root.getPluginDataKeys();
  const framesForUpdateNames: string[] = [];

  const framesForUpdate = reportFrame.findAll((node) =>
    node.name.startsWith("re-")
  );
  if (!(framesForUpdate && framesForUpdate.length > 0)) {
    figma.notify("No entries to update");
    return;
  }

  framesForUpdate.forEach((frame) => {
    framesForUpdateNames.push(frame.name.split("-")[1]);
  });

  for (const key in keys) {
    const foundKey = keys[key];
    if (!framesForUpdateNames.includes(foundKey)) {
      const nodeId = foundKey.split("_")[0];
      const node = figma.getNodeById(nodeId);
      const currentPage = getPage(node);
      removeNoteAndHighlight(currentPage, nodeId);

      figma.root.setPluginData(foundKey, "");
    }
  }

  function findReportFrame() {
    const reportPage = figma.root.children.find(
      (page) => page.name === REPORT_PAGE
    );
    if (!reportPage) {
      return undefined;
    }
    const reportFrame = reportPage.children.find(
      (child) => child.name === "report-frame"
    );
    return reportFrame;
  }
}

export function getPage(node: any): PageNode {
  if (node.type === "PAGE") {
    return node as PageNode;
  }
  if (node.parent) {
    return getPage(node.parent);
  }
  throw new Error("Node is not within a page");
}

export function removeNoteAndHighlight(page: PageNode, key: string) {
  const note = page.findOne((node) => node.name === key + "-note");
  if (note) note.remove();

  const highlight = page.findOne((node) => node.name === key + "-highlight");
  if (highlight) highlight.remove();
}
