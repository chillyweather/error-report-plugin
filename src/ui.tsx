import {
  Button,
  Columns,
  Container,
  Muted,
  render,
  Text,
  Textbox,
  TextboxMultiline,
  VerticalSpace,
} from "@create-figma-plugin/ui";
import { emit, on } from "@create-figma-plugin/utilities";
import { h, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useAtom } from "jotai";
import { noteAtom, isSelectionAtom } from "./atoms";
import Dropdown from "./Dropdown";
import { dropdownOptions } from "./DropdownOptions";

function Plugin() {
  const [note, setNote] = useAtom(noteAtom);
  const [, setIsSelection] = useState<boolean>(false);
  const [selectedSection, setSelectedSection]: any = useState(null);
  const [predefinedNotes, setPredefinedNotes] = useState<any>([]);
  const [selectedNote, setSelectedNote] = useState(null);

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
      const notesSection: any = dropdownOptions.find(
        (element) => Object.keys(element)[0] === sectionName
      );
      if (!notesSection) return;
      const notesSectionElement = notesSection[sectionName] || null;
      const sectionData = notesSection[sectionName].map(
        (element: any, index: number) => {
          return {
            id: index,
            name: element.value,
          };
        }
      );
      setPredefinedNotes(sectionData);
    }
  }, [selectedSection]);

  useEffect(() => {
    console.log("selectedNote", selectedNote);
  }, [selectedNote]);

  const data = {
    note: note,
  };

  const handleErrorClick = () => {
    emit("ERROR", data);
  };
  const handleWarningClick = () => {
    emit("WARNING", data);
  };
  const handleNoticeClick = () => {
    emit("NOTICE", data);
  };
  const handleReport = () => {
    emit("REPORT");
  };

  on("SELECTION", () => {
    setIsSelection(true);
  });
  on("NO_SELECTION", () => {
    setIsSelection(false);
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
            onClick={handleErrorClick}
            style={{ backgroundColor: "darkRed" }}
          >
            Error
          </Button>
          <Button
            fullWidth
            onClick={handleWarningClick}
            style={{
              backgroundColor: "darkOrange",
            }}
          >
            Warning
          </Button>
          <Button
            fullWidth
            onClick={handleNoticeClick}
            style={{
              backgroundColor: "lightSlateGray",
            }}
          >
            Notice
          </Button>
        </Columns>
        <VerticalSpace space="extraLarge" />
        <Button fullWidth onClick={handleReport}>
          Generate report
        </Button>
      </div>
    </Container>
  );
}

export default render(Plugin);
