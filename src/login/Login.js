import React from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
    axios.post('http://localhost:5000/login', {
        id: values.id,
        password: values.password
      })
      .then(function (response) {
          if(response.data.status == 'ok'){
              alert('sucess')
              localStorage.setItem('token',response.data.token)
              window.location = '/'
          }else{
            alert('fail')
          }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form 
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{width : '500px',alignContent : 'center',justifyContent : 'center',marginLeft:'65vh',marginRight:'auto',marginTop : '10vh'}}
    >
      <Form.Item
        label="ID"
        name="id"
        rules={[
          {
            required: true,
            message: 'Please input your id!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form >
  );
};
export default Login