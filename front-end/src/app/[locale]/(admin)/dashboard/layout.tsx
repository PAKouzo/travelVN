// import { auth } from "@/utils/next-auth/auth";

import { AdminContextProvider } from "@/modules/admin/presentation/components/hooks/admin.context";
import AdminContent from "@/modules/admin/presentation/components/layout/admin.content";
import AdminFooter from "@/modules/admin/presentation/components/layout/admin.footer";
import AdminHeader from "@/modules/admin/presentation/components/layout/admin.header";
import AdminSideBar from "@/modules/admin/presentation/components/layout/admin.sidebar";
import React from "react";

const AdminLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // const session = await auth()
  return (
    <AdminContextProvider>
      <div style={{ display: "flex" }}>
        <div className="left-side" style={{ minWidth: 80 }}>
          <AdminSideBar />
        </div>
        <div className="right-side" style={{ flex: 1 }}>
          <AdminHeader/>
          <AdminContent>{children}</AdminContent>
          <AdminFooter />
        </div>
      </div>
    </AdminContextProvider>
  );
};

export default AdminLayout;