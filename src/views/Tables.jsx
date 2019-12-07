import React from "react";
import ReactTable from 'react-table'

class Tables extends React.Component {
  render() {
    const data = [{
      name: 'Daarun Shaikh',
      del: 34,
      undel: 27,
      na: 0,
      delPercentage: 97
    },
    {
      name: 'Daarun Shaikh',
      del: 34,
      undel: 27,
      na: 0,
      delPercentage: 97
    },
    {
      name: 'Daarun Shaikh',
      del: 34,
      undel: 27,
      na: 0,
      delPercentage: 97
    },
    {
      name: 'Daarun Shaikh',
      del: 34,
      undel: 27,
      na: 0,
      delPercentage: 97
    },
    {
      name: 'Daarun Shaikh',
      del: 34,
      undel: 27,
      na: 0,
      delPercentage: 97
    },
    {
      name: 'Daarun Shaikh',
      del: 34,
      undel: 27,
      na: 0,
      delPercentage: 97
    },
    {
      name: 'Daarun Shaikh',
      del: 34,
      undel: 27,
      na: 0,
      delPercentage: 97
    }
  ]

    const columns = [{
      Header: 'FE NAME',
      accessor: 'name'
    }, {
      Header: 'DEL',
      accessor: 'del',
    }, {
      Header: 'UNDEL',
      accessor: 'undel'
    }, {
      Header: 'NA',
      accessor: 'na'
    },
    {
      Header: 'DELIVERY IN %',
      accessor: 'delPercentage'
    }
    ]

    return (
      <>
      <div className="content reactTable-width ">
      <h3>FE Performance</h3>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={5}
        />
      </div>
      </>
    );
  }
}

export default Tables;
