import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_POST_DETAILS,
  GET_POST_LIST,
  GET_USER_DETAILS,
} from "../redux/ActionTypes/ActionTypes";
import {
  Avatar,
  Card,
  Col,
  Grid,
  //   Comment,
  Image,
  List,
  Pagination,
  Row,
  Tabs,
  Typography,
} from "antd";
import Title from "antd/es/skeleton/Title";
import TabPane from "antd/es/tabs/TabPane";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { getPostData } from "../redux/Action";

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];
const ListItem = ({ messages = [] }) => {
  const [current, setCurrent] = useState(1);
  const [dataList, setDataList] = useState(messages);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const navigate = useNavigate();
const dispatch=useDispatch();
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
    // const data =
    //   rowsPerPage > 0
    //     ? messages.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    //     : messages;
    setDataList(messages);
  };
  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={messages}
        renderItem={(item, index) => (
          <List.Item
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch({
                type:GET_POST_DETAILS,
                payload:item
              })
              navigate("/allblogs/" + item.id);
            }}
          >
            <List.Item.Meta
              avatar={
                <Image src={"/Assets/home.jpeg"} height={100} width={100} />
              }
              title={item.title}
              description={item.body}
              // datetime={
              //   <span>
              //     {moment(new Date(), "YYYY-MM-DD HH:mm:ss").fromNow()}
              //   </span>
              // }
            />
          </List.Item>
        )}
      />
      <Pagination
        current={current}
        onChange={onChange}
        // pageSize={rowsPerPage}
        // pageSizeOptions={['10']}
        total={messages.length}
      />
    </>
  );
};

const AllBlogData = () => {
  const { userdata = {} } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const { name = "", id = "", phone = "" } = userdata || {};
  useEffect(() => {
    if (id != "") getPostData(id,dispatch);
  }, [id]);

  const { postList = [] } = useSelector((state) => state.PostReducer);
  console.log(postList);

  return (
    <div style={{ width: "100%" }}>
     

      <Col xs={24} sm={24} md={24}>
        <Card bordered>
          <Tabs defaultActiveKey="1">
            <TabPane tab="ALL POSTS" key="1">
              
              <ListItem messages={postList} />
            </TabPane>
            <TabPane tab="LATEST POSTS" key="2">
              {/* <ListItem messages={messages} /> */}
            </TabPane>
            <TabPane tab="ARCHIVED" key="3">
              {/* <ListItem messages={messages} /> */}
            </TabPane>
          </Tabs>
        </Card>
      </Col>
    </div>
  );
};

export default AllBlogData;
