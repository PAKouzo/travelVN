"use client";

import { LoginPayload } from "@/modules/auth/domain/dto/login.dto";
import LoginForm from "../../components/login-form/login-form.component";
import styles from "./login.module.scss";
import travelLogo from "@/public/images/logo_auth.svg";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className={styles.authentication_background}>
      <div className={styles.authentication_container}>
        <div className={styles.authentication_main}>
          <div className={styles.form_wrapper}>
            <div className={styles.logo}>
              <Image alt="" src={travelLogo} width={300} height={150}/>
            </div>
            <LoginForm
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              onSubmit={function (values: LoginPayload): void {
                throw new Error("Function not implemented.");
              }}
              isLoading={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

// import styles from "./login.module.scss";
// import { ConfigProvider, Form } from "antd";
// import { LoginPage } from "./login.page";
// import { useTranslation } from "@regular/common";
// import { LoginPayload } from "@modules/auth/domain/dto/login.dto";
// import { LoginForm } from "../../components/login-form/login-form.component";
// import { ProfileList } from "../../components/profile-list/profile-list.component";
// import crmLogo from "../../../../../../public/images/crm.svg";
// import Image from "next/image";

// interface Props {
//   self: LoginPage;
// }

// export const Template = (props: Props) => {
//   const [loginForm] = Form.useForm<LoginPayload>();
//   const { t } = useTranslation();

//   const {
//     handleLogin,
//     onSelectUser,
//     state: { isLoading, users },
//   } = props.self;

//   return (
//     <ConfigProvider
//       theme={{
//         token: {
//           colorPrimary: "#FF6B2E",
//         },
//         components: {
//           Button: {
//             controlHeight: 40,
//             borderRadius: 4,
//           },
//           Form: {
//             marginLG: 20,
//             lineHeight: 1.42,
//           },
//         },
//       }}
//     >
//       <div className={styles.authentication_background}>
//         <div className={styles.authentication_container}>
//           <div className={styles.authentication_main}>
//             <div className={styles.form_wrapper}>
//               <div className={styles.login_school_logo}>
//                 <Image alt="" src={crmLogo} width={300} height={75} />
//               </div>
//               {users ? (
//                 <ProfileList
//                   users={users}
//                   onSelectUser={onSelectUser}
//                   onLogout={props.self.onResetUserProfile}
//                 />
//               ) : (
//                 <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </ConfigProvider>
//   );
// };
