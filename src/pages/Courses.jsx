import React from "react";
import "../components/styles/Courses.css";
import { FaStar } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import perImg from "../components/assets/images/per.png";
import c1 from "../components/assets/data/images2/course-2-1.jpg"
import c2 from "../components/assets/data/images2/course-4-1.jpg"
import c3 from "../components/assets/data/images2/course-5-1.jpg"
import c4 from "../components/assets/data/images2/course-6-1.jpg"
import c5 from "../components/assets/data/images2/course11.jpg"
import c6 from "../components/assets/data/images2/course12.jpg"

function Courses() {
  return (
    <section>
      <div className="album py-5">
        <div className="container">
          <br />
          <h2 className="text-black">Find The Right <br /> Online Course For You</h2>
          <p className="text-secondary">you don't have to struggle alone, you've got our assistance and help.</p>
          <br />
          <br />
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-3">

          <div className="col">
              <div className="card shadow-sm">
                <img className="courses" width="100%" height="170" src={c1} alt="courses" />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="lesson text-secondary"><FaBook /> 10 lessons</span>
                    <small className="rate text-secondary"><FaStar size={15} color="#ffa534" /> 4.50(2)</small>
                  </div>
                  <br />
                  <p className="card-text">The Power of Podcast for Storytelling</p>
                  <br />
                  <div className="d-flex align-items-center">
                    <img className="perImg" src={perImg} alt="person" />
                    <p className="text-secondary">Sunil</p>
                  </div>
                  <hr className="line" />
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="free text-primary">Free</p>
                    <button className="button text-body-secondary bg-white">Know Details <GoArrowRight /></button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img className="courses" width="100%" height="170" src={c2} alt="courses" />
                <div class="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="lesson text-secondary"><FaBook /> 10 lessons</span>
                    <small className="rate text-secondary"><FaStar size={15} color="#ffa534" /> 4.50(2)</small>
                  </div>
                  <br />
                  <p class="card-text">Fashion and Luxury Fashion in a Changing</p>
                  <br />
                  <div className="d-flex align-items-center">
                    <img className="perImg" src={perImg} alt="person" />
                    <p className="text-secondary">Sunil</p>
                  </div>
                  <hr className="line" />
                  <div class="d-flex justify-content-between align-items-center">
                    <p className="free text-primary">Free</p>
                    <button className="button text-body-secondary bg-white">Know Details <GoArrowRight /></button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img className="courses" width="100%" height="170" src={c3} alt="courses" />
                <div class="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="lesson text-secondary"><FaBook /> 10 lessons</span>
                    <small className="rate text-secondary"><FaStar size={15} color="#ffa534" /> 4.50(2)</small>
                  </div>
                  <br />
                  <p class="card-text">Creative writing through Storytelling</p>
                  <br />
                  <div className="d-flex align-items-center">
                    <img className="perImg" src={perImg} alt="person" />
                    <p className="text-secondary">Sunil</p>
                  </div>
                  <hr className="line" />
                  <div class="d-flex justify-content-between align-items-center">
                    <p className="free text-primary">Free</p>
                    <button className="button text-body-secondary bg-white">Know Details <GoArrowRight /></button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img className="courses" width="100%" height="170" src={c4} alt="courses" />
                <div class="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="lesson text-secondary"><FaBook /> 10 lessons</span>
                    <small className="rate text-secondary"><FaStar size={15} color="#ffa534" /> 4.50(2)</small>
                  </div>
                  <br />
                  <p class="card-text">Improving The Accessibility Of Your Markdown</p>
                  <br />
                  <div className="d-flex align-items-center">
                    <img className="perImg" src={perImg} alt="person" />
                    <p className="text-secondary">Sunil</p>
                  </div>
                  <hr className="line" />
                  <div class="d-flex justify-content-between align-items-center">
                    <p className="free text-primary">Free</p>
                    <button className="button text-body-secondary bg-white">Know Details <GoArrowRight /></button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img className="courses" width="100%" height="170" src={c5} alt="courses" />
                <div class="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="lesson text-secondary"><FaBook /> 10 lessons</span>
                    <small className="rate text-secondary"><FaStar size={15} color="#ffa534" /> 4.50(2)</small>
                  </div>
                  <br />
                  <p class="card-text">Product Manager Learn the Skills & job.</p>
                  <br />
                  <div className="d-flex align-items-center">
                    <img className="perImg" src={perImg} alt="person" />
                    <p className="text-secondary">Sunil</p>
                  </div>
                  <hr className="line" />
                  <div class="d-flex justify-content-between align-items-center">
                    <p className="free text-primary">Free</p>
                    <button className="button text-body-secondary bg-white">Know Details <GoArrowRight /></button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img className="courses" width="100%" height="170" src={c6} alt="courses" />
                <div class="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="lesson text-secondary"><FaBook /> 10 lessons</span>
                    <small className="rate text-secondary"><FaStar size={15} color="#ffa534" /> 4.50(2)</small>
                  </div>
                  <br />
                  <p class="card-text">The business Intelligence analyst Course 2024</p>
                  <br />
                  <div className="d-flex align-items-center">
                    <img className="perImg" src={perImg} alt="person" />
                    <p className="text-secondary">Sunil</p>
                  </div>
                  <hr className="line" />
                  <div class="d-flex justify-content-between align-items-center">
                    <p className="free text-primary">Free</p>
                    <button className="button text-body-secondary bg-white">Know Details <GoArrowRight /></button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}



export default Courses;