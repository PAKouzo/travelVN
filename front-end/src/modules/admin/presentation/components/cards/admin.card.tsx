'use client'

import { Card, Col, Row } from "antd";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";

const AdminCard = () => {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const t = useTranslations('ContentDashboard')
    const getAllUser = async () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response: any = await axios.get("https://dummyjson.com/users");
        setUsers(response.data.users);
    }
    const getAllProduct = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    };

    useEffect(()=>{
        getAllUser();
        getAllProduct();
    }, [])

    const totalUser = useMemo(()=>{
        return users.length;
    }, [users])

    const totalProduct = useMemo(()=>{
        return products.length;
    }, [products])
    return (
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            <h3>{t("users")}</h3>
            <span>{totalUser}</span>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            <h3>{t("products")}</h3>
            <span>{totalProduct}</span>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    );
}

export default AdminCard;