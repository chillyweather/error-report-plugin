const REPORT_FRAME_WIDTH = 1920;

const TEXT_WIDTH = 464;

const ERROR_COLOR = [
  {
    type: "SOLID",
    visible: true,
    opacity: 1,
    blendMode: "NORMAL",
    color: {
      r: 1,
      g: 0,
      b: 0,
    },
    boundVariables: {},
  },
];

const REPORT_PAGE = "📊 Audit result";
interface SeverityLevel {
  name: string;
  symbol: string;
  value: number;
}
const SEVERITY_LEVELS = {
  CRITICAL: {
    name: "Critical",
    symbol: "🟥",
    value: 4,
  },
  HIGH: {
    name: "High",
    symbol: "🟧",
    value: 3,
  },
  MEDIUM: {
    name: "Medium",
    symbol: "🟨",
    value: 2,
  },
  LOW: {
    name: "Low",
    symbol: "🟩",
    value: 1,
  },
};

export {
  REPORT_FRAME_WIDTH,
  TEXT_WIDTH,
  ERROR_COLOR,
  REPORT_PAGE,
  SEVERITY_LEVELS,
};
