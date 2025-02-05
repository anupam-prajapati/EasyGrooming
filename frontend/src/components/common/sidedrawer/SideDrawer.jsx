import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";

const SideDrawer = () => {
  return (
    <>
      {/* Sidebar Offcanvas */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvas"
        data-bs-keyboard="true"
      >
        {/* Sidebar Header */}
        <div className="offcanvas-header d-flex justify-content-end">
          <div className="nav-item me-0 mt-2">
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
        </div>

        <hr className="text-white fw-bold" />

        {/* Sidebar Body */}
        <div className="offcanvas-body px-0">
          <ul className="nav nav-pills flex-column mb-sm-auto mb-0">
            <li className="nav-item pb-3" data-bs-dismiss="offcanvas">
              <Link to="/customer/dashboard" className="nav-link">
                <i className="bi bi-house-door h4"></i>
                <span className="ms-3 d-none d-sm-inline h5">Dashboard</span>
              </Link>
            </li>

            <li className="nav-item pb-3" data-bs-dismiss="offcanvas">
              <Link to="/customer/profile/:id" className="nav-link">
                <i className="bi bi-person h4"></i>
                <span className="ms-3 d-none d-sm-inline h5">My Profile</span>
              </Link>
            </li>

            <li className="nav-item pb-3" data-bs-dismiss="offcanvas">
              <Link to="/customer/appointments" className="nav-link">
                <i className="bi bi-receipt h4"></i>
                <span className="ms-3 d-none d-sm-inline h5">My Appointments</span>
              </Link>
            </li>

            <li className="nav-item pb-3">
              <Link to="/" className="nav-link">
                <i className="bi bi-bell h4"></i>
                <span className="ms-3 d-none d-sm-inline h5">Notifications</span>
              </Link>
            </li>

            <li className="nav-item pb-3">
              <Link to="" className="nav-link">
                <i className="bi bi-reply-all h4"></i>
                <span className="ms-3 d-none d-sm-inline h5">Feedback</span>
              </Link>
            </li>

            <li className="nav-item pb-3">
              <Link className="nav-link">
                <i className="bi bi-send-exclamation h4"></i>
                <span className="ms-3 d-none d-sm-inline h5">Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
