import "ag-grid-community/styles/ag-theme-alpine.css";
import React, { useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import "ag-grid-community/styles/ag-grid.css";
import { AgGridReact } from "ag-grid-react";

export default function TableView(props) {
  const { t } = useTranslation();
  const columnDefs = props.tableConfig?.columnDefs || [];
  const defaultColDef = props.tableConfig?.defaultColDef || {};
  const rowData = props.rowData || [];
  const gridRef = useRef();

  const sizeColumnsToFit = useCallback(() => {
    gridRef.current?.api?.sizeColumnsToFit();
  }, []);

  const setTranslatedHeaders = useCallback(() => {
    const translatedHeaders = columnDefs.map((col) => {
      return { ...col, headerName: t(col.headerName) };
    });
    gridRef.current.api.setColumnDefs(translatedHeaders);
  }, []);

  const onGridReady = () => {
    sizeColumnsToFit();
    setTranslatedHeaders();
  };

  return (
    <div className="table-container ag-theme-alpine" style={{ height: 450 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        animateRows={true}
        defaultColDef={defaultColDef}
        rowHeight={35}
        pagination={true}
        paginationAutoPageSize={true}
        onGridReady={onGridReady}
        onGridSizeChanged={sizeColumnsToFit}
        ref={gridRef}
      />
    </div>
  );
}
