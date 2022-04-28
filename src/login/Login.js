import React , {useEffect} from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Form, Input, Button} from 'antd';
import { LoginContainer} from '../style/layoutComponent.jsx';


const Login = () => {

  useEffect(()=>{
    if(localStorage.getItem('token')){
      alert('คุณได้เข้าสู่ระบบแล้ว')
      window.location="/"
    }
})

  const onFinish = (values) => {
    console.log('Success:', values);
    axios.post('http://localhost:5000/login', {
        id: values.id,
        password: values.password,
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
    <LoginContainer>
      <div style={{textAlign:"center"}}>
        <h2 style={{borderBottom:"2px solid #ffc526",fontFamily:"'Kanit', sans-serif",fontWeight:"500"}}>เข้าสู่ระบบ</h2>
      </div>
      <Form 
        style={{padding:"30px 100px 0 0"}}
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
            เข้าสู่ระบบ
          </Button>
        </Form.Item>
      </Form >
    </LoginContainer>
  );
};
export default Login