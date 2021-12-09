import React from "react";
import Header from "../../header";
import "./splashpage.css";
import temp from "../../../assets/splash1.svg";
import temp2 from "../../../assets/splash2.svg";

export default function spash() {
  return (
    <React.Fragment>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={temp}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            ></img>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3 ">
              Find your dream job today!
            </h1>
            <p className="lead">
              Shuffle through our catalog of jobs posted by companies and apply
              to them direcly without any hassle! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Laudantium veritatis dolorum neque
              quisquam modi, officiis perspiciatis consequuntur soluta
              consectetur nemo odio sit, vitae et, ipsam consequatur odit
              cupiditate nam eius?
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Browse
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Login
              </button>
            </div>
          </div>
          <section class="section" style={{ marginTop: "200px" }}>
            <div class="container">
              <div class="row">
                <div class="col-12 text-center">
                  <h2 style={{ marginBottom: "50px" }} class="section-title">
                    Services
                  </h2>
                </div>
                <div class="col-md-4 mb-4 mb-md-0">
                  <div class="card hover-shadow shadow">
                    <div class="card-body text-center px-4 py-5">
                      <i
                        style={{ fontSize: "3rem", color: "rgb(53,184,190)" }}
                        class="fas fa-search-plus icon mb-5 d-inline-block"
                      ></i>
                      <h4 class="mb-4">Filter</h4>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Amet ipsam doloribus totam corporis earum ducimus.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-4 mb-md-0">
                  <div
                    style={{ backgroundColor: "rgb(53,184,190)" }}
                    class="card active-bg-primary hover-shadow shadow"
                  >
                    <div class="card-body text-center px-4 py-5">
                      <i
                        style={{ fontSize: "3rem", color: "white" }}
                        class="fas fa-plus-square mb-5 d-inline-block"
                      ></i>
                      <h4 class="mb-4">Post</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-4 mb-md-0">
                  <div class="card hover-shadow shadow">
                    <div class="card-body text-center px-4 py-5">
                      <i
                        style={{ fontSize: "3rem", color: "rgb(53,184,190)" }}
                        class="fas fa-check-square icon mb-5 d-inline-block"
                      ></i>
                      <h4 class="mb-4">Achieve</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Looking for employees?
            </h1>
            <p className="lead">
              Create your own company profile and post your job listing in a few
              short clicks! Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Sint accusamus rerum dolorem! Ut consequatur quidem
              laudantium quam harum repudiandae ducimus iste! Quasi repudiandae
              cupiditate similique veniam, autem suscipit quod laudantium!
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Register
              </button>
            </div>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={temp2}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            ></img>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
