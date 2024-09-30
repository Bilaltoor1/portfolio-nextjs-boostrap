'use client'
import React from 'react'
import Marquee from "react-fast-marquee";
import { RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine, RiCircleFill, RiDownloadLine } from '@remixicon/react'
import profile from "../../assets/images/about/profile.png"
import partner1 from "../../assets/images/client-logos/partner1.png"
import partner2 from "../../assets/images/client-logos/partner2.png"
import partner3 from "../../assets/images/client-logos/partner3.png"
import partner4 from "../../assets/images/client-logos/partner4.png"
import partner5 from "../../assets/images/client-logos/partner5.png"
import SlideUp from '../../utlits/animations/slideUp';
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <Image src={profile} alt="About Me" className='w-[300px] h-[400px]'/>
                                <h2>Bentos Walker</h2>
                                <p>I am a Web Designer based in san francisco.</p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><Link href="/"><RiFacebookCircleFill size={20} /></Link></li>
                                        <li><Link href="/"><RiTwitterXLine size={20} /></Link></li>
                                        <li><Link href="/"><RiLinkedinFill size={20} /></Link></li>
                                        <li><Link href="/"><RiGithubLine size={20} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <p>Hello There!</p>
                                <h2>
                                    I’m Bentos Walker, a product designer crafting user-centric design with pixel-perfect precision.
                                </h2>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'><i><RiCircleFill size={14} /></i> Available for Freelancing</li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <Link href="/contact" className="theme-btn">Download CV <i><RiDownloadLine size={16} /></i> </Link>
                                </div>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <div className="about-content-part-bottom">
                                <h2>Company I Worked With</h2>
                                <div className="company-list">
                                    <div className="scroller">
                                        <div className="scroller__inner">
                                            <Marquee>
                                                <Image src={partner1} alt="photo" width={80} height={40} />
                                                <Image src={partner2} alt="photo" width={80} height={40} />
                                                <Image src={partner3} alt="photo" width={80} height={40} />
                                                <Image src={partner4} alt="photo" width={80} height={40} />
                                                <Image src={partner5} alt="photo" width={80} height={40} />
                                                <Image src={partner1} alt="photo" width={80} height={40} />
                                            </Marquee>
                                        </div>
                                    </div>
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

export default Hero