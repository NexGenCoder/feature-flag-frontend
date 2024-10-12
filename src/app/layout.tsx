"use client";
import "./globals.css";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Providers from "@/providors/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Feature Flag</title>
        <meta
          name="description"
          content="
            Feature Flag is a feature management platform that helps you manage feature flags across web, mobile, and server-side applications."
        />
      </head>
      <body>
        <Providers>
          <Layout>
            <Content className="flex !min-h-screen flex-col">
              {children}
            </Content>
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
