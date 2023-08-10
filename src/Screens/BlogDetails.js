import { Button, Col, Input, Modal, Typography } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostData } from "../redux/Action";
import { GET_POST_DETAILS } from "../redux/ActionTypes/ActionTypes";

const BlogDetails = () => {
  const { TextArea } = Input;
  const dispatch = useDispatch();
  const { postDetails = {} } = useSelector((state) => state.BlogDetailReducer);
  console.log(postDetails);
  const { title = "", body = "" } = postDetails;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formdata, setFormData] = useState({ title: title, body: body });
  const onhandleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    UpdateblogData();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const UpdateblogData = async () => {
    const { id = "", userId = "" } = postDetails;
    const url = process.env.REACT_APP_URL + "posts/"+id;
    console.log(url);
    const body = {
      userId: userId,
      title: formdata.title,
      body: formdata.body,
      id: id,
    };
    await axios
      .put(url, body)
      .then(function (response) {
        dispatch({
            type:GET_POST_DETAILS,
            payload:body
          })
        getPostData(body.id, dispatch);
        setIsModalOpen(false);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  return (
    <div>
      <Typography style={{ fontWeight: "bold", fontSize: "22" }}>
        {title}
      </Typography>
      <Typography>{body}</Typography>

      <Button
        style={{
          marginTop: "10px",
          backgroundColor: "green",
          color: "#fff",
          marginRight: "10px",
        }}
        type="secondary"
        onClick={showModal}
      >
        Edit
      </Button>
      <Button
        style={{ marginTop: "10px", backgroundColor: "red", color: "#fff" }}
        type="danger"
      >
        Delete
      </Button>

      <Modal
        title="Update Post"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form>
          <Col xs={24} sm={24} md={24} style={{ margin: "10px" }}>
            <Typography>Title :</Typography>
            <Input
            
              placeholder="Title"
              name={"title"}
              value={formdata.title}
              onChange={onhandleChange}
              // prefix={<SearchOutlined />}
            />
          </Col>
          <Col xs={24} sm={24} md={24} style={{ margin: "10px" }}>
          <Typography>Body :</Typography>

            <TextArea
              placeholder="Body"
              name={"body"}
              rows={4}
              onChange={onhandleChange}
              value={formdata.body}

              // prefix={<SearchOutlined />}
            />
          </Col>
        </form>
      </Modal>
    </div>
  );
};

export default BlogDetails;
