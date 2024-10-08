import {
  Button,
  Columns,
  Container,
  Muted,
  render,
  Text,
  TextboxMultiline,
  VerticalSpace,
} from "@create-figma-plugin/ui";

import { emit, on } from "@create-figma-plugin/utilities";
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useAtom } from "jotai";
import { noteAtom } from "./atoms";
import { Dropdown, DropdownOption } from "tidy-ds";
import { dropdownOptions } from "./DropdownOptions";
import { createMultiPagePdf } from "./createMultiPagePdf";
import { Data, exportCsv } from "./exportCSV";

function Plugin() {
  const [note, setNote] = useAtom(noteAtom);
  const [, setIsSelection] = useState<boolean>(false);
  const [selectedSection, setSelectedSection] = useState<DropdownOption | null>(
    null
  );
  const [predefinedNotes, setPredefinedNotes] = useState<DropdownOption[]>([]);
  const [selectedNote, setSelectedNote] = useState<DropdownOption | null>(null);
  const [reportDataForCSV, setReportDataForCSV] = useState<any>(null);
  const [downloadCSV, setDownloadCSV] = useState<boolean>(false);

  const sections = dropdownOptions.map((options, index) => {
    const sectionTitle = Object.keys(options)[0];
    return {
      id: index,
      name: sectionTitle,
    };
  });

  useEffect(() => {
    console.log("selectedOption", selectedSection);
    if (selectedSection) {
      const sectionName = selectedSection.name;
      const notesSection = dropdownOptions.find(
        (element) => Object.keys(element)[0] === sectionName
      );
      if (!notesSection) return;

      const sectionData = (
        notesSection[sectionName as keyof typeof notesSection] as {
          value: string;
        }[]
      ).map((element, index) => {
        return {
          id: index,
          name: element.value,
        };
      });
      setPredefinedNotes(sectionData);
    }
  }, [selectedSection]);

  useEffect(() => {
    if (reportDataForCSV && downloadCSV) {
      //convert to csv
      exportCsv(reportDataForCSV as Data);
      setDownloadCSV(false);
    }
  }, [reportDataForCSV, downloadCSV]);

  const data = {
    title: selectedSection?.name,
    selectedNote: selectedNote?.name,
    note: note,
  };

  const handleQuickWinClick = () => {
    emit("QUICK_WIN");
  };

  const handleMajorNCClick = () => {
    emit("CRITICAL", data);
  };

  const handleMinorNCClick = () => {
    emit("HIGH", data);
  };
  const handleOfiClick = () => {
    emit("MEDIUM", data);
  };
  const handleNoticeClick = () => {
    emit("LOW", data);
  };
  const handleReport = () => {
    emit("REPORT");
  };

  const handleUpdateFromCanvas = () => {
    emit("UPDATE_FROM_CANVAS");
  };

  const handleEraseReport = () => {
    emit("ERASE");
  };

  const handleExportPDF = () => {
    emit("EXPORT_PDF");
  };

  const handleExportMultipagePDF = () => {
    emit("EXPORT_MULTIPAGE_PDF");
  };

  const handleExportCSV = () => {
    emit("EXPORT_CSV");
    setDownloadCSV(true);
  };

  const handleEraseNotesOnCanvas = () => {
    emit("ERASE_NOTES_ON_CANVAS");
  };

  on("SELECTION", () => {
    setIsSelection(true);
  });
  on("NO_SELECTION", () => {
    setIsSelection(false);
  });

  on("PDF", (pdf: Uint8Array) => {
    console.log("pdf sent");
    const blob = new Blob([pdf], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "report.pdf";
    a.click();
    URL.revokeObjectURL(url);
  });

  on("PDF_MULTIPAGE", async (pdfArrays: Uint8Array[]) => {
    createMultiPagePdf(pdfArrays);
  });

  on("EXPORT_CSV", (savedData: any) => {
    setReportDataForCSV(savedData);
  });

  return (
    <Container space="medium">
      <VerticalSpace space="large" />
      <Dropdown
        options={sections}
        onSelect={setSelectedSection}
        selectedOption={selectedSection}
        placeholder="Note type"
      />
      <VerticalSpace space="large" />
      <Dropdown
        options={predefinedNotes}
        onSelect={setSelectedNote}
        selectedOption={selectedNote}
        placeholder="Note content"
      />
      <div>
        <VerticalSpace space="medium" />
        <Text>
          <Muted>Note text:</Muted>
        </Text>
        <VerticalSpace space="small" />
        <TextboxMultiline
          onValueInput={setNote}
          value={note}
          variant="border"
          style={{ height: "84px" }}
        />
        <VerticalSpace space="small" />
        <VerticalSpace space="extraLarge" />
        <Columns space="extraSmall">
          <Button
            fullWidth
            onClick={handleNoticeClick}
            style={{
              backgroundColor: "#C4FA8E",
              color: "#515151",
              width: "100%",
            }}
          >
            Low
          </Button>
          <Button
            fullWidth
            onClick={handleOfiClick}
            style={{
              backgroundColor: "#FFFF02",
              color: "#515151",
              width: "100%",
            }}
          >
            Medium
          </Button>
          <Button
            fullWidth
            onClick={handleMinorNCClick}
            style={{
              backgroundColor: "#FFBF01",
              color: "#515151",
              width: "100%",
            }}
          >
            High
          </Button>
          <Button
            fullWidth
            onClick={handleMajorNCClick}
            style={{
              backgroundColor: "#FD8181",
              color: "#515151",
              width: "100%",
            }}
          >
            Critical
          </Button>
          {/* <Button
            fullWidth
            onClick={() => {}}
            style={{
              backgroundColor: "#a8a8a8",
              width: "100%",
            }}
          >
            C1
          </Button>
          <Button
            fullWidth
            onClick={() => {}}
            style={{
              backgroundColor: "#a8a8a8",
              width: "100%",
            }}
          >
            C2
          </Button>
          <Button
            fullWidth
            onClick={() => {}}
            style={{
              backgroundColor: "#a8a8a8",
              width: "100%",
            }}
          >
            C3
          </Button> */}
        </Columns>
        <VerticalSpace space="extraLarge" />
        <Button
          fullWidth
          onClick={handleQuickWinClick}
          style={{
            backgroundColor: "#ffcc84",
            color: "#2d2d2d",
          }}
        >
          Quick win 🏆
        </Button>
        <VerticalSpace space="medium" />
        <Button fullWidth onClick={handleReport}>
          Generate report
        </Button>
        <VerticalSpace space="medium" />
        <Button
          fullWidth
          onClick={handleExportPDF}
          style={{
            backgroundColor: "#468079",
          }}
        >
          Export report (as one page)
        </Button>
        <VerticalSpace space="medium" />
        <Button
          fullWidth
          onClick={handleExportMultipagePDF}
          style={{
            backgroundColor: "#417EAA",
          }}
        >
          Export report (multi-page)
        </Button>
        <VerticalSpace space="medium" />
        <Button
          fullWidth
          onClick={handleExportCSV}
          style={{
            backgroundColor: "#1f1ab5",
          }}
        >
          Export report (CSV)
        </Button>
        <VerticalSpace space="medium" />
        <Button
          fullWidth
          onClick={handleUpdateFromCanvas}
          style={{
            backgroundColor: "#800582",
          }}
        >
          Update from canvas ↑
        </Button>
        <VerticalSpace space="medium" />
        <Button
          fullWidth
          onClick={handleEraseNotesOnCanvas}
          style={{
            backgroundColor: "#c15400",
          }}
        >
          Erase notes on canvas
        </Button>
        <VerticalSpace space="medium" />
        <Button
          fullWidth
          onDblClick={handleEraseReport}
          style={{
            backgroundColor: "#C11700",
          }}
        >
          Erase report (double click)
        </Button>
      </div>
    </Container>
  );
}

export default render(Plugin);
