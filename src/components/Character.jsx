import {Card, Typography} from "antd";
import {
    HeartTwoTone,
    FrownOutlined
} from '@ant-design/icons'
const { Title } = Typography;

const Character = ({character}) =>{
    return(
        <Card title={character.name} extra={character.status === "Alive" ? <Title level={5}><HeartTwoTone twoToneColor="#eb2f96" /> {character.status}</Title> : <h4><FrownOutlined /> {character.status}</h4>} style={{ width: 330, marginTop: 20 }}>
            <img src={character.image} alt=""/>
            <Title level={5}>Species: {character.species}</Title>
            <Title level={5}>Gender: {character.gender}</Title>
            <Title level={5}>Origin: {character.origin.name}</Title>
        </Card>
    )
}

export default Character