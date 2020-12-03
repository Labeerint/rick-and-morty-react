import {Layout, Menu, Pagination} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined, AreaChartOutlined
} from '@ant-design/icons';
import React from "react";
import 'antd/dist/antd.css';
import './App.css'
import axios from "axios";
import Character from "./components/Character";

const { Header, Sider, Content } = Layout;

class App extends React.Component {


    componentDidMount() {
        this.fetchCharracters()
    }

    state = {
    collapsed: false,
        characters: [],
        info: {}
  };

    fetchCharracters(page = 1){
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
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
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                Characters
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                Episodes
              </Menu.Item>
              <Menu.Item key="3" icon={<AreaChartOutlined />}>
                Locations
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
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
                </div>{console.log(this.state.info)}
                <div className="pagi">
                    <Pagination defaultCurrent={1}
                                total={this.state.info.count && this.state.info.count}
                                defaultPageSize={20}
                                showSizeChanger={false}
                                onChange={(page)=>this.fetchCharracters(page)}
                    />
                </div>
            </Content>
          </Layout>
        </Layout>
    );
  }
}

export default App;
