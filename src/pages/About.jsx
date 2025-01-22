import React from "react";
import "../components/styles/About.css";
import { FaBookDead } from "react-icons/fa"
import { IoMdCheckmark } from "react-icons/io";
import AboutPerson from "../components/assets/images/about.jpg";
import OtherPerson from "../components/assets/images/join1.png";
function About() {
  return (
    <div>

      <section className="container px-4 py-5" id="featured-3">
        <br />
        <h2 className="title pb-2">Why An Scholercity Out Of The Ordinary</h2>
        <span className="title-2">you don't have to struggle alone, you've got our assistance and help.</span>
        <br />
        <br />

        <div className="all-card row g-5 py-5 row-col-2 row-col-sm-2 row-cols-lg-4">
          <div className="feature-1 col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 my-4">
              <FaBookDead size={55} />
            </div>
            <h5>4,000 Online courses</h5>
            <p>You don't have to struggle alone, you've</p>
          </div>
          <div className="feature-2 col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 my-4">
              <FaBookDead size={55} />
            </div>
            <h5>4,000 Online courses</h5>
            <p>You don't have to struggle alone, you've</p>
          </div>
          <div className="feature-3 col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 my-4">
              <FaBookDead size={55} />
            </div>
            <h5>4,000 Online courses</h5>
            <p>You don't have to struggle alone, you've</p>
          </div>
          <div className="feature-4 col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 my-4">
              <FaBookDead size={55} />
            </div>
            <h5>4,000 Online courses</h5>
            <p>You don't have to struggle alone, you've</p>
          </div>
        </div>
      </section>
      <AboutContent />
    </div>
  );
}

function AboutContent() {
  return (
    <section>
      <div className="row featurette">
        <div className="infoPerson col-md-5 order-1 order-md-2">
          <h2>Achieve Your Goals With Educal</h2>
          <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam officia, reiciendis sapiente adipisci nulla non consequuntur eos repellendus laborum veritatis obcaecati neque est id porro voluptatum. Fuga iure nulla cum. Lost the plot bobby such a fibber bleeding bits and bobs don't get shirty with me bugger all mate chinwag super pukka william barney, horse play buggered.</p>

          <div className="list">
            <ul className="list-unstyled mb-0 col-12 col-md-6 text-secondary text-left my-4 my-md-0">
              <li>
                <IoMdCheckmark className="fa-icon" />
                <span>
                  <span className="text-110">Upskill your organization.</span>
                </span>
              </li>
              <li className="mt-25">
              <IoMdCheckmark className="fa-icon" />
                <span className="text-110">
                  Access more then 100K online courses.
                </span>
              </li>

              <li className="mt-25">
              <IoMdCheckmark className="fa-icon" />
                <span className="text-110">
                  Learn the latest skills.
                </span>
              </li>
            </ul>
            <br />
            <div class="button-Apply">Apply Now</div>
            <br />
            <br />
            <img src={OtherPerson} alt="otherPerson" />
            <p className="text-secondary">Join over <span className="text-dark">4,000+</span> students</p>
          </div>
        </div>
        <div className="AboutPerson col-md-5 order-md-1 ">
          <img src={AboutPerson} width={390} height={470} alt="person" />
        </div>
      </div>
    </section>
  )
}

export default About;