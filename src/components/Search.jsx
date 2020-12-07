import {Input} from "antd";
import store from "../store";
import {observer} from "mobx-react-lite";
const { Search } = Input;

const SearchCompon = observer(() =>{
    return(
        <Search
            style={{width:600}}
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            value={store.currentName}
            onChange={(e)=>store.inputName(e)}
        />
    )
})

export default SearchCompon