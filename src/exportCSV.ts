export interface Data {
  [key: string]: {
    title: string;
    selectedNote: string;
    note: string;
    link: {
      type: string;
      value: string;
    };
    severity: string;
    quickWin: boolean;
  };
}

export function exportCsv(data: Data): void {
  // Define the CSV headers
  const headers: string[] = [
    "ID",
    "Problem type",
    "Selected problem",
    "Note",
    "Link Type",
    "Link Value",
    "Severity",
    "Quick Win",
  ];

  // Create a list to store the CSV rows
  const rows: string[][] = [];

  // Iterate over the data and create CSV rows
  Object.keys(data).forEach((key: string) => {
    const value = data[key];
    const row: string[] = [
      key,
      value.title,
      value.selectedNote,
      value.note,
      value.link.type,
      value.link.value,
      value.severity,
      value.quickWin ? "Yes" : "No",
    ];
    rows.push(row);
  });

  // Create a CSV string
  const csvString = `${headers.join(",")}\n${rows
    .map((row) => row.join(","))
    .join("\n")}`;

  // Create a blob and download the CSV file
  const blob = new Blob([csvString], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "output.csv";
  link.click();
}
