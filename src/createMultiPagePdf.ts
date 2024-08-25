import { PDFDocument } from "pdf-lib";
async function createMultiPagePdf(pdfPagesData: Uint8Array[]) {
  const mergedPdf = await PDFDocument.create();

  for (const pdfPageData of pdfPagesData) {
    const pdfDoc = await PDFDocument.load(pdfPageData);
    const [copiedPage] = await mergedPdf.copyPages(pdfDoc, [0]);
    mergedPdf.addPage(copiedPage);
  }

  const mergedPdfBytes = await mergedPdf.save();

  const blob = new Blob([mergedPdfBytes], { type: "application/pdf" });
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = "Audit result.pdf";

  downloadLink.click();
}

export { createMultiPagePdf };
