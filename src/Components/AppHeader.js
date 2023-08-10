import React, { useEffect, useState } from "react";
import {
  BellFilled,
  MailOutlined,
  AppstoreOutlined,
  MenuOutlined,
  SearchOutlined,
  UserOutlined,SolutionOutlined,LockOutlined,PoweroffOutlined
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Drawer,
  Dropdown,
  Image,
  Input,
  List,
  Menu,
  Space,
  Typography,
} from "antd";
import axios from "axios";
import { GET_USER_DETAILS } from "../redux/ActionTypes/ActionTypes";
import { useDispatch } from "react-redux";

const AppHeader = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getUserData();
      }, []);
    
      const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      const getUserData = async () => {
        const number=randomNumberInRange(1, 10)
        const url =
          process.env.REACT_APP_URL + "users/" + number;
        console.log(url);
        await axios
          .get(url)
          .then(function (response) {
            dispatch({
              type: GET_USER_DETAILS,
              payload: response.data,
            });
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
      };
  const Menus = (
    <Menu>
      <Menu.Item>
        <SolutionOutlined className="icon" />
        profile
      </Menu.Item>
      <Menu.Item>
        <LockOutlined className="icon" />
        change password
      </Menu.Item>
      <Menu.Item>
        <PoweroffOutlined className="icon" />
        sign out
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="AppHeader">
      <div
        style={{
          width: "15%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: "10px",
        }}
      >
        <Image width={50} src="/Assets/logo.jpeg"></Image>
        <MenuOutlined />
      </div>
      <div
        style={{
          width: "85%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Space size={"middle"}>
          <Input
            placeholder="Type here to search..."
            prefix={<SearchOutlined />}
          />
        </Space>
        {/* <Typography.Title>Aamir's Dashboard</Typography.Title> */}
        <Space size={"middle"}>
          <Badge count={4} dot>
            <BellFilled style={{ fontSize: 18 }} />
          </Badge>
          <Badge count={2}>
            <MailOutlined style={{ fontSize: 20 }} />
          </Badge>
          <Badge count={2}>
            <AppstoreOutlined style={{ fontSize: 20 }} />
          </Badge>
          <Dropdown overlay={Menus}  placement="bottomLeft">
            <div onClick={(e) => e.preventDefault()}>
              <Avatar size="large" icon={<UserOutlined />} />
            </div>
          </Dropdown>
        </Space>
      </div>
      <Drawer
        title="Comments"
        //   open={commentsOpen}
        //   onClose={() => {
        //     setCommentsOpen(false);
        //   }}
        maskClosable
      >
        {/* <List
        dataSource={comments}
        renderItem={(item) => {
          return <List.Item>{item.body}</List.Item>;
        }}
      ></List> */}
      </Drawer>
      <Drawer
        title="Notifications"
        //   open={notificationsOpen}
        //   onClose={() => {
        //     setNotificationsOpen(false);
        //   }}
        maskClosable
      >
        <List
          // dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been
                ordered!
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    </div>
  );
};

export default AppHeader;
