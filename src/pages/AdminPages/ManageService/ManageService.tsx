import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ServiceUpdateForm from "../../../components/Form/Service/ServiceUpdateForm";
import Modal from "../../../HOC/Modal/Modal";
import UserUpdate from "../../../HOC/UserUpdate/UserUpdate";
import { AppDispatch, RootState } from "../../../redux/configStore";
import { deleteApi, getUserApi } from "../../../redux/reducers/adminReducer";
import { setComponent } from "../../../redux/reducers/modalReducer";
import { http } from "../../../util/setting";

export interface ServiceType {
  id: number;
  maCongViec: number;
  maNguoiThue: number;
  ngayThue: string;
  hoanThanh: boolean;
}

type Props = {};

export default function ManageService({}: Props) {
  const [allService, setAllService] = useState<any>([]);
  const dispatch: AppDispatch = useDispatch();
  const columns: ColumnsType<ServiceType> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Job ID",
      dataIndex: "maCongViec",
      key: "maCongViec",
    },
    {
      title: "Hirer ID",
      dataIndex: "maNguoiThue",
      key: "maNguoiThue",
    },
    {
      title: "Hire Day",
      key: "ngayThue",
      dataIndex: "ngayThue",
    },
    {
      title: "Condition",
      key: "hoanThanh",
      dataIndex: "hoanThanh",
      render: (conditon) => {
        if (conditon) {
          return <p className="m-0">Hoàn thành</p>;
        }
        return <p className="m-0">Chưa hoàn thành</p>;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "x",
      render: (value, service) => (
        <div className="d-flex gap-3">
          <Modal />
          <Button
            data-bs-toggle="modal"
            data-bs-target="#modalId"
            onClick={() => {
              dispatch(setComponent(<ServiceUpdateForm service={service} />));
            }}
            type="primary"
          >
            Edit
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => {
              console.log(value);
              const action = deleteApi("/thue-cong-viec/", service.id);
              dispatch(action);
            }}
          >
            DEL
          </Button>
        </div>
      ),
    },
  ];
  const fetchApi = async () => {
    try {
      const result = await http.get(`/thue-cong-viec`);
      setAllService(result.data.content);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return <Table columns={columns} dataSource={allService} />;
}
