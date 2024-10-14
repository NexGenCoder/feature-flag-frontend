"use client";
import RequiredMark from "@/components/reusable/RequiredMark";
import { Github } from "@/icons/Github";
import { Google } from "@/icons/Google";
import {
  Flex,
  Typography,
  Button,
  Input,
  Form,
  Image,
  FormInstance,
} from "antd";

const { Title, Text, Link } = Typography;

export default function RegisterPage() {
  const [form] = Form.useForm();

  const handleSubmit = (values: FormInstance[]) => {
    console.log("Form values:", values);
    // Implement login logic here
  };

  return (
    <div
      className="flex min-h-screen w-full items-center justify-center bg-gradient-to-r from-slate-400 to-slate-600 p-5 md:px-20 md:py-6"
      data-testid="login-page"
    >
      <Flex
        vertical
        gap={3}
        className="w-full max-w-md rounded-2xl bg-white px-5 py-8 shadow-lg"
        justify="center"
        align="center"
      >
        <Image
          width={50}
          height={50}
          src="/logo.png"
          alt="Login Logo"
          preview={false}
          data-testid="login-logo"
        />
        <Title level={3} data-testid="login-title">
          Getting Started
        </Title>
        <Text data-testid="login-subtitle">
          Please enter your details to register
        </Text>
        <Flex
          className="w-full !pt-4"
          align="center"
          justify="space-between"
          gap={3}
        >
          <Button
            className="flex-1 !rounded-xl !p-5"
            icon={<Google width={18} height={18} />}
            type="default"
            data-testid="login-google-button"
          >
            Google
          </Button>
          <Button
            className="flex-1 !rounded-xl !p-5"
            icon={<Github width={18} height={18} />}
            type="default"
            data-testid="login-github-button"
          >
            Github
          </Button>
        </Flex>

        <div className="my-4 flex w-full items-center gap-4">
          <hr className="flex-1" />
          <Text className="font-semibold">OR</Text>
          <hr className="flex-1" />
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="w-full"
          requiredMark={RequiredMark}
          data-testid="login-form"
        >
          <Flex gap={3} className="w-full">
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input
                placeholder="First Name"
                size="large"
                data-testid="login-first-name-input"
              />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input
                placeholder="Last Name"
                size="large"
                data-testid="login-last-name-input"
              />
            </Form.Item>
          </Flex>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              { type: "email", message: "Please input a valid email!" },
            ]}
          >
            <Input
              placeholder="Email"
              size="large"
              data-testid="login-email-input"
              type="email"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="Password"
              size="large"
              data-testid="login-password-input"
            />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="Confirm Password"
              size="large"
              data-testid="login-confirm-password-input"
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            className="w-full rounded-xl"
            size="large"
            data-testid="login-button"
          >
            Login
          </Button>
        </Form>

        <Text className="mt-4 text-center" data-testid="login-text">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-500"
            data-testid="login-signup-link"
          >
            Login
          </Link>
        </Text>
      </Flex>
    </div>
  );
}
