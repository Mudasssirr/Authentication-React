import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import '../assets/signup.css';
import { NavLink } from 'react-router-dom';
import {auth, createUserWithEmailAndPassword} from '../config/firebase';
import Swal from 'sweetalert2'


const onFinish = (values) => {
  console.log('Success:', values);
  createUserWithEmailAndPassword(auth, values.email, values.password)
  .then((userCredential) => {
    const user = userCredential.user;
    Swal.fire(
      'Congrats!',
      'You"ve signed up!',
      'success'
    )
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
const Signup = () => (
  <div className='signup-container'>
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
      
      <div className='signup-heading'>
        <h4>Sign Up</h4>
      </div>

      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
     

      <Form.Item
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
        <div className='signup-btn'>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
          <div className='alr-acc'>
            Already have an Account? <NavLink to={'./login'}> Login </NavLink>
          </div>
        </div>
      </Form.Item>
    </Form>
  </div>
);
export default Signup;