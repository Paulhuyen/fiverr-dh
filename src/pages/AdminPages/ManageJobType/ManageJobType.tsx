import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddJobTypeForm from "../../../components/Form/JobType/AddJobTypeForm";
import JobTypeUpdateForm from "../../../components/Form/JobType/JobTypeUpdateForm";
import Modal from "../../../HOC/Modal/Modal";
import { AppDispatch, RootState } from "../../../redux/configStore";
import {
  deleteApi,
  getJobTypeApi,
  getUserApi,
} from "../../../redux/reducers/adminReducer";
import { setComponent } from "../../../redux/reducers/modalReducer";
import { http } from "../../../util/setting";

interface DataType {
  id: number;
  tenLoaiCongViec: string;
}

type Props = {};

export default function ManageJobType({}: Props) {
  const [allJobType, setAllJobType] = useState<any>([]);
  const refUpdate = useRef<any>(null);
  const fetchApi = async () => {
    try {
      const result = await http.get(`/loai-cong-viec`);
      setAllJobType(result.data.content);
    } catch (err) {
      console.log(err);
    }
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Job Type",
      dataIndex: "tenLoaiCongViec",
      key: "tenLoaiCongViec",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "x",
      render: (value, service) => (
        <div className="d-flex gap-3">
          <Button
            type="primary"
            data-bs-toggle="modal"
            data-bs-target="#modalId"
            onClick={() => {
              dispatch(
                setComponent(
                  <JobTypeUpdateForm
                    id={service.id}
                    jobType={service.tenLoaiCongViec}
                  />
                )
              );
            }}
          >
            Veiw & Edit
          </Button>
          <Modal ref={refUpdate} />
          <Button
            type="primary"
            danger
            onClick={() => {
              const action = deleteApi("/loai-cong-viec/", service.id);
              dispatch(action);
            }}
          >
            DEL
          </Button>
        </div>
      ),
    },
  ];

  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    fetchApi();
  }, [allJobType.tenLoaiCongViec]);
  return (
    <>
      <Modal ref={refUpdate} />
      <Button
        style={{ textAlign: "right", marginBottom: "20px" }}
        type="primary"
        data-bs-toggle="modal"
        data-bs-target="#modalId"
        onClick={() => {
          dispatch(setComponent(<AddJobTypeForm />));
        }}
      >
        Add New Jobtype
      </Button>
      <Table columns={columns} dataSource={allJobType} />
    </>
  );
}
