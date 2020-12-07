import {Card, Typography} from "antd";
import React from "react";
const { Title } = Typography;

const Location = ({location}) =>{

    return(
        <div>
            <Card title={location.name} extra={<Title level={5}>{location.type}</Title>} style={{ width: 330, marginTop: 20 }}>
                <Title level={1}>{location.name}</Title>
            </Card>
        </div>

    )
}

export default Location