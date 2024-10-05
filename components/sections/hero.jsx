'use client'
import React from 'react'
import Marquee from "react-fast-marquee";
import {
    RiFacebookCircleFill,
    RiTwitterXLine,
    RiLinkedinFill,
    RiGithubLine,
    RiCircleFill,
    RiDownloadLine,
    RiBlueskyLine, RiChromeFill, RiGitlabFill, RiBootstrapFill, RiDiscordFill, RiDribbbleFill, RiCentosFill
} from '@remixicon/react'
import profile from "../../assets/images/profile.png"
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
                                <h2>Bilal Toor</h2>
                                <p>I am a Web Developer based in Multan Pakistan.</p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><Link href="/"><RiFacebookCircleFill size={20}/></Link></li>
                                        <li><Link href="/"><RiTwitterXLine size={20}/></Link></li>
                                        <li><Link href="/"><RiLinkedinFill size={20}/></Link></li>
                                        <li><Link href="/"><RiGithubLine size={20}/></Link></li>
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
                                    I’m Bilal Toor, a full stack web developer crafting user-interface with
                                    pixel-perfect precision and Backend API's in NodeJS.
                                </h2>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'><i><RiCircleFill
                                            size={14}/></i> Available for Freelancing
                                        </li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <Link href="/contact" className="theme-btn">Download CV <i><RiDownloadLine
                                        size={16}/></i> </Link>
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
                                                <RiChromeFill className='w-100 icon-link'/>
                                                <RiFacebookCircleFill className='w-100 icon-link'/>
                                                <RiGithubLine className='w-100 icon-link'/>
                                                <RiGitlabFill className='w-100 icon-link'/>
                                                <RiBootstrapFill className='w-100 icon-link'/>
                                                <RiDiscordFill className='w-100 icon-link'/>
                                                <RiDribbbleFill className='w-100 icon-link'/>
                                                <RiCentosFill className='w-100 icon-link'/><RiBlueskyLine
                                                className='w-100 icon-link'/>
                                                <RiChromeFill className='w-100 icon-link'/>
                                                <RiFacebookCircleFill className='w-100 icon-link'/>
                                                <RiGithubLine className='w-100 icon-link'/>
                                                <RiGitlabFill className='w-100 icon-link'/>
                                                <RiBootstrapFill className='w-100 icon-link'/>
                                                <RiDiscordFill className='w-100 icon-link'/>
                                                <RiDribbbleFill className='w-100 icon-link'/>
                                                <RiCentosFill className='w-100 icon-link'/>
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