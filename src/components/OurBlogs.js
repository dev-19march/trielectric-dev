import React from "react";
import "./OurBlogs.scss";
import Share from "../assets/images/share.svg"
import Slider from "react-slick";
import BlogImageOne from "../assets/images/blog-bg.svg"
import BlogImageTwo from "../assets/images/blog-bg1.svg"
import { Link } from "react-router-dom"
function OurBlogs() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        cssEase: "linear",
        slidesToShow: 2,
        slidesToScroll: 2,
        centerPadding: "60px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="container mt-5">
            <div className="row">
                <div className='assessment-container'>
                    <div className='teach-container blogs-container pt-0'>
                        <div className='row'>
                            <div className='col-lg-5 col-md-6'>
                                <h2 className="title-section text-start">Our<span className='free-Assessment ms-lg-3 ms-md-3 ms-sm-3 ms-2'>Blogs</span></h2>
                              <p className="opinions">Share and give your thoughts <br></br> and opinions on the important <br></br> subjects.</p>
                                <button className="custom_btn">Read More</button>
                            </div>
                            <div className='col-lg-7 col-md-6'>
                                <div className="blogs-card-container">
                                    <Slider {...settings}>
                                        <div className="bolg-card-space">

                                            <div className="blog-card">
                                                <div className="blog-bg-image">
                                                    <img src ={BlogImageOne} alt="blog-image"/>
                                                </div>
                                                <div class="post-description">
                                                    <div class="share-date"><span>Dec 11, 2023 10 min read</span><div className="share-icon-container"><img src={Share} alt="share-icon" /></div></div>
                                                    <h3>Before you upgrade your phone, upgrade this skillS.</h3>
                                                </div>
                                                </div>
                                               
                                        </div>
                                        <div className="bolg-card-space">
                                            <Link to="https://www.futuretayari.com/blogs">
                                            <div className="blog-card">
                                            <div className="blog-bg-image">
                                                    <img src ={BlogImageTwo} alt="blog-image" />
                                                </div>
                                                <div class="post-description">
                                                    <div class="share-date"><span>Dec 11, 2023 15 min read</span><div className="share-icon-container"><img src={Share} alt="share-icon" /></div></div>
                                                    <h3>Uncovering the Thin Line: Mastering the Art of Self-Confidence Without Tipping into Arrogance</h3>
                                                </div>
                                                </div>
                                                </Link>
                                        </div>

                                        <div className="bolg-card-space">
                                            <div className="blog-card">
                                                <div className="blog-bg-image">
                                                    <img src ={BlogImageOne} alt="blog-image" />
                                                </div>
                                                <div class="post-description">
                                                    <div class="share-date"><span>Apr 19, 2023 15 min read</span><div className="share-icon-container"><img src={Share}  alt="share-icon" /></div></div>
                                                    <h3>Mastering the art of persuasion</h3>
                                                </div>
                                                </div>
                                        </div>
                                        <div className="bolg-card-space">
                                            <div className="blog-card">
                                                <div className="blog-bg-image">
                                                    <img src ={BlogImageTwo} alt="blog-image" />
                                                </div>
                                                <div class="post-description">
                                                    <div class="share-date"><span>Mar 13, 2023 20 min read</span><div className="share-icon-container"><img src={Share}  alt="share-icon" /></div></div>
                                                    <h3>Overthinking: A Young Woman’s Take on a Generational Problem</h3>
                                                </div>
                                                </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurBlogs;