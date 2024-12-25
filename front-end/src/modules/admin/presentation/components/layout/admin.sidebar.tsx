"use client";
import Layout from "antd/es/layout";
import Menu from "antd/es/menu";
import {
  AppstoreOutlined,
  ProductOutlined,
  SettingOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import React from "react";

import type { MenuProps } from "antd";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useAdminContext } from "../hooks/admin.context";

type MenuItem = Required<MenuProps>["items"][number];
const AdminSideBar = () => {
  const { Sider } = Layout;
  const { collapseMenu } = useAdminContext()!;
  const t = useTranslations('Sidebar')
  const items: MenuItem[] = [
    {
      key: "grp",
      label: "Shopee",
      type: "group",
      children: [
        {
          key: "dashboard",
          label: <Link href={"/dashboard"}>{t("dashboard")}</Link>,
          icon: <AppstoreOutlined />,
        },
        {
          key: "users",
          label: <Link href={"/dashboard/users"}>{t("users")}</Link>,
          icon: <TeamOutlined />,
        },
        {
          key: "sub1",
          label: <Link href={"/dashboard/products"}>{t("products")}</Link>,
          icon: <ProductOutlined />,
          // children: [
          //   {
          //     key: "g1",
          //     label: "Item 1",
          //     type: "group",
          //     children: [
          //       { key: "1", label: "Option 1" },
          //       { key: "2", label: "Option 2" },
          //     ],
          //   },
          //   {
          //     key: "g2",
          //     label: "Item 2",
          //     type: "group",
          //     children: [
          //       { key: "3", label: "Option 3" },
          //       { key: "4", label: "Option 4" },
          //     ],
          //   },
          // ],
        },
        // {
        //   key: "sub2",
        //   label: "Navigation Two",
        //   icon: <AppstoreOutlined />,
        //   children: [
        //     { key: "5", label: "Option 5" },
        //     { key: "6", label: "Option 6" },
        //     {
        //       key: "sub3",
        //       label: "Submenu",
        //       children: [
        //         { key: "7", label: "Option 7" },
        //         { key: "8", label: "Option 8" },
        //       ],
        //     },
        //   ],
        // },
        {
          type: "divider",
        },
        {
          key: "sub4",
          label: <p>{t('setting')}</p>,
          icon: <SettingOutlined />,
          children: [
            {
              key: "9",
              label: <Link href={"/dashboard/setting"}>{t("option1")}</Link>,
            },
            { key: "10", label: <Link href={"/"}>{t("option2")}</Link> },
            {
              key: "11",
              label: <Link href={"/"}>{t("option3")}</Link>,
            },
          ],
        },
      ],
    },
  ];

  return (
    <Sider collapsed={collapseMenu}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        items={items}
        style={{ height: "100vh" }}
      />
    </Sider>
  );
};

export default AdminSideBar;
