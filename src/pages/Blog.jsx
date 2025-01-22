import React from "react";
import "../components/styles/Blog.css";
import { FaGraduationCap, FaUsers } from "react-icons/fa"
import { GiEvilBook, GiWorld } from "react-icons/gi"

function Blog() {
    return (
        <section>
            <div class="px-4 py-2 my-5 text-center">
                <h2 class=" fw-bold text-body-emphasis">We Are Proud</h2>
                <div class="col-lg-6 mx-auto">
                    <p className="text-secondary">You don't have to struggle alone, you've got our assistance and help.</p>
                </div>
            </div>

            <div class="user row row-cols-2 row-cols-sm-4 g-1">
                <div class="colUser d-flex flex-column">
                    <FaUsers size={43} color="#EF4444" />
                    <h4 class="fw-semibold mb-0 text-body-emphasis">66</h4>
                    <p class="text-body-secondary">Students Enrolled</p>
                </div>

                <div class="colUser d-flex flex-column">
                    <GiEvilBook size={43} color="#F9781F" />
                    <h4 class="fw-semibold mb-0 text-body-emphasis">20</h4>
                    <p class="text-body-secondary">Total Courses</p>
                </div>

                <div class="colUser d-flex flex-column">
                    <FaGraduationCap size={43} color="#A855F7" />
                    <h4 class="fw-semibold mb-0 text-body-emphasis">4</h4>
                    <p class="text-body-secondary">Online Learners</p>
                </div>
                <div class="colUser d-flex flex-column">
                    <GiWorld size={43} color="#6366F1" />
                    <h4 class="fw-semibold mb-0 text-body-emphasis">4</h4>
                    <p class="text-body-secondary">Online Learners</p>
                </div>
            </div>
        </section>
    );
}

export default Blog;