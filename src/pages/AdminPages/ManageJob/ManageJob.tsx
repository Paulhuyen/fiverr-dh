import { current } from "@reduxjs/toolkit";
import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddJob from "../../../HOC/AddJob/AddJob";
import JobUpdate from "../../../HOC/JobUpdate/JobUpdate";
import { AppDispatch, RootState } from "../../../redux/configStore";
import {
  delCongViecApi,
  getAllCongViecApi,
  getJobApi,
} from "../../../redux/reducers/adminReducer";
import { setStore } from "../../../util/setting";

interface DataType {
  id: number;
  tenCongViec: string;
  danhGia: number;
  giaTien: number;
  nguoiTao: number;
  hinhAnh: string;
  moTa: string;
  maChiTietLoaiCongViec: number;
  moTaNgan: string;
  saoCongViec: number;
}
// Conponent
type Props = {};

export default function ManageJob({}: Props) {
  const refJobDialog = useRef<any>(null);
  const dispatch: AppDispatch = useDispatch();
  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "tenCongViec",
      key: "tenCongViec",
      width: 200,
      render: (text) => <p className="mt-0">{text}</p>,
    },
    {
      title: "Image",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (url) => <img src={url} width="70px" height="70px" alt="..." />,
    },
    {
      title: "Discription",
      dataIndex: "moTaNgan",
      key: "moTaNgan",
    },
    {
      title: "$Price",
      dataIndex: "giaTien",
      key: "giaTien",
      render: (text) => <p className="mt-0">{text}</p>,
    },
    {
      title: "Rate",
      dataIndex: "danhGia",
      key: "danhGia",
      render: (text) => <p className="mt-0">{text}</p>,
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "x",
      render: (_, { id }) => (
        <div className="d-flex gap-3">
          <JobUpdate ref={refJobDialog} id={id} />
          <Button
            onClick={() => {
              // console.log(id);
              setStore("id_job", id);
              refJobDialog.current.open();
              dispatch(getJobApi(id));
            }}
          >
            Edit
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => {
              // console.log(id);
              dispatch(delCongViecApi(id));
            }}
          >
            DEL
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getAllCongViecApi());
  }, []);
  const { allCongViec } = useSelector((state: RootState) => state.adminReducer);
  // console.log(allCongViec);

  return (
    <>
      <AddJob />
      <Table columns={columns} dataSource={allCongViec} />
    </>
  );
}
