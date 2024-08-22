import { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';

// Destructure Layout components
const { Header } = Layout;

function Activity() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      {/* Header with dynamic background color */}
          {/* <Header style={{ padding: 0, background: colorBgContainer }}> */}
          <Header style={{ padding: 0, background: 'url("/Screenshot 2024-08-21 210616.png")', backgroundPosition:"center"}}>

            {/* Button to collapse or expand the sidebar */}
            <Button
              type="text"
              className="toggle"
              onClick={() => setCollapsed(!collapsed)}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
          </Header>
          <div>
            <h1>Activity</h1>
          </div>
    </Layout>
  )
}

export default Activity