// import Sidebar from "./Sidebar/Sidebar"
// import Content from "./Content/Content"
import { useState } from 'react';
import { Button, Layout, theme } from 'antd';
import Logo from '../Logo';
import MenuList from '../MenuList';
import ToggleThemeButton from '../ToggleThemeButton';

// Destructure Layout components
const { Header, Sider } = Layout;

const Dashboard = () => {
    // State to manage theme (dark or light) and sidebar collapse state
    const [darkTheme, setDarkTheme] = useState(true);
    const [collapsed, setCollapsed] = useState(false);

    // Toggle theme between dark and light
    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    // Retrieve color background for the header from Ant Design theme tokens
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <>
          <Layout>
            {/* Sidebar (Sider) */}
            <Sider
                collapsed={collapsed}
                collapsible
                trigger={null}
                theme={darkTheme ? 'dark' : 'light'}
                className="sidebar"
            >
                {/* Logo component */}
                <Logo />

                <h2 className='title' style={collapsed ? {opacity:0} : {opacity:1}}>CIDC Demo Platform</h2>

                {/* MenuList component with theme prop */}
                <MenuList darkTheme={darkTheme} />
          
                {/* Button to toggle the theme */}
                <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
            </Sider>
          </Layout>  
        </>
    )
}

export default Dashboard