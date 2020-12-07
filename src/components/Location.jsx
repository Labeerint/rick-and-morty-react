import {Card, Modal, Typography} from "antd";
import {
    HeartTwoTone,
    FrownOutlined
} from '@ant-design/icons'
import React, {useState} from "react";
const { Title } = Typography;

const Location = ({location}) =>{
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return(
        <div>
            <Card onClick={showModal} title={location.name} extra={<Title level={5}>{location.type}</Title>} style={{ width: 330, marginTop: 20 }}>
                <Title level={1}>{location.name}</Title>
            </Card>
            {/*<Modal*/}
            {/*    title={location.name}*/}
            {/*    visible={isModalVisible}*/}
            {/*    onOk={handleOk}*/}
            {/*    onCancel={handleCancel}*/}
            {/*    style={{display: 'flex', justifyContent: 'center'}}*/}
            {/*>*/}
            {/*    <img src={location.image} alt=""/>*/}
            {/*    {location.status === "Alive" ? <Title level={3}><HeartTwoTone twoToneColor="#eb2f96" /> {location.status}</Title> : <h2><FrownOutlined /> {location.status}</h2>}*/}
            {/*    <Title level={3}>ID: {location.id}</Title>*/}
            {/*    <Title level={4}>Species: {location.species}</Title>*/}
            {/*    <Title level={4}>Gender: {location.gender}</Title>*/}
            {/*    {location.type.length !== 0 && <Title level={4}>Type: {location.type}</Title>}*/}
            {/*    <Title level={4}>Location: {location.location.name}</Title>*/}
            {/*    <Title level={4}>Created: {location.created}</Title>*/}

            {/*</Modal>*/}
        </div>

    )
}

export default Location