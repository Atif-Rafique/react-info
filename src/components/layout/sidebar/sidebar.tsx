import { useState } from "react";
import { Drawer, Layout } from "antd";
// import { AlignLeftOutlined } from "@ant-design/icons";




const SidebarComponent = ({ outlet }: any) => {
    // const [iscollapsed, setIsCollapsed] = useState(false);
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
                {/* <Sider /> */}
            </Drawer>
            <Layout className="layout">
                {/* <Sider iscollapsed={iscollapsed} location={location} setLocation={setLocation} /> */}
                <Layout className="site-layout">
                    {/* <Header style={{ padding: 0, background: colorBgContainer }}>
                        <div className="responsive-header"> */}
                    {/* <img src={LogoImg} alt="logo" /> */}
                    {/* </div>
                        <span onClick={() => setIsCollapsed(!iscollapsed)}
                            className="sideicon cursor-pointer">
                            <AlignLeftOutlined />
                        </span>

                    </Header> */}
                    <Content
                        style={{
                            padding: 30,
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