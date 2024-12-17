import { LoginPayload } from "@/modules/auth/domain/dto/login.dto";
import { Form, Input as InputAntd } from "antd";
import styles from "./login-form.component.module.scss";
import { Button } from "@/shared/components/button/button.component";
import { useTranslations } from "next-intl";
import { RouterPath } from "@/shared/constants/router.const";
import { Link } from "@/i18n/routing";
import React from "react";

interface Props {
  onSubmit: (values: LoginPayload) => void;
  isLoading: boolean;
}

const LoginForm = ({ onSubmit, isLoading }: Props) => {
  const t = useTranslations();

  return (
    <>
      <p className={styles.form_subtext}>{t("login.title")}</p>
      <Form
        name="login"
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        // style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onSubmit}
        disabled={isLoading}
        layout="vertical"
        // className={styles.form_container}
      >
        <div className={styles.input_group}>
          <Form.Item
            label={<p className={styles.label}>{t("login.email_label")}</p>}
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: t("login.email_required"),
              },
            ]}
          >
            <InputAntd placeholder="" />
          </Form.Item>
        </div>

        <div className={styles.input_group}>
          <Form.Item
            label={<p className={styles.label}>{t("login.password_label")}</p>}
            name="password"
            rules={[{ required: true, message: t("login.password_required") }]}
          >
            <InputAntd.Password />
          </Form.Item>
        </div>
        <p className={(styles.form_text, styles.form_text_forgot_password)}>
          <Link href={RouterPath.SIGNIN}>{t("login.forgot_password")}</Link>
        </p>
        {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}></Form.Item> */}
        <Button
          className={styles.btn}
          type="primary"
          htmlType="submit"
          name={t("button.login")}
        />
        <p className={styles.form_text}>
          {t("login.sub_title")}{" "}
          <Link href={RouterPath.SIGNUP}>{t("nav.register")}</Link>{" "}
          {t("login.here")}
        </p>
      </Form>
    </>
  );
};

export default LoginForm;
