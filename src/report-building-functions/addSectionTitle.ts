export function addSectionTitle(
  title: string,
  frame: FrameNode,
  keys: string[]
) {
  const sectionTitle = figma.createText();
  sectionTitle.characters = `${title.toUpperCase()}(${keys.length})`;
  sectionTitle.fontName = {
    family: "Inter",
    style: "Bold",
  };
  sectionTitle.fontSize = 70;
  frame.appendChild(sectionTitle);
}
