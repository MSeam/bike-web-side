import React from "react";
import { Link } from "react-router-dom";
import CommonBtn from "./CommonBtn";

function NavSection() {
  return (
    <div>
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light nav-bg">
          <div class="container-fluid">
            <div className="logo-img">
              <img src="https://static.vecteezy.com/system/resources/previews/012/574/862/non_2x/biker-riding-motorcycle-logo-vector.jpg" alt="" />
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link className="link">
                    <p>Home</p>
                  </Link>
                </li>
                <li class="nav-item ms-5">
                  <Link className="link">
                    <p>Shop</p>
                  </Link>
                </li>
                <li class="nav-item ms-5">
                  <Link className="link">
                    <p>News</p>
                  </Link>
                </li>
                <li class="nav-item ms-5">
                  <Link className="link">
                    <p>Contact</p>
                  </Link>
                </li>
                <li class="nav-item ms-5 ps-5">
                  <CommonBtn
                    title="Login"
                    btnPadding="6px 24px"
                    btnMargin="-4px"
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavSection;
