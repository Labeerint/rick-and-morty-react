import {Card, Modal, Typography} from "antd";
import {
    HeartTwoTone,
    FrownOutlined
} from '@ant-design/icons'
import React, {useState} from "react";
const { Title } = Typography;

const Character = ({character}) =>{
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
            <Card onClick={showModal} title={character.name} extra={character.status === "Alive" ? <Title level={5}><HeartTwoTone twoToneColor="#eb2f96" /> {character.status}</Title> : <h4><FrownOutlined /> {character.status}</h4>} style={{ width: 330, marginTop: 20, cursor: 'pointer' }}>
                <img src={character.image} alt=""/>
                <Title level={5}>Species: {character.species}</Title>
                <Title level={5}>Gender: {character.gender}</Title>
                <Title level={5}>Origin: {character.origin.name}</Title>
            </Card>
            <Modal
                title={character.name}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                style={{display: 'flex', justifyContent: 'center'}}
            >
                <img src={character.image} alt=""/>
                {character.status === "Alive" ? <Title level={3}><HeartTwoTone twoToneColor="#eb2f96" /> {character.status}</Title> : <h2><FrownOutlined /> {character.status}</h2>}
                <Title level={3}>ID: {character.id}</Title>
                <Title level={4}>Species: {character.species}</Title>
                <Title level={4}>Gender: {character.gender}</Title>
                {character.type.length !== 0 && <Title level={4}>Type: {character.type}</Title>}
                <Title level={4}>Location: {character.location.name}</Title>
                <Title level={4}>Created: {character.created}</Title>

            </Modal>
        </div>

    )
}

export default Character