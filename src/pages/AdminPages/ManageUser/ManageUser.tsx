import { Button, Input, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddAdmin from "../../../HOC/AddAdmin/AddAdmin";
import User from "../../../HOC/User/User";
import { AppDispatch, RootState } from "../../../redux/configStore";
import {
  delUserApi,
  getUserApi,
  getUserSearch,
  searchUserApi,
  userIdApi,
} from "../../../redux/reducers/adminReducer";
import { setStore } from "../../../util/setting";

interface DataType {
  key: string;
  name: string;
  id: number;
  phone: string;
  gender: boolean;
  role: string;
  skill: [];
  certification: [];
}

// Component
type Props = {};

export default function ManageUser({}: Props) {
  const refUserDialog = useRef<any>(null);
  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Role",
      key: "role",
      dataIndex: "role",
      className: "text-uppercase",
    },
    {
      title: "Certification",
      key: "certification",
      dataIndex: "certification",
      render: (_, { certification }) => (
        <div>
          {certification?.map((tag) => {
            return (
              <Tag className="mt-1" key={tag}>
                {tag}
              </Tag>
            );
          })}
        </div>
      ),
    },
    {
      title: "Skill",
      key: "skill",
      dataIndex: "skill",
      render: (_, { skill }) => (
        <div>
          {skill?.map((tag) => {
            return (
              <Tag className="mt-1" key={tag}>
                {tag}
              </Tag>
            );
          })}
        </div>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "x",
      render: (_, { id }) => (
        <div className="d-flex gap-3">
          <User ref={refUserDialog} id={id} />
          <Button
            onClick={() => {
              // console.log(id);
              setStore("id_user", id);
              refUserDialog.current.open();
              dispatch(userIdApi(id));
            }}
          >
            View & Edit
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => {
              // const action = id;
              // console.log(id);
              dispatch(delUserApi(id));
            }}
          >
            DEL
          </Button>
        </div>
      ),
    },
  ];
  //------------ ------------ //
  const { userLogin } = useSelector((state: RootState) => state.userReducer);
  const { allUser } = useSelector((state: RootState) => state.adminReducer);
  // console.log(allUser);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserApi());
  }, [userLogin]);
  return (
    <>
      <AddAdmin />
      <Input
        placeholder="Tìm kiếm thông tin người dùng ..."
        type="text"
        className="inp_search mb-3"
        onChange={(e) => {
          let key = e.target.value.trim().toLowerCase();
          console.log(key);
          if (key) {
            dispatch(searchUserApi(key));
          } else {
            dispatch(getUserApi());
          }
        }}
      />
      <Table columns={columns} dataSource={allUser} />
    </>
  );
}

//------------------------- -------------------------------//

// const ManageUser: React.FC = () => {
//   const { allUser } = useSelector((state: RootState) => state.adminReducer);
//   console.log(allUser);
//   const dispatch: AppDispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getUserApi());
//   }, []);
//   return <Table columns={columns} dataSource={allUser} />;
// };
// export default ManageUser;
