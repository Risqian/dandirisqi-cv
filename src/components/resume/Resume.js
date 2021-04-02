import React from 'react';
import Bar from './Bar';
import { motion } from 'framer-motion'
import {tools, languages} from '../data/resume_data'
import './resume.css'


const Resume = () => {

    const resume_variant = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }

    return (
        <motion.div className="container resume"
            variants={resume_variant}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card_heading">
                        Education
                    </h4>
                    <div className="resume-card_body">
                        <h5 className="resume-card_title">
                            Computer Science Enginnering
                        </h5>
                        <p className="resume-card_name">
                            Academy of Technology(2017-2021)
                        </p>
                        <p className="resume-card_details">I am currently persuing B.tech in Computer Science Engineering from Academy of Technology</p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card_heading">
                        Experience
                    </h4>
                    <div className="resume-card_body">
                        <h5 className="resume-card_title">
                            Intern
                        </h5>
                        <p className="resume-card_name">
                            TCS (2020)
                        </p>
                        <p className="resume-card_details">I work as a intern in TCS and also completed some projects on testing</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language_heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language_body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language_heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language_body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;