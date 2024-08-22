import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, AreaChartOutlined, PayCircleOutlined, SettingOutlined, BarsOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

// MenuList component receives 'darkTheme' as a prop to determine the theme of the menu
const MenuList = ({ darkTheme }) => {
  return (
    // The Menu component from antd is used to create a sidebar menu.
    // The theme is set based on the 'darkTheme' prop (either 'dark' or 'light').
    <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" className="menu-bar">
      
      {/* Menu Item: Home */}
      <Menu.Item key='home' icon={<HomeOutlined />}>
       <Link to="/">FireWall Task</Link> 
      </Menu.Item>
      
      {/* Menu Item: Activity */}
      <Menu.Item key='activity' icon={<AppstoreOutlined />}>
      <Link to="/sse_task">SSE Task</Link>
      </Menu.Item>
      
      {/* SubMenu: Tasks */}
      <Menu.SubMenu key='tasks' icon={<BarsOutlined />} title='Services'>
        
        {/* Task 1 */}
        <Menu.Item key='task-1'>
          <a href="https://www.youtube.com/" target='_blank'>CISCO</a>
          </Menu.Item>
        
        {/* Task 2 */}
        <Menu.Item key='task-2'>
          <a href="https://www.youtube.com/" target='blank'>ServiceNow</a>
          </Menu.Item>
        
        {/* Nested SubMenu: Subtasks */}
        <Menu.SubMenu key='subtasks' title='Subtasks'>
          <Menu.Item key='subtasks-1'>Subtask 1</Menu.Item>
          <Menu.Item key='subtasks-2'>Subtask 2</Menu.Item>
        </Menu.SubMenu>
        
      </Menu.SubMenu>
      
      {/* Menu Item: Progress */}
      <Menu.Item key='progress' icon={<AreaChartOutlined />}>
        <Link to="payload">Payload</Link>
      </Menu.Item>
      
      {/* Menu Item: Payment */}
      <Menu.Item key='payment' icon={<PayCircleOutlined />}>
        <Link to="micro_services">Micro Services</Link>
      </Menu.Item>
      
      {/* Menu Item: Setting */}
      <Menu.Item key='setting' icon={<SettingOutlined />}>
        <Link to="setting">Setting</Link>
      </Menu.Item>
      
    </Menu>
  );
};

export default MenuList;
