import store from "../store";
import React from "react";
import {observer} from "mobx-react-lite";
import {Table} from "antd";


const Locations = observer(({locations}) =>{
    React.useEffect(()=>{
        store.fetchLocations()
    })

    const columns = [
        {
            title: 'N',
            dataIndex: 'id',
            key: 'id',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Dimension',
            dataIndex: 'dimension',
            kay: 'dimension'
        }
    ];

    const data = store.locations

    return(
        <div className="characters">
            <Table columns={columns} dataSource={data} pagination={false} />
        </div>
    )
})

export default Locations