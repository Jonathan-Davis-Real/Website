import { useEffect, useRef, useState } from 'react';
import { Tooltip } from 'react-tooltip';

import testImage1 from '../assets/images/TestImg.jpg';

import me1 from '../assets/images/Me/Me1.png';
import me2 from '../assets/images/Me/Me2.png';

import mePtr1 from '../assets/images/Me/MePtr1.png';
import mePtr2 from '../assets/images/Me/MePtr2.png';

import discord1 from '../assets/images/Social/Discord 1.png'
import discord2 from '../assets/images/Social/Discord 2.png'

import github1 from '../assets/images/Social/Github1.png'
import github2 from '../assets/images/Social/Github2.png'

import insta1 from '../assets/images/Social/Instagram1.png'
import insta2 from '../assets/images/Social/Instagram2.png'

import email1 from '../assets/images/Social/Email1.png'
import email2 from '../assets/images/Social/Email2.png'

import sticky from '../assets/images/Sticky/Sticky.png'

function HomePage({ lineHeightPixels, currentFrame, audioRef, playHoverSound, muteState, marginSize, onNavigate }) {
    const mainRef = useRef(null);

    const meFrames = [me1, me2];
    const mePtrFrames = [mePtr1, mePtr2];

    const discordFrames = [discord1, discord2];
    const instaFrames = [insta1, insta2];
    const githubFrames = [github1, github2];
    const emailFrames = [email1, email2];

    const pageWidth = window.innerWidth;

    return (
        <div className="page-home" style={
            { 
            lineHeight: `${lineHeightPixels}px`, 
            width: `${pageWidth - marginSize - 1}px`, 
            height: '100%', 
            fontSize: `${lineHeightPixels}px` 
            }
        } ref={mainRef}>
            <div className = "aboutMe">
                <p style={
                    {
                    lineHeight: `${2 * lineHeightPixels}px`,
                    fontSize: `${2 * lineHeightPixels}px`,
                    marginTop: `0px` }
                }> 
                Welcome to my website!                 
                </p>
                <p className="stack-regular" >
                    Hello! I am Jonathan Davis <br/>
                    I am currently studying computer science at Oregon State University <br/><br/>

                     This is my online repository for all my various internet stuff <br/>
                     My goal for this website is to be more interactive and " tactile "<br/>
                     A majority of websites nowadays feel corporate and bland. <br/>
                    
                </p>
                <p>
                    The best way to contact me is through my Discord or Instagram 
                </p>
                    <img
                        src={mePtrFrames[currentFrame % 2 === 0 ? 0 : 1]}
                        alt="Me Image"
                        style={{ height: `${lineHeightPixels * 3}px` }}
                        onMouseEnter={() => playHoverSound && playHoverSound()}
                    />
                <img
                        src={meFrames[currentFrame % 2 === 0 ? 0 : 1]}
                        alt="Me Image"
                        style={{ height: `${lineHeightPixels * 4}px` }}
                        onMouseEnter={() => playHoverSound && playHoverSound()}
                    />

                <br/><br/>
            </div>

            <div className = "projects">
                <button
                    type="button"
                    className="project-link"
                    onClick={() => onNavigate('schoolProject1Page')}
                    onMouseEnter={() => playHoverSound && playHoverSound()}
                >
                    <span className="project-title">Project1</span>
                    <img 
                        src = {sticky}
                        style={{ height: `${lineHeightPixels * 4}px` }}
                        alt="Sticky note"
                    />
                </button>
                <button
                    type="button"
                    className="project-link"
                    onClick={() => onNavigate('schoolProject2Page')}
                    onMouseEnter={() => playHoverSound && playHoverSound()}
                >
                    <span className="project-title">Project2</span>
                    <img 
                        src = {sticky}
                        style={{ height: `${lineHeightPixels * 4}px` }}
                        alt="Sticky note"
                    />
                </button>


            </div>

            <div className = "socials"> 

                <a href = "https://discord.com/users/390669234394365952"> 
                    <img
                        src={discordFrames[currentFrame % 2 === 0 ? 0 : 1]}
                        alt="Discord"
                        className="social"
                        style={{}}
                        onMouseEnter={() => playHoverSound && playHoverSound()}
                        data-tooltip-id="Discord"
                        data-tooltip-content="Friend me on Discord @linkinthesink"
                        
                    />
                    <Tooltip id="Discord" place="top"/>
                </a>

                <a href = "https://www.instagram.com/linkinthesink2005/">
                    <img
                        src={instaFrames[currentFrame % 2 === 0 ? 0 : 1]}
                        alt="Instagram"
                        className="social"
                        style={{marginLeft: '0.5rem' }}
                        onMouseEnter={() => playHoverSound && playHoverSound()}
                        data-tooltip-id="Instagram"
                        data-tooltip-content="Follow me on Instagram"
                    />
                    <Tooltip id="Instagram" place="top" />
                </a>

                <a href = "https://github.com/Linkinthesink">
                    <img
                        src={githubFrames[currentFrame % 2 === 0 ? 0 : 1]}
                        alt="GitHub"
                        className="social"
                        style={{marginLeft: '0.5rem' }}
                        onMouseEnter={() => playHoverSound && playHoverSound()}
                        data-tooltip-id="GitHub"
                        data-tooltip-content="View my GitHub"
                    />
                    <Tooltip id="GitHub" place="top" />
                </a>

                <a href = "mailto:linkinthesink2005@gmail.com">
                    <img
                        src={emailFrames[currentFrame % 2 === 0 ? 0 : 1]}
                        alt="Email"
                        className="social"
                        style={{ marginLeft: '0.5rem' }}
                        onMouseEnter={() => playHoverSound && playHoverSound()}
                        data-tooltip-id="Email"
                        data-tooltip-content="Email me"
                    />
                    <Tooltip id="Email" place="top" />
                </a>

            </div>
        </div>
    );
}

export default HomePage;