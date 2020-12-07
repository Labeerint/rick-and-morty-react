import {Pagination} from "antd";
import {observer} from "mobx-react-lite";
import store from "../store";


const Pagin = observer(() =>{
    return(
        <Pagination defaultCurrent={1}
                    current={store.currentPage}
                    total={store.info.count && store.info.count}
                    defaultPageSize={20}
                    showSizeChanger={false}
                    onChange={(page)=>store.selectPage(page)}
        />
    )
})

export default Pagin