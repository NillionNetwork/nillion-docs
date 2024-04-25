import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the grid
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme applied to the grid
import AwesomeProjects from './awesome-projects.json';

const ProjectsTable = () => {
  const [rowData] = useState(AwesomeProjects);
  const [colDefs] = useState([
    {
      field: 'project',
      width: '160px',
      cellRenderer: (params) => {
        return params.data?.website ? (
          <a href={params.data.website} target="_blank" rel="noopener">
            {params.value}
          </a>
        ) : (
          params.value
        );
      },
    },
    { field: 'description', flex: 1 },
    {
      field: 'tags',
      sort: 'asc',
      width: '140px',
      cellRenderer: (params) => params.value.join(', '),
    },
    {
      field: 'githubRepo',
      cellRenderer: (params) => {
        const [, repo] = params?.value?.split('github.com/');
        return repo ? (
          <a href={params.value} target="_blank" rel="noopener">
            {repo}
          </a>
        ) : (
          params.value
        );
      },
    },
    {
      field: 'discussions',
      width: '120px',
      cellRenderer: (params) => {
        const discussionsLink = params.value;
        return discussionsLink ? (
          <a href={params.value} target="_blank" rel="noopener">
            💬
          </a>
        ) : (
          ''
        );
      },
    },
  ]);

  return (
    <div className="ag-theme-quartz" style={{ height: 400 }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};

export default ProjectsTable;
