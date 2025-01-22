import React from "react";
import { NavLink } from "react-router-dom"
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import "../styles/common.css";
import LogoImg from "../assets/images/logo-black.png"

function Footer() {
    return (
        <div>

            <div className="install container text-center">
                <div className="row">
                    <div className="col-6 col-md-5">
                        <h1>Start learning by Downloading Apps.</h1>
                    </div>
                    <div className="col-6 col-md-1">
                    </div>

                    <div className="col-6 col-md-6">

                        <button id="apple" className="btn btn-outline d-inline-flex align-items-center" type="button">
                            <BsApple size={17} /> <span className="ms-2">App Store</span>
                        </button>

                        <button id="play" class="btn text-bg-light" type="button">
                            <FaGooglePlay size={17} /> <span className="ms-2">Play Store</span>
                        </button>
                    </div>
                </div>
            </div>



            <footer className="footer row row-cols-1 row-cols-sm-3 row-cols-md-5 py-5">
                <div className="col mb-3">
                    <div className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                        <img className="bi me-2" width="40" height="32" src={LogoImg} alt="logo" />
                    </div>
                    <p className="text-body-secondary">Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</p>
                </div>

                {/* <div className="col mb-3">

                </div> */}

                <div className="col mb-3">
                    <h6>Company</h6>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Protfolio</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Blog</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Our Team</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Blog</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Get In Touch</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQ</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Latest News</a></li>
                    </ul>
                </div>

                <div class="col mb-3">
                    <h6>Platform</h6>
                    <ul class="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Shop</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Blog</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Landing</a></li>
                    </ul>
                </div>

                <div class="col mb-3">
                    <h6>Subscribe</h6>
                    <ul class="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About Us</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Reviews</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Services</a></li>
                    </ul>
                </div>
            </footer>


        </div>
    );
}

export default Footer;