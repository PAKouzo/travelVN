import { useTranslations } from "next-intl";
import { RouterPath } from "@/shared/constants/router.const";
import { Flex, Input } from "antd";
import { Button } from "@/shared/components/button";
import styles from "./otp-form.component.module.scss";
import React from "react";
import { useRouter } from "@/i18n/routing";

interface Props {
  onSubmit: () => void;
  isLoading: boolean;
}

const OTPForm = ({ onSubmit, isLoading }: Props) => {
  const t = useTranslations();
  const router = useRouter();

  const handleClick = () => {
    onSubmit();
    router.push(RouterPath.HOME);
  };

  const handleResendOTP = () => {
    return;
  };

  const handleChangePhoneNumber = () => {
    router.push(RouterPath.SIGNUP);
  };

  return (
    <>
      <p className={styles.form_subtext}>Confirm OTP</p>
      <Flex gap="middle" align="flex-start" vertical>
        <Input.OTP length={6} />
        <div className={styles.form_text_container}>
          <p className={styles.form_text} onClick={handleResendOTP}>Gửi lại OTP</p>
          <p className={styles.form_text} onClick={handleChangePhoneNumber}>Thay đổi số điện thoại</p>
        </div>
        <div className={styles.btn_container}>
          <Button
            className={styles.btn}
            type="primary"
            htmlType="submit"
            name={t("button.login")}
            disabled={isLoading}
            onClick={handleClick}
          />
        </div>
      </Flex>
    </>
  );
};

export default OTPForm;
