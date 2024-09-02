import { addSectionTitle } from "./addSectionTitle";
import { buildAutoLayoutFrame } from "./buildAutoLayoutFrame";

export function buildLayoutFrames(keys: string[]) {
  const quickWins = keys
    .map((key) => {
      const value = figma.root.getPluginData(key);
      const textContentJSON = JSON.parse(value);
      return textContentJSON.quickWin ? key : null;
    })
    .filter((key) => key !== null);

  const criticalKeys = keys.filter((key) => key.includes("critical"));
  const highKeys = keys.filter((key) => key.includes("high"));
  const mediumKeys = keys.filter((key) => key.includes("medium"));
  const lowKeys = keys.filter((key) => key.includes("low"));

  const isQuickWins = quickWins.length > 0;
  const isMajor = keys.some((key) => key.includes("critical"));
  const isMinor = keys.some((key) => key.includes("high"));
  const isOfi = keys.some((key) => key.includes("medium"));
  const isNotes = keys.some((key) => key.includes("low"));
  const reportFrame = buildAutoLayoutFrame(
    "report-frame",
    "HORIZONTAL",
    0,
    0,
    120
  );
  reportFrame.fills = [];

  const quickWinFrame = isQuickWins
    ? buildAutoLayoutFrame("report-quick-wins", "VERTICAL", 100, 100, 86)
    : null;
  if (quickWinFrame)
    addSectionTitle("Quick Wins", quickWinFrame, quickWins || []);

  const criticalFrame = isMajor
    ? buildAutoLayoutFrame("report-critical", "VERTICAL", 100, 100, 86)
    : null;
  if (criticalFrame) addSectionTitle("Critical", criticalFrame, criticalKeys);

  const highFrame = isMinor
    ? buildAutoLayoutFrame("report-heigh", "VERTICAL", 100, 100, 86)
    : null;
  if (highFrame) addSectionTitle("High", highFrame, highKeys);

  const mediumFrame = isOfi
    ? buildAutoLayoutFrame("report-medium", "VERTICAL", 100, 100, 86)
    : null;
  if (mediumFrame) addSectionTitle("Medium", mediumFrame, mediumKeys);

  const lowFrame = isNotes
    ? buildAutoLayoutFrame("report-low", "VERTICAL", 100, 100, 86)
    : null;
  if (lowFrame) addSectionTitle("Low", lowFrame, lowKeys);

  return {
    criticalFrame,
    reportFrame,
    highFrame,
    mediumFrame,
    lowFrame,
    quickWinFrame,
  };
}
