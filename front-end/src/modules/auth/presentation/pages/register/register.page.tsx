"use client";
import Image from "next/image";
import travelLogo from "../../../../../public/images/logo_auth.svg";
import styles from "./register.module.scss";
import RegisterForm from "../../components/register-form/register-form.component";

const RegisterPage = () => {
  return (
    <div className={styles.authentication_background}>
      <div className={styles.authentication_container}>
        <div className={styles.authentication_main}>
          <div className={styles.form_wrapper}>
            <div className={styles.logo}>
              <Image alt="" src={travelLogo} width={300} height={150} />
            </div>
            <RegisterForm
              onSubmit={function (): void {
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

export default RegisterPage;
