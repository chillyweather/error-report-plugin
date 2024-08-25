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

function Plugin() {
  const [note, setNote] = useAtom(noteAtom);
  const [, setIsSelection] = useState<boolean>(false);
  const [selectedSection, setSelectedSection] = useState<DropdownOption | null>(
    null
  );
  const [predefinedNotes, setPredefinedNotes] = useState<DropdownOption[]>([]);
  const [selectedNote, setSelectedNote] = useState<DropdownOption | null>(null);

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

  const data = {
    title: selectedSection?.name,
    selectedNote: selectedNote?.name,
    note: note,
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
  const handleEraseReport = () => {
    emit("ERASE");
  };

  const handleExportPDF = () => {
    emit("EXPORT_PDF");
  };

  const handleExportMultipagePDF = () => {
    emit("EXPORT_MULTIPAGE_PDF");
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
            }}
          >
            Critical
          </Button>
        </Columns>
        <VerticalSpace space="extraLarge" />
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
