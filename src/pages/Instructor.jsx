import React from "react";
import "../components/styles/Instructor.css";
import c5 from "../components/assets/data/images2/course11.jpg"
import c6 from "../components/assets/data/images2/course12.jpg"

function Instructor() {
  return (
    <section>
      <div class="px-4 py-2 my-5 text-center">
        <h1 class=" fw-bold text-body-emphasis">What Is Skilline?</h1>
        <div class="col-lg-6 mx-auto">
          <small class="lead mb-4">Sloshed faff about me old mucker blatant bubble and squeak hanky panky some dodgy chav bevvy arse chimney pot I, ruddy plastered buggered smashing blow off I'm telling up the kyver he legged it bleeder jolly good,</small>
        </div>

      </div>

      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2">
          <div class="colIns">
            <div class="cardIns1">
              <img className="img1" src={c5} alt="hi" />
              <h3 className="overlay">Mostly Online Learning</h3>
              <button className="overlay-button">Start aclass today</button>
            </div>
          </div>
          <div class="colIns">
            <div class="cardIns1">
              <img className="img1" src={c6} alt="hi" />
              <h3 className="overlay">Become An Instructor</h3>
              <button className="overlay-button">Start aclass today</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Instructor;