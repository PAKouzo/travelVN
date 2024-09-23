import { Input as InputAntd, InputProps } from "antd";
import { useTranslations } from "next-intl";
import styles from "./input.module.scss";

const Input = (props: Readonly<InputProps>) => {
  const t = useTranslations();
  return (
    <InputAntd
      {...props}
      placeholder={t(props.placeholder)}
      className={styles.input}
    />
  );
};

export default Input;
