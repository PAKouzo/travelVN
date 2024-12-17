import { LoginPayload } from "@/modules/auth/domain/dto/login.dto";
import { Form, Input as InputAntd } from "antd";
import styles from "./register-form.component.module.scss";
import { Button } from "@/shared/components/button/button.component";
import { useTranslations } from "next-intl";
import { RouterPath } from "@/shared/constants/router.const";
import { Link, useRouter } from "@/i18n/routing";
import React from "react";

interface Props {
  onSubmit: (values: LoginPayload) => void;
  isLoading: boolean;
}

const RegisterForm = ({ onSubmit, isLoading }: Props) => {
  const t = useTranslations();
  const router = useRouter();

  const handleClick = () => {
    router.push(RouterPath.OTP)
  }

  return (
    <>
      <p className={styles.form_subtext}>{t("register.title")}</p>
      <Form
        name="register"
        initialValues={{ remember: true }}
        onFinish={onSubmit}
        disabled={isLoading}
        layout="vertical"
      >
        <div className={styles.input_group}>
          <Form.Item
            label={<p className={styles.label}>{t("register.name_label")}</p>}
            name="name"
            rules={[
              {
                type: "string",
                required: true,
                message: t("register.name_required"),
              },
            ]}
          >
            <InputAntd placeholder={t("register.name_placeholder")} />
          </Form.Item>
        </div>

        <div className={styles.input_group}>
          <Form.Item
            label={<p className={styles.label}>{t("register.phone_label")}</p>}
            name="phone"
            rules={[
              {
                type: "number",
                required: true,
                message: t("register.phone_required"),
              },
            ]}
          >
            <InputAntd placeholder={t("register.phone_placeholder")} />
          </Form.Item>
        </div>

        <div className={styles.input_group}>
          <Form.Item
            label={<p className={styles.label}>{t("register.email_label")}</p>}
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: t("register.email_required"),
              },
            ]}
          >
            <InputAntd placeholder={t("register.email_placeholder")} />
          </Form.Item>
        </div>

        <div className={styles.input_group}>
          <Form.Item
            label={
              <p className={styles.label}>{t("register.password_label")}</p>
            }
            name="password"
            rules={[
              { required: true, message: t("register.password_required") },
            ]}
          >
            <InputAntd.Password
              placeholder={t("register.password_placeholder")}
            />
          </Form.Item>
        </div>

        <Button
          className={styles.btn}
          type="primary"
          htmlType="submit"
          name={t("button.register")}
          onClick={handleClick}
        />

        <p className={styles.form_text}>
          {t("register.sub_title")}{" "}
          <Link href={RouterPath.SIGNIN}>{t("nav.login")}</Link>{" "}
          {t("register.here")}
        </p>
      </Form>
    </>
  );
};

export default RegisterForm;
