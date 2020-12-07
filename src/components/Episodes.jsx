import store from "../store";
import React from "react";
import {observer} from "mobx-react-lite";

import { Table} from 'antd';

const Episodes = observer(() =>{
    React.useEffect(()=>{
        store.fetchEpisodes()
    },[])

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
            title: 'Air data',
            dataIndex: 'air_date',
            key: 'air_date',
        }
    ];

    let data = store.episodes

    return(
        <div className='characters'>
            <Table columns={columns} dataSource={data} pagination={false} />
        </div>
    )
})

export default Episodes