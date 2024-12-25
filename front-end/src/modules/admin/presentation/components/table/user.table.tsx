"use client";
import { Button, Input } from "antd";
import "./table.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import type { GetProps } from "antd";
import { useTranslations } from "next-intl";
interface User {
  id: number;
  firstName: string;
  gender: string;
  age: number;
  email: string;
}
const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const t = useTranslations("ContentUser");
  const getAllUser = async () => {
    const response = await axios.get("https://dummyjson.com/users");
    setUsers(response.data.users);
  };
  useEffect(() => {
    getAllUser();
  }, []);
  type SearchProps = GetProps<typeof Input.Search>;
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  const { Search } = Input;
  return (
    <>
      <div className="container">
        <div className="title-container">
          <span>{t("title")}</span>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </div>
        <table>
          <thead>
            <tr>
              <td>{t("name")}</td>
              <td>{t("gender")}</td>
              <td>{t("age")}</td>
              <td>{t("email")}</td>
              <td>{t("action.title")}</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.firstName}</td>
                  <td>{user.gender}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>
                    <Button>{t("action.action1")}</Button>
                    <Button>{t("action.action2")}</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserTable;
