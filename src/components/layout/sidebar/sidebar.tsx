import { useState } from "react";
import { Drawer, Layout, Menu, Affix } from "antd";
import { AlignLeftOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Link } from "react-router-dom";


type MenuItemType = {
    key: string;
    icon: JSX.Element;
    label: string;
    path: string;
};



const menuItems: MenuItemType[] = [
    {
        key: "1",
        icon: <UserOutlined />,
        label: "Home",
        path: "/home",
    },
    {
        key: "2",
        icon: <VideoCameraOutlined />,
        label: "Discussion",
        path: "/discussion",
    },
    {
        key: "3",
        icon: <UploadOutlined />,
        label: "Programs",
        path: "/programs",
    },
];


const SidebarComponent = ({ outlet }: any) => {
    const [iscollapsed, setIsCollapsed] = useState(true);
    const [isopen, setIsOpen] = useState(false);

    const { Content } = Layout;

    return (
        <>
            <Drawer
                rootClassName="Drawer"
                placement="left"
                onClose={() => setIsOpen(false)}
                open={isopen}
            >
            </Drawer>
            <Layout className="layout" style={{ minHeight: "100vh" }}>
                {window.innerWidth < 600 && (
                    <Sider trigger={null} collapsible collapsed={iscollapsed} collapsedWidth={0} breakpoint="lg"
                        style={{ position: "fixed", height: "100vh" }}>
                        <div className="demo-logo-vertical" />
                        <Menu
                            theme="dark"
                            mode="inline"
                            defaultSelectedKeys={['1']}
                        >
                            {menuItems.map((item) => (
                                <Menu.Item key={item.key} icon={item.icon}>
                                    <Link to={item.path}>{item.label}</Link>
                                </Menu.Item>
                            ))}
                        </Menu>
                    </Sider>
                )}
                <Layout className="site-layout">
                    <Affix offsetTop={0}>
                        <Header style={{ padding: 0, background: "#fff", display: 'flex', alignItems: 'center' }}>
                            <h3 style={{ fontSize: "20px", paddingLeft: "0.5em" }}>React Learning</h3>
                            {window.innerWidth > 600 && (
                                <Menu
                                    theme="light"
                                    mode="horizontal"
                                    defaultSelectedKeys={['1']}
                                    style={{ marginLeft: "auto" }}

                                >
                                    {menuItems.map((item) => (
                                        <Menu.Item key={item.key} icon={item.icon}>
                                            <Link to={item.path}>{item.label}</Link>
                                        </Menu.Item>
                                    ))}
                                </Menu>
                            )}

                            {window.innerWidth < 600 && (
                                <span style={{ cursor: "pointer", marginLeft: "auto", padding: "0 1em" }} onClick={() => setIsCollapsed(!iscollapsed)}>
                                    <AlignLeftOutlined />
                                </span>
                            )}

                        </Header>

                    </Affix>


                    <Content
                        style={{
                            padding: 20,
                            height: "90vh",
                            overflow: "auto",
                        }}
                    >
                        {outlet}
                    </Content>
                </Layout>
            </Layout>
        </>
    );
}

export default SidebarComponent