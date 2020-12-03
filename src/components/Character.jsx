import {Card} from "antd";
import {
    HeartTwoTone,
    FrownOutlined
} from '@ant-design/icons'

const Characters = ({character}) =>{
    return(
        <Card title={character.name} extra={character.status === "Alive" ? <h4><HeartTwoTone twoToneColor="#eb2f96" /> {character.status}</h4> : <h4><FrownOutlined /> {character.status}</h4>} style={{ width: 330 }}>
            <img src={character.image} alt=""/>
            <h3>Species: {character.species}</h3>
            <h3>Gender: {character.gender}</h3>
            <h3>Origin: {character.origin.name}</h3>
        </Card>
    )
}

export default Characters