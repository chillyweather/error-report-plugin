export function eraseNotesOnCanvas() {
  const pages = figma.root.children;
  pages.forEach((page) => {
    const notes = page.findChildren((node) => node.name.endsWith("-note"));
    notes.forEach((note) => {
      note.remove();
    });
    const highlights = page.findChildren((node) =>
      node.name.endsWith("-highlight")
    );
    highlights.forEach((highlight) => {
      highlight.remove();
    });
  });
}
