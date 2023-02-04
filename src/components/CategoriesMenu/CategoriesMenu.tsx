import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/configStore";
import JobModel, {
  DsChiTietLoai,
  DsNhomChiTietLoai,
} from "../../redux/models/JobModel";
import { getMenuLoaiCv } from "../../redux/reducers/jobReducer";

type Props = {};

export default function CategoriesMenu({}: Props) {
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);
  //
  const { arrLoaiCV } = useSelector((state: RootState) => state.jobReducer);
  // console.log(arrLoaiCV);
  const dispatch: AppDispatch = useDispatch();
  //
  useEffect(() => {
    const actionApi = getMenuLoaiCv();
    dispatch(actionApi);
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      if (location.pathname === "/") {
        setScrollPosition(window.pageYOffset);
      } else if (location.pathname !== "/") {
        setScrollPosition(0);
      }
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [location.pathname]);

  return (
    <section
      className={
        scrollPosition > 0 || location.pathname !== "/"
          ? "CategoriesMenu"
          : "CategoriesMenu CategoriesMenu-active"
      }
    >
      <div className="categoriesmenu_wrapper">
        <nav className="categoriesmenu_row">
          <div className="categoriesmenu_ul ">
            {arrLoaiCV.map((job: JobModel, index: number) => {
              return (
                <div className="categoriesmenu_li" key={index}>
                  <NavLink className="links mb-0" to={`/title/${job.id}`}>
                    <p className="mb-0">{job.tenLoaiCongViec}</p>
                  </NavLink>
                  <div
                    className={`categoriesmenu_li_jobdetail categoriesmenu_li_jobdetail_${job.id}`}
                  >
                    {/* <ul className="categoriesmenu_li_jobdetail"> */}
                    {job.dsNhomChiTietLoai?.map(
                      (detail: DsNhomChiTietLoai, index: number) => {
                        return (
                          <div
                            className="container-fluid d-flex flex-column"
                            key={index}
                          >
                            <p className="categoriesmenu_li_jobdetail_detail container">
                              {detail.tenNhom}
                            </p>
                            {detail.dsChiTietLoai?.map(
                              (job: DsChiTietLoai, index: number) => {
                                return (
                                  <NavLink
                                    className="categoriesmenu_li_jobdetail_detail_job container"
                                    to={`/categories/${job.id}`}
                                    key={index}
                                  >
                                    {job.tenChiTiet}
                                  </NavLink>
                                );
                              }
                            )}
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    </section>
  );
}
