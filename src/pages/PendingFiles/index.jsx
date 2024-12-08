import { BBButton, BBSectionCard, BBTable } from "@components";
import { useTitle } from "../../App";
import { PendingITRFiles } from "@constants";

const PendingFiles = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Pending ITR Files");

  const tableColumn = [
    {
      key: "id",
      title: "SL No",
      dataIndex: "ID",
      render: (_, record, index) => index + 1,
    },
    {
      key: "Name",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "Pan No",
      title: "Pan No.",
      dataIndex: "panNo",
    },
    {
      key: "AY",
      title: "AY",
      dataIndex: "ay",
    },
    {
      key: "Tax Amount",
      title: "Tax Amount",
      dataIndex: "taxAmount",
      render: (_, record) => (record.taxAmount ? record.taxAmount : "---"),
    },
    {
      key: "action",
      title: "Action",
      dataIndex: "action",
      fixed: "right",
      width: "26rem",
      render: () => (
        <div className="d-flex align-center justify-end gap-3">
          <BBButton isEditBtn isTableBtn className={"mr-4 py-0 d-block"}>
            Edit
          </BBButton>
          <BBButton
            danger
            isDangerBtn
            isTableBtn
            className={"mr-4 py-0 d-block"}
          >
            Delete
          </BBButton>
        </div>
      ),
    },
  ];
  return (
    <BBSectionCard>
      <BBTable
        tableLayout={"auto"}
        tableContainerClassName={"PendingFilesTableWrapper"}
        tableColumn={tableColumn}
        tableDataSource={PendingITRFiles}
        scroll={{
          x: 1000,
          y: 600,
        }}
        responsive
        showPagination={PendingITRFiles.length > 10}
      />
    </BBSectionCard>
  );
};

export default PendingFiles;
