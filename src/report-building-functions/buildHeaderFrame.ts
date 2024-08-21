import { buildAutoLayoutFrame } from "./buildAutoLayoutFrame";

export function buildHeaderFrame(keys: string[]) {
  const headerFrame = buildAutoLayoutFrame(
    "report-header",
    "VERTICAL",
    100,
    100,
    50
  );
  const { metadataFrame, introFrame, countersFrame } = buildFirstLevelFrames();
  addMetaDataContent(metadataFrame);
  for (const frame of [metadataFrame, introFrame, countersFrame]) {
    headerFrame.appendChild(frame);
    frame.layoutSizingHorizontal = "FILL";
  }
  return headerFrame;
}
function addMetaDataContent(metadataFrame: FrameNode) {
  const leftMetaWrapper = buildAutoLayoutFrame(
    "report-left-meta-wrapper",
    "VERTICAL",
    0,
    0,
    0
  );
  const auditTitle = figma.createText();
  auditTitle.characters = "Audit Title";
  auditTitle.fontSize = 56;
  auditTitle.fontName = { family: "Inter", style: "Regular" };
  const auditDate = auditTitle.clone();
  auditDate.characters = "Audit Date";
  const companyName = auditTitle.clone();
  companyName.characters = "Company Name";
  const whatElse = auditTitle.clone();
  whatElse.characters = "What Else?";
  [auditTitle, auditDate, companyName, whatElse].forEach((node) =>
    leftMetaWrapper.appendChild(node)
  );
  const rightMetaWrapper = buildAutoLayoutFrame(
    "report-right-meta-wrapper",
    "VERTICAL",
    0,
    0,
    0
  );
  const logoFrame = buildAutoLayoutFrame(
    "report-logo-frame",
    "HORIZONTAL",
    0,
    0,
    0
  );
  logoFrame.cornerRadius = 999;
  logoFrame.resize(270, 270);
  logoFrame.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8509804010391235,
        g: 0.8509804010391235,
        b: 0.8509804010391235,
      },
      boundVariables: {},
    },
  ];
  const logoText = figma.createText();
  logoText.characters = "LOGO";
  logoText.fontSize = 70;
  logoText.fontName = { family: "Inter", style: "Regular" };
  logoFrame.appendChild(logoText);
  logoFrame.primaryAxisAlignItems = "CENTER";
  logoFrame.counterAxisAlignItems = "CENTER";

  metadataFrame.appendChild(leftMetaWrapper);
  metadataFrame.appendChild(logoFrame);
  metadataFrame.primaryAxisAlignItems = "SPACE_BETWEEN";
}

function buildFirstLevelFrames() {
  const metadataFrame = buildAutoLayoutFrame(
    "report-metadata",
    "HORIZONTAL",
    0,
    0,
    0
  );
  const introFrame = buildAutoLayoutFrame(
    "report-intro",
    "HORIZONTAL",
    0,
    0,
    0
  );
  const countersFrame = buildAutoLayoutFrame(
    "report-counters",
    "HORIZONTAL",
    0,
    0,
    0
  );
  return {
    metadataFrame,
    introFrame,
    countersFrame,
  };
}
