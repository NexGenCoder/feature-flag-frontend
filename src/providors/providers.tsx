"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { getQueryClient } from "./queryClient";

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const client = getQueryClient();

  return (
    <ConfigProvider
      theme={{
        cssVar: true,
      }}
    >
      <AntdRegistry>
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      </AntdRegistry>
    </ConfigProvider>
  );
};

export default Providers;
