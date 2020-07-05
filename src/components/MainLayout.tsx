import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import logo from '../logo.svg';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default ({children} : any) => (
    <>
        <Layout>
            <Header className="header">
            <div className="logo">
                <span>Teste</span>
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
            </Header>
            <Layout>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
                >
                {children}
                </Content>
            </Layout>
            </Layout>
        </Layout>
    </>
)