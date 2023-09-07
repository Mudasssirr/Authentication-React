import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import '../assets/login.css'
import { NavLink } from 'react-router-dom';
import {auth, signInWithEmailAndPassword } from '../config/firebase';
import Swal from 'sweetalert2'


const onFinish = (values) => {
  console.log('Success:', values);
  signInWithEmailAndPassword(auth, values.email, values.password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log('user', user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: errorMessage,
    })
  });
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Login = () => (
  <div className='login-container'>
  <Form className='form'
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >

      <div className='login-heading'>
        <h4>Login</h4>
      </div>

    <Form.Item className='email-input'
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
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

    <div className='form-item'>
     <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
      >
      <Checkbox>Remember me</Checkbox>
     </Form.Item>
    </div>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <div className='login-btn'>
      <Button type="primary" htmlType="submit">    
        Submit
      </Button>
      <div className='dnt-acc'>
            Don't have an Account? <NavLink to={'/'}> Signup </NavLink>
      </div>
    </div>
    </Form.Item>
  </Form>
  </div>
);
export default Login;