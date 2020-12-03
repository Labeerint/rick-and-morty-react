import { Layout, Menu } from 'antd';
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

const { Header, Sider, Content } = Layout;

class App extends React.Component {
    characters = []

    componentDidMount() {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(({data})=>{
                this.characters = data.results
            })
    }

    state = {
    collapsed: false,
  };

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

            </Content>
          </Layout>
        </Layout>
    );
  }
}

export default App;
