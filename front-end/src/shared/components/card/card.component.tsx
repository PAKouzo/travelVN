"use client";

import React from "react";
import { Card } from "antd";
import Image from "next/image";
import travelLogo from "../../../../public/logo/test_logo.svg";
import { useRouter } from "@/i18n/routing";

const CardComponent = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  
  return (
    <Card hoverable style={{ width: 240 }} onClick={handleClick}>
      <Image alt="" src={travelLogo} className="" width={200} height={100} />
      <div className="">
        <div>Khởi hành</div>
        <div>Seoul</div>
        <div>Đánh giá</div>
        <div>Giá</div>
        <div>Thời gian</div>
      </div>
    </Card>
  );
};

export default CardComponent;
