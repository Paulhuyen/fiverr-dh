import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { ServiceCard } from "../../components/ServiceCard/ServiceCard";
import { AppDispatch, RootState } from "../../redux/configStore";
import { CongViecChiTiet } from "../../redux/models/JobModel";
import { getCategoryApi } from "../../redux/reducers/jobReducer";

type Props = {};

export default function Categories({}: Props) {
  const { arrCategory } = useSelector((state: RootState) => state.jobReducer);
  const dispatch: AppDispatch = useDispatch();
  const params: any = useParams();

  useEffect(() => {
    let { id } = params;
    dispatch(getCategoryApi(id));
  }, [params.id]);

  const renderService = () => {
    return arrCategory.map((service: CongViecChiTiet, index: number) => {
      return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4" key={index}>
          <ServiceCard service={service} />
        </div>
      );
    });
  };

  return (
    <section className="categories">
      <div className="container">
        <div className="categories-link">
          <ul className="d-flex algin-items-center gap-2">
            <li>
              <NavLink to="/home">Fiverr</NavLink>
              <span className="XQskgrQ chevron-icon-right" aria-hidden="true">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 8 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentFill"
                >
                  <path d="m.772 1.19-.619.62a.375.375 0 0 0 0 .53L5.8 8 .153 13.66a.375.375 0 0 0 0 .53l.62.62a.375.375 0 0 0 .53 0l6.544-6.545a.375.375 0 0 0 0-.53L1.302 1.19a.375.375 0 0 0-.53 0Z" />
                </svg>
              </span>
            </li>
            <li>
              <NavLink to="/">{arrCategory[0]?.tenLoaiCongViec}</NavLink>
              <span className="XQskgrQ chevron-icon-right" aria-hidden="true">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 8 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentFill"
                >
                  <path d="m.772 1.19-.619.62a.375.375 0 0 0 0 .53L5.8 8 .153 13.66a.375.375 0 0 0 0 .53l.62.62a.375.375 0 0 0 .53 0l6.544-6.545a.375.375 0 0 0 0-.53L1.302 1.19a.375.375 0 0 0-.53 0Z" />
                </svg>
              </span>
            </li>
          </ul>
        </div>
        <div className="categories-title">
          <span>{arrCategory[0]?.tenChiTietLoai}</span>
        </div>
        <div className="categories-topbar row justify-content-between">
          <div className="categories-topbar-dropdown col-lg-6  d-flex gap-2">
            <div className="categories-topbar-dropdown-filter">
              <button
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                Category
                <span>
                  <svg
                    width="11"
                    height="7"
                    viewBox="0 0 11 7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>
                  </svg>
                </span>
              </button>
              <ul className="dropdown-menu">
                <li className="d-flex align-items-center">
                  <a href="#a" className="dropdown-item active">
                    All Categories
                  </a>
                </li>
                <li className="d-flex align-items-center">
                  <a href="#a" className="dropdown-item">
                    Web Programing
                  </a>
                  <span>(20,566)</span>
                </li>
                <li className="d-flex align-items-center">
                  <a href="#a" className="dropdown-item">
                    Data Entry
                  </a>
                  <span>(12,566)</span>
                </li>
              </ul>
            </div>
            <div className="categories-topbar-dropdown-filter">
              <button
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                Service Options
                <span>
                  <svg
                    width="11"
                    height="7"
                    viewBox="0 0 11 7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>
                  </svg>
                </span>
              </button>
              <ul className="dropdown-menu">
                <li className="d-flex align-items-center">
                  <a href="#a" className="dropdown-item active">
                    All Categories
                  </a>
                </li>
                <li className="d-flex align-items-center">
                  <a href="#a" className="dropdown-item">
                    Web Programing
                  </a>
                  <span>(20,566)</span>
                </li>
                <li className="d-flex align-items-center">
                  <a href="#a" className="dropdown-item">
                    Data Entry
                  </a>
                  <span>(12,566)</span>
                </li>
              </ul>
            </div>
            <div className="categories-topbar-dropdown-filter">
              <button
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                Seller Details
                <span>
                  <svg
                    width="11"
                    height="7"
                    viewBox="0 0 11 7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>
                  </svg>
                </span>
              </button>
              <ul className="dropdown-menu">
                <li className="d-flex align-items-center">
                  <a href="#a" className="dropdown-item active">
                    All Categories
                  </a>
                </li>
                <li className="d-flex align-items-center">
                  <a href="#a" className="dropdown-item">
                    Web Programing
                  </a>
                  <span>(20,566)</span>
                </li>
                <li className="d-flex align-items-center">
                  <a href="#a" className="dropdown-item">
                    Data Entry
                  </a>
                  <span>(12,566)</span>
                </li>
              </ul>
            </div>
            <div className="categories-topbar-dropdown-filter">
              <button
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                Delivery Time
                <span>
                  <svg
                    width="11"
                    height="7"
                    viewBox="0 0 11 7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>
                  </svg>
                </span>
              </button>
              <ul className="dropdown-menu">
                <li className="d-flex align-items-center">
                  <a href="#a" className="dropdown-item active">
                    All Categories
                  </a>
                </li>
                <li className="d-flex align-items-center">
                  <a href="#a" className="dropdown-item">
                    Web Programing
                  </a>
                  <span>(20,566)</span>
                </li>
                <li className="d-flex align-items-center">
                  <a href="#a" className="dropdown-item">
                    Data Entry
                  </a>
                  <span>(12,566)</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="categories-topbar-toggle justify-content-end col-lg-6 d-flex gap-5 align-items-center">
            <div className="toggle d-flex align-items-center">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round" />
              </label>
              <span className="switch-title">Pro services</span>
            </div>
            <div className="toggle d-flex align-items-center">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round" />
              </label>
              <span className="switch-title">Local sellers</span>
            </div>
            <div className="toggle d-flex align-items-center">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round" />
              </label>
              <span className="switch-title">Online sellers</span>
            </div>
          </div>
        </div>
        <div className="categories-sort py-3 d-flex justify-content-between align-items-center">
          <div className="number-of-categories">
            <span className="pre-title">
              {arrCategory.length} services available
            </span>
          </div>
          <div className="sort-by">
            <span className="pre-title">Sort by</span>
            <select>
              <option defaultValue="relevace">Relevance</option>
              <option value="bestselling">Best Selling</option>
              <option value="newarrival">New Arrivals</option>
            </select>
          </div>
        </div>
        <div className="categories-services">
          <div className="row">{renderService()}</div>
        </div>
      </div>
    </section>
  );
}
