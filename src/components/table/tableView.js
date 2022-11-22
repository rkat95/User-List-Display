import { useDispatch } from "react-redux";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { setSelectedUser } from "../../features/users/usersSlice";
import React, { useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "ag-grid-community/styles/ag-grid.css";
import { AgGridReact } from "ag-grid-react";
import "./tableView.scss";

export default function TableView(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const columnDefs = props.tableConfig?.columnDefs || [];
  const defaultColDef = props.tableConfig?.defaultColDef || {};
  const rowData = props.rowData || [];

  const gridRef = useRef();

  const rowStyle = { fontSize: 12 };

  const sizeColumnsToFit = useCallback(() => {
    gridRef.current?.api?.sizeColumnsToFit();
  }, []);

  const setTranslatedHeaders = useCallback(() => {
    const translatedHeaders = columnDefs.map((col) => {
      return { ...col, headerName: t(col.headerName) };
    });
    gridRef.current.api.setColumnDefs(translatedHeaders);
  }, []);

  const onRowClicked = (event) => {
    dispatch(setSelectedUser(event.data));
    navigate("/User-Display-List/user-details");
  };

  const onGridReady = () => {
    sizeColumnsToFit();
    setTranslatedHeaders();
  };

  return (
    <div className="table-container ag-theme-alpine" style={{ height: 350 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        animateRows={true}
        defaultColDef={defaultColDef}
        rowHeight={30}
        headerHeight={40}
        pagination={true}
        paginationAutoPageSize={true}
        onGridReady={onGridReady}
        onGridSizeChanged={sizeColumnsToFit}
        rowStyle={rowStyle}
        ref={gridRef}
        onRowClicked={onRowClicked}
      />
    </div>
  );
}
