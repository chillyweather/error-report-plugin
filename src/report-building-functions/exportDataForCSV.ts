import { emit } from "@create-figma-plugin/utilities";
export function exportDataForCSV() {
  const document = figma.root;
  const savedData: any = {};
  const keys = document.getSharedPluginDataKeys("audit");
  for (const key of keys) {
    const value = document.getSharedPluginData("audit", key);
    const textContentJSON = JSON.parse(value);
    savedData[key] = textContentJSON;
  }

  emit("EXPORT_CSV", savedData);
}
