import React from 'react';
import { Layout } from 'antd';
import './App.css';
import DashBoardComponent from "./components/layout/DashBoardComponent"
import Header from './components/header/Header';
const { Footer, Content } = Layout;

const App = () => (
  <div>
    <Layout>
      <Header/>
      <Content style={{background: "#F4F8FB"}}>
        <DashBoardComponent/>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
);

export default App;