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
  Checkbox,
  FormInstance,
} from "antd";

const { Title, Text, Link } = Typography;

export default function LoginPage() {
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
          Welcome Back
        </Title>
        <Text data-testid="login-subtitle">
          Please enter your details to login
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
          <Form.Item
            label="Email"
            name="loginId"
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

          <Flex justify="space-between" align="center" className="mb-4">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox data-testid="login-remember-checkbox">
                Remember me
              </Checkbox>
            </Form.Item>
            <Link
              href="/forgot-password"
              className="text-blue-500"
              data-testid="login-forgot-password-link"
            >
              Forgot Password?
            </Link>
          </Flex>

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

        <Text className="mt-4 text-center" data-testid="login-signup-text">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-500"
            data-testid="login-signup-link"
          >
            Sign Up
          </Link>
        </Text>
      </Flex>
    </div>
  );
}
