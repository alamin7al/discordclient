import React from 'react';
import blog1 from '../img/blog1.png'
import blog2 from '../img/blog2.png'
import blog3 from '../img/blog3.png'
import blog4 from '../img/blog4.png'
import blog5 from '../img/blog5.png'
import blog6 from '../img/blog6.png'
import blog7 from '../img/blog7.png'
import blog8 from '../img/blog8.jpeg'
import './Blog.css'
import BlogModal from './BlogModal';
import BlogModalfour from './blogmodalfour';
import BlogModaltwo from './Blogmodaltwo';
const BlogCard = () => {
    return (
        <div className="container">
            <div className="row gx-5 gy-5 my-5">
                <div className="col-lg-6">
                    <div className="text-start ">
                        <img className='img-fluid blogimage' src={blog1} alt="" />
                        <h5 className='blogtile my-3'>COMMUNITY</h5>
                        <h2 className='blogtext'> <BlogModal/> </h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="text-start ">
                        <img className='img-fluid blogimage' src={blog2} alt="" />
                        <h5 className='blogtile my-3'>
                            POLICY & SAFETY
                        </h5>
                        <h2 className='blogtext'>
                            Important Policy Updates
                        </h2>
                    </div>
                </div>

            </div>
            <div className="row gx-5 gy-5 my-5">
                <div className="col-md-4 col-lg-4 col-sm-6 my-5">
                    <div className="text-start ">
                        <img className='img-fluid blogimage' src={blog2} alt="" />
                        <h5 className='blogtile my-3'>PRODUCT & FEATURES
                        </h5>
                        <h2 className='blogtext'> PlayStation® x Discord: Connect Your Account and Show What You’re Playing

                        </h2>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-6 my-5">
                    <div className="text-start ">
                        <img className='img-fluid blogimage' src={blog3} alt="" />
                        <h5 className='blogtile my-3'>            COMMUNITY

                        </h5>
                        <h2 className='blogtext'>
                            <BlogModaltwo/>


                        </h2>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-6 my-5">
                    <div className="text-start ">
                        <img className='img-fluid blogimage' src={blog4} alt="" />
                        <h5 className='blogtile my-3'>            DISCORD HQ

                        </h5>
                        <h2 className='blogtext'>
                            Discord Welcomes Elizabeth Hamren as new COO
                        </h2>
                    </div>
                </div>

                <div className="col-md-4 col-lg-4 col-sm-6 my-5">
                    <div className="text-start ">
                        <img className='img-fluid blogimage' src={blog5} alt="" />
                        <h5 className='blogtile my-3'>            POLICY & SAFETY

                        </h5>
                        <h2 className='blogtext'>
                            Parents & Educators, join us on Discord!
                        </h2>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-6 my-5">
                    <div className="text-start ">
                        <img className='img-fluid blogimage' src={blog6} alt="" />
                        <h5 className='blogtile my-3'>PRODUCT & FEATURES
                        </h5>
                        <h2 className='blogtext'>           PlayStation® x Discord: Connect Your Account and Show What You’re Playing

                        </h2>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-6 my-5">
                    <div className="text-start ">
                        <img className='img-fluid blogimage' src={blog7} alt="" />
                        <h5 className='blogtile my-3'>            ENGINEERING & DESIGN

                        </h5>
                        <h2 className='blogtext'>
                            <BlogModalfour></BlogModalfour>
                        </h2>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-6 my-5">
                    <div className="text-start ">
                        <img className='img-fluid blogimage' src={blog8} alt="" />
                        <h5 className='blogtile my-3'>            ENGINEERING & DESIGN

                        </h5>
                        <h2 className='blogtext'>
                            How Data Science Informs Strategy & Innovation at Discord
                        </h2>
                    </div>
                </div>
            </div>










        </div>
    );
};

export default BlogCard;