import {Layout, Menu} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined, AreaChartOutlined
} from '@ant-design/icons';
import React from "react";
import 'antd/dist/antd.css';
import './App.css'
import Filters from "./components/filters";
import {Link, Route} from "react-router-dom";
import Characters from "./components/Charecters";
import Locations from "./components/Locations";
import Episodes from "./components/Episodes";
import Pagin from "./components/Pagin";
import SearchCompon from "./components/Search";
import store from "./store";

const { Header, Sider, Content } = Layout;

class App extends React.Component {
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
          <Sider width={300} theme="light" trigger={null} collapsible collapsed={this.state.collapsed} >
            <div className="logo" />
            <Menu theme="light" mode="inline" onSelect={store.changeMenuItem.bind(store)} defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                  <Link to='/'>Characters</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                  <Link to='/episodes'>Episodes</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<AreaChartOutlined />}>
                  <Link to='/locations'>Locations</Link>
              </Menu.Item>
                {
                    !this.state.collapsed && <Filters/>
                }
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 10, display:"flex", justifyContent: 'space-between' }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
              <SearchCompon/>
            </Header>
            <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                }}
            >
                <Route exact path='/' render={()=><Characters characters={this.state.characters}/>}/>
                <Route path='/locations' render={()=><Locations locations={this.state.locations}/>} />
                <Route path='/episodes' component={Episodes}/>
                <div className="pagi">
                    <Pagin/>
                </div>
            </Content>
          </Layout>
        </Layout>
    );
  }
}

export default App;
