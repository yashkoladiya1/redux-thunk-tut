import React, { Component } from 'react'
import { Button, Space } from "antd";
import { Table} from 'antd'
import { connect } from "react-redux";


const mapStateToProps=state=>({
  storeData:state.userItems.userData
})

const mapDispatchToProps=dispatch=>({
 
})

 class Usertable extends Component {
  columns = [
    {
      title: "first Name",
      dataIndex: "firstName",
    },
    {
      title: "middle Name",
      dataIndex: "middleName",
    },
    {
      title: "last Name",
      dataIndex: "lastName",
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: (record, data, i) => {
        return (
          <>
            <Space>
              <Button
                type="primary"
                onClick={() => this.handleEdit(i)}
                
                className="btn btn-success mx-2"
              >
                Edit
              </Button>
              <Button
                type="primary"
                danger
                onClick={() => this.handleDelete(i)}
                className="btn btn-danger mx-2"
              >
                Delete
              </Button>
            </Space>
          </>
        );
      },
    },
  ];
  render() {
    return (
      <div>
        <Table dataSource={this.props.storeData} columns={this.columns} />
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Usertable);