import React from "react";
import "../components/styles/Home.css";
import heroShape from "../components/assets/images/hero-shape-purple.png";
import hero from "../components/assets/images/hero.png";
import { FaUsers } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { IoFlash } from "react-icons/io5";
import { IoMdSchool } from "react-icons/io";
import About from "./About";
import Courses from "./Courses";
import Instructor from "./Instructor";
import Blog from "./Blog";

function Home() {
  return (
    <div>
      <HomeContent />
      <br />
      <br />
      <About />
      <br />
      <br />
      <br />
      <Courses />
      <br />
      <Instructor />
      <br />
      <Blog />
    </div>
  );
}

function HomeContent() {
  return (
    <div>
      <div className="home row">
        <div className="home-heading col-md-6">
          <h1 className="featurette-heading fw-normal lh-1">Launch your <br /> Own online learning <br /> Platform</h1>
          <br />
          <h4>Unlimited access to all 60+ instructors.</h4>
          <p class="lead">2 passes (with access to all classes) for $240.</p>
          <input type="search" class="form-control text-light-emphasis bg-secondary-subtle  " placeholder=" Search..." aria-label="Search"></input>
          <p>You`re guaranteed to find something that`s right for you.</p>
        </div>

        <div className="col-md-5">
          <div className="bg-hero">
            <img src={heroShape} alt="heroShape.png" width={"450px"} height={"350px"} />
          </div>
          <div className="girl">
            <img className="hero" src={hero} alt="hero.png" width={"400px"} height={"700px"} />

            <button class="btn-1 btn d-inline-flex align-items-center" type="button">
              <div className="icon-button">
                <FaUsers size={28} />
              </div>
              <div>
                <span className="text1-icon">User Experience Class</span>
                <br />
                <span className="text2-icon">Tomorrow is our</span>
              </div>
            </button>

            <button class="btn-2 btn d-inline-flex align-items-center" type="button">
              <div className="icon-button">
                <IoFlash size={28} />
              </div>
              <div>
                <span className="text1-icon">Congrstulations</span>
                <br />
                <span className="text2-icon">Your admission completed</span>
              </div>
            </button>

            <button class="btn-3 btn d-inline-flex align-items-center" type="button">
              <div className="icon-button-book">
                <FaBookReader size={28} />
              </div>
            </button>

            <button class="btn-4 btn d-inline-flex align-items-center" type="button">
              <div className="icon-button-school">
                <IoMdSchool size={28} />
              </div>
              <div>
                <span className="text1-icon">450K</span>
                <br />
                <span className="text2-icon">Assisted Student</span>
              </div>
            </button>

          </div>


        </div>
      </div>
    </div>
  );
}

export default Home;
