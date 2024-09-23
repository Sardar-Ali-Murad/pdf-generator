import React from "react";
import PDFGenerator from "./components/pdf-generator";
import { PDFViewer } from "@react-pdf/renderer";
import data from "./components/data";

const ViewInternalAuditReport = () => {
  const [viewPdf, setViewPdf] = React.useState(false);

  return (
    <div>
      <div className="row my-3" style={{ marginBottom: "20px" }}>
        <div
          className="btn btn-labeled btn-primary px-3 shadow fitContent globalFont"
          onClick={() => setViewPdf((pre) => !pre)}
        >
          {viewPdf ? "Remove Pdf View" : "View Pdf"}
        </div>
      </div>

      {viewPdf && (
        <PDFViewer style={{ width: "100%", height: "500px" }}>
          <PDFGenerator data={data} />
        </PDFViewer>
      )}
    </div>
  );
};

export default ViewInternalAuditReport;
