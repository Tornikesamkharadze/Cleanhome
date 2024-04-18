import React from "react";
import { Button, Form, Input } from "antd";
import toast from "react-hot-toast"; // Import toast from react-hot-toast
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import bubbleSoap from "../../public/assets/bubble.jpg";
import { setLogin } from "../redux/state";

// Import the setLogin action

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const TestLogin = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { email, password } = values; // Destructure email and password from values

    try {
      // Send login request to the server
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // Check if login request was successful
      if (!response.ok) {
        // If login failed, display error message
        const errorData = await response.json();
        message.error(errorData.message); // Use message.error
        return; // Return early if login fails
      }

      // Extract user data if login was successful
      const loggedIn = await response.json();

      // Dispatch login action and redirect to main page
      if (loggedIn) {
        // Store token in localStorage
        localStorage.setItem("token", loggedIn.token);

        dispatch(
          setLogin({
            user: loggedIn.user,
            email: loggedIn.user.email,
            token: loggedIn.token,
          })
        );
        navigate("/");
        // Display success message
        toast.success("You are logged in"); // Use message.success
      }
    } catch (err) {
      console.log("Login failed", err.message);
      // Display error message
      message.error("Login failed. Please try again later.");
    }
  };

  return (
    <FormWrapper>
      <Form
        {...formItemLayout}
        form={form}
        name="login"
        onFinish={onFinish}
        style={{
          width: "100%",
          maxWidth: 600,
        }}
        scrollToFirstError
        layout="vertical"
      >
        <Form.Item
          name="email"
          label="ელ.ფოსტა"
          rules={[
            {
              type: "email",
              message: "ელ.ფოსტა არასწორია!",
            },
            {
              required: true,
              message: "გტხოვთ შეიყვანეთ თქვენი ელ.ფოსტა!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="პაროლი"
          rules={[
            {
              required: true,
              message: "გთხოვთ შეიყვანეთ თქვენი პაროლი!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <div className="wr">
          <Button type="primary" htmlType="submit" className="btn">
            შესვლა
          </Button>
          <Link to="/register">არ გაქვთ ანგარიში? რეგისტრაცია</Link>
        </div>
      </Form>
    </FormWrapper>
  );
};
const FormWrapper = styled.div`
  background-image: url(${bubbleSoap});
  background-size: cover;
  min-height: 100vh;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  .wr {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .btn {
    margin-right: 10px;
  }
`;
export default TestLogin;
