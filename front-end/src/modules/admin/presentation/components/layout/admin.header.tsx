"use client";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import ConvertLanguage from "@/shared/components/button/convertLanguage";
import { useAdminContext } from "../hooks/admin.context";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AdminHeader = (props: any) => {
  const {session} = props;
  console.log("check data: ", session)
  const { Header } = Layout;
  const { collapseMenu, setCollapseMenu } = useAdminContext()!;
  const t = useTranslations('Header')
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link href="/">
          {t('option1')}
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <span onClick={() => signOut()}>{t('option2')}</span>
      ),
      disabled: false,
    },
  ];

  return (
    <>
      <Header
        style={{
          padding: 0,
          display: "flex",
          background: "#f5f5f5",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          type="text"
          icon={collapseMenu ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapseMenu(!collapseMenu)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <h1>{t('title')}</h1>
        <ConvertLanguage />
        <Dropdown menu={{ items }}>
          <a
            onClick={(e) => e.preventDefault()}
            style={{
              color: "unset",
              lineHeight: "0 !important",
              marginRight: 20,
            }}
          >
            <Space>
              {t('setting')} {session?.user?.username ?? ""}
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </Header>
    </>
  );
};

export default AdminHeader;
