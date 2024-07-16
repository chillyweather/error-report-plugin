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
import { useState } from "preact/hooks";
import { useAtom } from "jotai";
import { noteAtom, isSelectionAtom } from "./atoms";
import Dropdown from "./Dropdown";

function Plugin() {
  const [note, setNote] = useAtom(noteAtom);
  const [, setIsSelection] = useState<boolean>(false);

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
        options={[
          { id: "error", name: "Error" },
          { id: "warning", name: "Warning" },
          { id: "notice", name: "Notice" },
          { id: "report", name: "Report" },
        ]}
        selectedOption={{ id: "error", name: "Error" }}
        onSelect={() => console.log("yey")}
      />
      <VerticalSpace space="large" />
      <Dropdown
        options={[
          { id: "yes", name: "Yes" },
          { id: "no", name: "No" },
        ]}
        selectedOption={{ id: "yes", name: "Yes" }}
        onSelect={() => console.log("yey-yey")}
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
