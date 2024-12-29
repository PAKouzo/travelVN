
// import { authOptions } from "../../../../../lib/authOptions";
// import { redirect } from "next/navigation";
// import {getServerSession} from "next-auth/next";
import AdminCard from "@/modules/admin/presentation/components/cards/admin.card";

const DashboardPage = async () => {
  // const session = await getServerSession(authOptions)
  // if(!session){
  //   redirect("/auth/login")
  // }
  return (
    <>
      <AdminCard></AdminCard>
    </>
  )
};
export default DashboardPage;


