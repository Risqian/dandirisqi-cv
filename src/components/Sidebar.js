import React from 'react'

import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import dandi from '../assets/dandi.svg'
import resume from '../assets/resume.pdf'
import { motion } from 'framer-motion'

const Sidebar = () => {

    const handleEmailMe = () => {
        window.open("mailto:risqian99@gmail.com")
    }

    const sidebar_variant = {
        hidden: {
            x: '-20vh',
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.2, duration: 0.5, type: 'spring'
            }
        }
    }

    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate='visible'
        >
            <img src={dandi} alt="avatar" className="sidebar_avatar" />
            <div className="sidebar_name">Dandi <span>Risqi</span> </div>
            <div className="sidebar_item sidebar_title">Web Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar_item sidebar_resume">
                    <img src={tie} alt="resume" className="sidebar_icon" />Download Resume
                </div>
            </a>
            <figure className="sidebar_social-icons my-2">
                <a href="!#"><img src={facebook} alt="facebook" className="sidebar_icon mr-3" /></a>
                <a href="!#"><img src={instagram} alt="instagram" className="sidebar_icon" /></a>
            </figure>
            <div className="sidebar_contact">
                <div className="sidebar_item sidebar_github">
                    <a href="!#"><img src={github} alt="github" className="sidebar_icon mr-3" />github.com/Risqian</a>
                </div>
                <div className="sidebar_location">
                    <img src={pin} alt="location" className="sidebar_icon mr-3" />
                    Jakarta Selatan</div>
                <div className="sidebar_item">risqian99@gmail.com</div>
                <div className="sidebar_item">+62 81292568225</div>
            </div>
            <div className="sidebar_item sidebar_email" onClick={handleEmailMe}>email me</div>
        </motion.div>
    )
}

export default Sidebar;