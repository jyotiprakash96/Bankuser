import React, { useState } from "react";
import {
  AppstoreOutlined,

  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Menu, Typography } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import SubMenu from "antd/es/menu/SubMenu";
import { useSelector } from "react-redux";

const SideMenu = () => {
  const [selectedKeys, setSelectedKeys] = useState("/");

  const [selectedIndex, setSelectedIndex] = useState(0);
 
  const navigate = useNavigate();
  const menus = [
    {
      label: "Dashbaords",
     
      key: "/",
      children: [
        {
          label: "overView",
          icon: <AppstoreOutlined />,
          key: "/overView",
        },
        { label: "Calendar", icon: <AppstoreOutlined />, key: "/Calendar" },
        {
          label: "Schedule Action",
          icon: <AppstoreOutlined />,
          key: "/scheduleaction",
        },
        {
            label: "Live Alerts",
            icon: <AppstoreOutlined />,
            key: "/LiveAlerts",
          },
      ],
    },
    {
      label: "Blogs",
    //   key: "/inventory",
      
      children: [
        {
          label: "All",
          icon: <AppstoreOutlined />,
          key: "/allblogs",
        },
        { label: "Latest", icon: <AppstoreOutlined />, key: "/latest" },
        {
          label: "Archived",
          icon: <AppstoreOutlined />,
          key: "/archived",
        },
      ],
    },
    {
      label: "DOCUMENTATION",
      key: "/orders",
      
      children: [
        {
          label: "overView",
          icon: <AppstoreOutlined />,
          key: "/overView",
        },
        { label: "Calendar", icon: <AppstoreOutlined />, key: "/Calendar" },
        {
          label: "Schedule Action",
          icon: <AppstoreOutlined />,
          key: "/scheduleaction",
        },
        {
            label: "Live Alerts",
            icon: <AppstoreOutlined />,
            key: "/LiveAlerts",
          },
      ],
    },
    {
      label: "Reports",
      key: "/customers",
      
      children: [
        {
          label: "overView",
          icon: <AppstoreOutlined />,
          key: "/overView",
        },
        { label: "Calendar", icon: <AppstoreOutlined />, key: "/Calendar" },
        {
          label: "Schedule Action",
          icon: <AppstoreOutlined />,
          key: "/scheduleaction",
        },
        {
            label: "Live Alerts",
            icon: <AppstoreOutlined />,
            key: "/LiveAlerts",
          },
      ],
    },
    {
      label: "NEED HELP ?",
      key: "/customers",
      
      children: [
        {
          label: "overView",
          icon: <AppstoreOutlined />,
          key: "/overView",
        },
        { label: "Calendar", icon: <AppstoreOutlined />, key: "/Calendar" },
        {
          label: "Schedule Action",
          icon: <AppstoreOutlined />,
          key: "/scheduleaction",
        },
        {
            label: "Live Alerts",
            icon: <AppstoreOutlined />,
            key: "/LiveAlerts",
          },
      ],
    },
  ];


  const { userdata = {} } = useSelector(state => state.UserReducer);
  const {
    name=''
  }=userdata||{}
  return (
    <div className="SideMenu">
        <div style={{
             width:'100%',backgroundColor:'#FFF',display:'flex',
             justifyContent:'center',
             height:'180px'
        }}>
            <div style={{
                display:'flex',flexDirection:'column',justifyContent:'center',
            }}>


         <Avatar style={{alignSelf:'center'}} size="large" icon={<UserOutlined />} />
         <Typography style={{textAlign:'center'}}>Hello </Typography>
         <Typography style={{textAlign:'center',fontWeight:'800'}}>{name} </Typography>
         <Button style={{marginTop:'10px'}} type="primary">
         <AppstoreOutlined style={{color:'#fff'}} />
            Live metrics</Button>
         </div>

        </div>
      <Menu
        className="SideMenuVertical"
        mode="inline"
        onClick={(item, index) => {
          //item.key
          navigate(item.key);
          setSelectedKeys(item.key);
          setSelectedIndex(index);
        }}
        selectedKeys={[selectedKeys]}
        items={menus}
      >
        
      </Menu>
    </div>
  );
};

export default SideMenu;
