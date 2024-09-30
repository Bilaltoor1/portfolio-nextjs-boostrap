'use client'
import { RiBookLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../utlits/animations/slideUp'

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Experience</h2>
                                <div className="experience-list">
                                    <Card year={'2021 - Present'} title={'Web Designer'} institution={'Themeforest Market '} />
                                    <Card year={'2021 - 2023'} title={'Marketing Expert GRP'} institution={'Envato Theme Developer'} />
                                    <Card year={'2021 - 2022'} title={'Web Designer'} institution={'Web Developer & Business Partner'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>Education</h2>
                                    <Card year={'2013 - 2015'} title={'Bachelor Degree of Information Technology'} institution={'State University bangladesh'} />
                                    <Card year={'2021 - 2024'} title={'Higher secoundery Education'} institution={'Premium College United VC'} />
                                    <Card year={'2020 - 2021'} title={'UI/UX Design'} institution={'Webster College'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume


const Card = ({ year, title, institution }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiBookLine />
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company"> {institution} </span>
                </div>
            </div>
        </SlideUp>
    )
}