import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { NetworkConfig } from './network-info';
import { NetworkConfig as NetworkConfig2 } from './network-info-photon2.js';
import { CopyIcon } from './CopyIcon';

const transformData = (data1, data2) => {
  const result = [];
  const processConfig = (config) => {
    const configItems = [];
    for (const key in config) {
      for (const item in config[key]) {
        configItems.push(config[key][item]);
      }
    }
    return configItems;
  };

  const config1Items = processConfig(data1);
  const config2Items = processConfig(data2);

  config1Items.forEach((item, index) => {
    result.push({
      name: item.name,
      valuePhoton1: item.value,
      valuePhoton2: config2Items[index]?.value || 'N/A'
    });
  });

  return result;
};

const CopyIconWrapper = (props) => {
  if (props.value === 'N/A') {
    return <span>{props.value}</span>;
  }
  return <CopyIcon {...props} />;
};

const columns = [
  {
    headerName: 'Config',
    field: 'name',
    flex: 1,
    cellRenderer: CopyIcon,
    minWidth: 250,
  },
  {
    headerName: 'Network (Photon1)',
    field: 'valuePhoton1',
    flex: 2,
    cellRenderer: CopyIconWrapper,
  },
  {
    headerName: 'Network (Photon2)',
    field: 'valuePhoton2',
    flex: 2,
    cellRenderer: CopyIconWrapper,
  }
];

const NetworkTable = () => {
  const configData = transformData(NetworkConfig, NetworkConfig2);

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
