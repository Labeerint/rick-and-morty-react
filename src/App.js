import {Input, Layout, Menu, Pagination} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined, AreaChartOutlined
} from '@ant-design/icons';
import React from "react";
import 'antd/dist/antd.css';
import './App.css'
import axios from "axios";
import Character from "./components/Character";
import Filters from "./components/filters";
const { Search } = Input;
const { Header, Sider, Content } = Layout;

class App extends React.Component {


    componentDidMount() {
        this.fetchCharracters()
    }

    state = {
    collapsed: false,
        characters: [],
        info: {},
        currentPage: 1,
        currentName: '',
        currentStatus: '',
        currentSpecies: '',
        currentGender: '',
  };

    onFilter(payload){
        payload &&
        this.setState({
            [payload.name]:payload.property,
            currentPage: 1
        })
        setTimeout(()=>this.fetchCharracters(),0)
    }

    selectPage(page){
        this.setState({
            currentPage: page
        })
        setTimeout(()=>this.fetchCharracters(),0)
    }

    inputName(e){
        this.setState({
            currentName: e.target.value,
            currentPage: 1
        })
        setTimeout(()=>this.fetchCharracters(),0)
    }

    fetchCharracters(){
        console.log(`https://rickandmortyapi.com/api/character?page=${this.state.currentPage}
            ${this.state.currentName.length > 0 ? `&name=${this.state.currentName}` : ''}
            ${this.state.currentStatus.length > 0 ? `&status=${this.state.currentStatus}` :''}
            ${this.state.currentSpecies.length > 0 ? `&species=${this.state.currentSpecies}`: ''}
            ${this.state.currentGender.length > 0 ? `&gender=${this.state.currentGender}`: ''}`)
        axios.get(`https://rickandmortyapi.com/api/character?page=${this.state.currentPage}
            ${this.state.currentName.length > 0 ? `&name=${this.state.currentName}` : ''}
            ${this.state.currentStatus.length > 0 ? `&status=${this.state.currentStatus}` :''}
            ${this.state.currentSpecies.length > 0 ? `&species=${this.state.currentSpecies}`: ''}
            ${this.state.currentGender.length > 0 ? `&gender=${this.state.currentGender}`: ''}`)
            .then(({data})=>{
                this.setState({characters:data.results, info: data.info})
            })
    }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
        <Layout>
          <Sider width={300} theme="light" trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                Characters
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                Episodes
              </Menu.Item>
              <Menu.Item key="3" icon={<AreaChartOutlined />}>
                Locations
              </Menu.Item>
                {
                    !this.state.collapsed && <Filters currentStatus={this.state.currentStatus}
                                                      currentGender={this.state.currentGender}
                                                      currentSpecies={this.state.currentSpecies}
                                                      onFilter={(a)=>this.onFilter(a)}
                    />
                }
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 10, display:"flex", justifyContent: 'space-between' }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
                <Search
                    style={{width:600}}
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    value={this.state.currentName}
                    onChange={(e)=>this.inputName(e)}
                />
            </Header>
            <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                }}
            >
                <div className="characters">
                    {
                        this.state.characters.length > 0 &&
                        this.state.characters.map(i => <Character key={i.id} character={i} />)
                    }
                </div>
                <div className="pagi">
                    <Pagination defaultCurrent={1}
                                current={this.state.currentPage}
                                total={this.state.info.count && this.state.info.count}
                                defaultPageSize={20}
                                showSizeChanger={false}
                                onChange={(page)=>this.selectPage(page)}
                    />
                </div>
            </Content>
          </Layout>
        </Layout>
    );
  }
}

export default App;
