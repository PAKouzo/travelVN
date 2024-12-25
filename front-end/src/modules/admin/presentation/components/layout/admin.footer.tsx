'use client'
import { Layout } from "antd";

const AdminFooter = () => {
    const { Footer } = Layout;
    return (
      <Footer style={{ textAlign: "center" }}>
        Shopee ©{new Date().getFullYear()} Created by SP
      </Footer>
    );
}
export default AdminFooter;