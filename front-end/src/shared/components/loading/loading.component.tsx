import { Flex, Spin } from "antd";
import { useTranslations } from "next-intl";

export const Loading = () => {
  const t = useTranslations();

  const contentStyle: React.CSSProperties = {
    padding: 50,
    borderRadius: 4,
  };

  const content = <div style={contentStyle} />;

  return (
    <Flex
      gap="middle"
      vertical
      style={{
        fontSize: 80,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Flex gap="middle">
        <Spin tip={t("page.loading_content")} size="large">
          {content}
        </Spin>
      </Flex>
    </Flex>
  );
};
