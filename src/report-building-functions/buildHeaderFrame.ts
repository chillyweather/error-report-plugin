import { buildAutoLayoutFrame } from "./buildAutoLayoutFrame";
import { convertHexColorToRgbColor } from "@create-figma-plugin/utilities";

export function buildHeaderFrame(keys: string[]) {
  const headerFrame = buildAutoLayoutFrame(
    "report-header",
    "VERTICAL",
    100,
    100,
    50
  );
  const { metadataFrame, introFrame, countersFrame } = buildFirstLevelFrames();
  const separatorOne = figma.createLine();
  const separatorTwo = figma.createLine();
  addMetaDataContent(metadataFrame);
  addIntroContent(introFrame);
  for (const element of [
    metadataFrame,
    separatorOne,
    introFrame,
    separatorTwo,
    countersFrame,
  ]) {
    headerFrame.appendChild(element);
    element.layoutSizingHorizontal = "FILL";
  }
  return headerFrame;
}

function addCounterContent(countersFrame: FrameNode) {
  const lowCounter = figma.createFrame();
  lowCounter.resize(268, 268);
}

function addIntroContent(introFrame: FrameNode) {
  const leftIntroWrapper = buildAutoLayoutFrame(
    "report-left-intro-wrapper",
    "VERTICAL",
    0,
    0,
    24
  );
  const introTitle = figma.createText();
  introTitle.characters = "Short Intro";
  introTitle.fontSize = 50;
  introTitle.fontName = { family: "Inter", style: "Bold" };
  introFrame.appendChild(introTitle);
  const introText = figma.createText();
  introText.characters = "This is a short intro to the report.";
  introText.fontSize = 35;
  introText.fontName = { family: "Inter", style: "Regular" };
  [introTitle, introText].forEach((node) => leftIntroWrapper.appendChild(node));

  const rightIntroWrapper = buildAutoLayoutFrame(
    "report-right-intro-wrapper",
    "VERTICAL",
    0,
    0,
    16
  );
  const legendTitle = figma.createText();
  legendTitle.characters = "Severity levels";
  legendTitle.fontSize = 35;
  legendTitle.fontName = { family: "Inter", style: "Bold" };
  const legendRow1 = buildOneLegendRow("Low", "52CE50");
  const legendRow2 = buildOneLegendRow("Medium", "F5EF4B");
  const legendRow3 = buildOneLegendRow("High", "F5AE4B");
  const legendRow4 = buildOneLegendRow("Critical", "FF0000");
  [legendTitle, legendRow1, legendRow2, legendRow3, legendRow4].forEach(
    (node) => rightIntroWrapper.appendChild(node)
  );

  introFrame.appendChild(leftIntroWrapper);
  introFrame.appendChild(rightIntroWrapper);
  introFrame.primaryAxisAlignItems = "SPACE_BETWEEN";
}

function buildOneLegendRow(level: string, color: string) {
  const legendRow = buildAutoLayoutFrame(
    "report-legend-row",
    "HORIZONTAL",
    0,
    0,
    32
  );
  const legendLevel = figma.createText();
  legendLevel.characters = level.toUpperCase();
  legendLevel.fontSize = 28;
  legendLevel.fontName = { family: "Inter", style: "Bold" };
  legendLevel.resize(192, legendLevel.height);
  const legendColor = figma.createRectangle();
  legendColor.resize(46, 46);
  if (color) {
    const rgbColor = convertHexColorToRgbColor(color);
    console.log("rgbColor", rgbColor);
    if (rgbColor) {
      legendColor.fills = [
        {
          type: "SOLID",
          color: rgbColor,
        },
      ];
    }
  }
  legendColor.cornerRadius = 999;
  const legendExplanation = figma.createText();
  legendExplanation.characters = "Short explanation";
  legendExplanation.fontSize = 24;
  legendExplanation.fontName = { family: "Inter", style: "Regular" };
  legendExplanation.resize(220, legendExplanation.height);
  legendRow.appendChild(legendColor);
  legendRow.appendChild(legendLevel);
  legendRow.appendChild(legendExplanation);

  return legendRow;
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
