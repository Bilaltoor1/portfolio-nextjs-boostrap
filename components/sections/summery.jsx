'use client'
import profile from "../../assets/images/profile.png"
import {RiMailSendLine} from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'
import Image from "next/image";
import Link from "next/link";

const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <Image src={profile} alt="About Me"/>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                    I’m Bilal Toor, a full stack Web Developer.
                                </h2>
                                <p>I'm a seasoned software developer with over a decade of experience, dedicated to
                                    crafting robust, scalable, and user-friendly applications. Throughout my career,
                                    I’ve mastered the art of building applications from the ground up, ensuring not only
                                    high performance but also long-term maintainability across a variety of platforms
                                    and environments.

                                    What sets me apart is my passion for delivering exceptional user experiences. I go
                                    beyond just coding—I rigorously review and test customer-facing prototypes, always
                                    aiming to refine the smallest details to ensure the highest level of usability.
                                    Whether it’s optimizing performance or enhancing design intuitiveness, I’m committed
                                    to delivering software that not only meets technical requirements but also delights
                                    end users.

                                    From developing complex back-end systems to designing seamless front-end interfaces,
                                    I thrive on solving problems and turning ideas into reality. My expertise spans full
                                    software development life cycles, ensuring that the solutions I deliver are not only
                                    effective today but scalable for the future.</p>
                                <div className="hero-btns">
                                    <Link href="contact" className="theme-btn">Get In touch<i> <RiMailSendLine
                                        size={16}/> </i></Link>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Summery