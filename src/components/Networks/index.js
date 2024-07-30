import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { NetworkConfig } from './network-info';
import { CopyIcon } from './CopyIcon';

const transformData = (data) => {
  const result = [];
  for (const key in data) {
    for (const config in data[key]) {
      result.push(data[key][config]);
    }
  }
  return result;
};

const configData = transformData(NetworkConfig);

const columns = [
  {
    headerName: 'Config',
    field: 'name',
    flex: 1,
    cellRenderer: CopyIcon,
    minWidth: 300,
  },
  {
    headerName: 'Value',
    field: 'value',
    flex: 2,
    cellRenderer: CopyIcon,
  },
];

const NetworkTable = () => {
  return (
    <div
      className="ag-theme-alpine"
      style={{ height: '100%', width: '100%', fontSize: '12px' }}
    >
      <AgGridReact
        rowData={configData}
        columnDefs={columns}
        domLayout="autoHeight"
        copyHeadersToClipboard
      />
    </div>
  );
};

export default NetworkTable;
