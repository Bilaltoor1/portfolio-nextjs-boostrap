// components/sections/callToAction.jsx
'use client'
import React from 'react'
import { RiDownloadLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'
import Link from "next/link"; // Corrected import

const CallToAction = () => {
    return (
        <section className="call-to-action-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-12">
                        <SlideUp>
                            <div className="about-content-part call-to-action-part text-center">
                                <h2 >Are You Ready to kickstart your project with a touch of magic?</h2>
                                <p>Reach out and let's make it happen ✨. I'm also available for full-time or Part-time opportunities to push the boundaries of design and deliver exceptional work.</p>
                                <div className="hero-btns">
                                    <Link href="/contact" className="theme-btn">Let's Talk  <i><RiDownloadLine size={16} /></i></Link>
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

export default CallToAction