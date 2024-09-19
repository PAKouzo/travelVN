import { Button as ButtonAntd, ButtonProps as AntdButtonProps } from "antd";
import { useTranslations } from "next-intl";

interface ButtonProps extends AntdButtonProps {
  name: string;
}

export const Button = (props: Readonly<ButtonProps>) => {
  const t = useTranslations();

  return <ButtonAntd {...props}>{t(props.name)}</ButtonAntd>;
};
