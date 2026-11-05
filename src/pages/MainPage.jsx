import { useEffect, useMemo, useRef, useState } from 'react';

import paperImage1 from '../assets/images/Bkg/page1.jpg';
import paperImage2 from '../assets/images/Bkg/page2.jpg';
import paperImage3 from '../assets/images/Bkg/page3.jpg';
import paperImage4 from '../assets/images/Bkg/page4.jpg';
import paperImage5 from '../assets/images/Bkg/page5.jpg';
import paperImage6 from '../assets/images/Bkg/page6.jpg';
import paperImage7 from '../assets/images/Bkg/page7.jpg';
import paperImage8 from '../assets/images/Bkg/page8.jpg';

import volume1 from '../assets/images/Buttons/Volume/Volume1.png';
import volume2 from '../assets/images/Buttons/Volume/Volume2.png';
import volumeMute1 from '../assets/images/Buttons/Volume/VolumeMute1.png';
import volumeMute2 from '../assets/images/Buttons/Volume/VolumeMute2.png';

import dkMode1 from '../assets/images/Buttons/DarkMode/dkMode1.png'
import dkMode2 from '../assets/images/Buttons/DarkMode/dkMode2.png'

import me1 from '../assets/images/Me/Me1.png';
import me2 from '../assets/images/Me/Me2.png';

import home1 from '../assets/images/Nav/Home1.png';
import home2 from '../assets/images/Nav/Home2.png';

import paperSound1 from '../assets/sounds/paperSound/paperSound1.mp3';
import paperSound2 from '../assets/sounds/paperSound/paperSound2.mp3';
import paperSound3 from '../assets/sounds/paperSound/paperSound3.mp3';
import paperSound4 from '../assets/sounds/paperSound/paperSound4.mp3';
import paperSound5 from '../assets/sounds/paperSound/paperSound5.mp3';
import paperSound6 from '../assets/sounds/paperSound/paperSound6.mp3';
import paperSound7 from '../assets/sounds/paperSound/paperSound7.mp3';
import paperSound8 from '../assets/sounds/paperSound/paperSound8.mp3';
import paperSound9 from '../assets/sounds/paperSound/paperSound9.mp3';

import HomePage from './HomePage.jsx';
import AboutMePage from './AboutMePage.jsx';
import CurrentProjects from './CurrentProjects.jsx';
import SnakePage from './games/snake.jsx';

import { Tooltip } from 'react-tooltip';

//make a functoin to return the current frame of boil animatoin to avoid repeted code

function MainPage() {
    const mainRef = useRef(null);
    const [childCount, setChildCount] = useState(0);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [muteState, setMuteState] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [sfxCooldown, setSfxCooldown] = useState(0);
    const sfxCooldownRef = useRef(0);
    const frameHandleRef = useRef(null);

    const lineCount = Math.max(0, childCount - 1);

    const [currentPage, setCurrentPage] = useState("homePage");

    const backgroundFrames = useMemo(
        () => [paperImage1, paperImage2, paperImage3, paperImage4, paperImage5, paperImage6, paperImage7, paperImage8],
        []
    );

    const volumeFrames = useMemo(() => [volume1, volume2], []);
    const muteFrames = useMemo(() => [volumeMute1, volumeMute2], []);
    
    const darkFrames = useMemo(() => [dkMode1, dkMode2], []);
    const meFrames = [me1, me2];
    const homeFrames = [home1, home2];

    const paperSounds = useMemo (
        () => [paperSound1, paperSound2, paperSound3, paperSound4, paperSound5, paperSound6, paperSound7, paperSound8, paperSound9],
        []
    );

    const pageHeight = window.innerHeight;
    const pageWidth = window.innerWidth;

    const marginSize = ((pageHeight + pageWidth) / 2) * 0.07;

    const lineHeightPercent = lineCount > 0 ? `${100 / lineCount}%` : '0%';
    const lineHeightPixels = document.querySelector('.blue-line')?.getBoundingClientRect().height;

    const lineHeight = (100 - (marginSize / pageHeight) * 100);

    const audioRef = useRef(null);

    const toggleMute = () => {
        setMuteState((prev) => !prev);
        if (audioRef.current) {
            audioRef.current.muted = !muteState;
        }
    }

    const toggleDark = () => {
        setIsDarkMode(!isDarkMode);
    };

    const playHoverSound = () => {
        console.log(sfxCooldownRef.current)
        if (!audioRef.current || muteState || sfxCooldownRef.current > 0) return;

        const idx = Math.floor(Math.random() * paperSounds.length);
        audioRef.current.src = paperSounds[idx];
        console.log(idx);
        try {
            audioRef.current.load();
        } catch (e) {}

        setSfxCooldown(2);
        sfxCooldownRef.current = 2;
        audioRef.current.currentTime = 0;
        audioRef.current.volume = 0.25;
        audioRef.current.play().catch(() => {});
    }


    useEffect(() => {
        const updateChildCount = () => {
            const main = mainRef.current;
            if (!main) return;

            const { width, height } = main.getBoundingClientRect();
            const rowSize = 28;
            const rows = Math.max(1, Math.floor(height / rowSize));
            setChildCount(rows);
        };

        const frameInterval = window.setInterval(() => {
            setCurrentFrame((prevFrame) => (prevFrame + 1) % backgroundFrames.length);

            if (sfxCooldownRef.current > 0) {
                sfxCooldownRef.current -= 1;
                setSfxCooldown(sfxCooldownRef.current);
            }
        }, 300);

        const root = document.documentElement;
        if (isDarkMode) {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.setAttribute('data-theme', 'light');
        }

        updateChildCount();

        const main = mainRef.current;
        if (!main) return;

        let observer;

        if (typeof ResizeObserver !== 'undefined') {
            observer = new ResizeObserver(updateChildCount);
            observer.observe(main);
        } else {
            window.addEventListener('resize', updateChildCount);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            } else {
                window.removeEventListener('resize', updateChildCount);
            }
            window.clearInterval(frameInterval);
        };
    }, [backgroundFrames, isDarkMode]);

    return (
        <>
            <div className={`page ${isDarkMode ? 'theme-dark' : 'theme-light'}`}>
                <img className="background-image" src={backgroundFrames[currentFrame]} alt="Background" />
                <audio ref={audioRef} muted={muteState} />
                <div className="page-top" style={{ height: marginSize }}>
                    <div className="page-nav-box" style={{ height: marginSize, width: (2* marginSize)}}>
                        <button
                            className="button"
                            onClick={() => setCurrentPage("homePage")}
                            onMouseEnter={playHoverSound}
                            data-tooltip-id="homePage"
                            data-tooltip-content="Home Page"
                        >
                            <img
                                src={homeFrames[currentFrame % 2 === 0 ? 0 : 1]}
                                alt="Home Page"
                                style={{ height: '60%', width: '60%'}}
                            />
                        </button>
                        <Tooltip className="tooltip" id="homePage" place="bottom" />

                        <button
                            className="button"
                            onClick={() => setCurrentPage("aboutMePage")}
                            onMouseEnter={playHoverSound}
                            data-tooltip-id="aboutMePage"
                            data-tooltip-content="About Me"
                        >
                            <img
                                src={meFrames[currentFrame % 2 === 0 ? 0 : 1]}
                                alt="About Me"
                                style={{ height: '60%', width: '60%'}}
                            />
                        </button>
                        <Tooltip className="tooltip" id="aboutMePage" place="bottom" />

                    </div>
                    <div className="settings-box" style={{ height: marginSize, width: (2* marginSize)}}>
                         
                        <button
                            id="theme-toggle"
                            className="button"
                            onClick={toggleDark}
                            onMouseEnter={playHoverSound}
                            data-tooltip-id="theme-toggle"
                            data-tooltip-content={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        >
                            <img
                                src={darkFrames[(currentFrame % 2)]}
                                alt="Theme Toggle"
                                style={{ height: '60%', width: '60%'}}
                            />
                        </button>
                        <Tooltip className="tooltip" id="theme-toggle" place="bottom" />
                        <button
                            className="button"
                            onClick={toggleMute}
                            onMouseEnter={playHoverSound}
                            data-tooltip-id="volume-toggle"
                            data-tooltip-content={muteState ? "Unmute" : "Mute"}
                        >
                            <img
                                src={muteState ? muteFrames[(currentFrame % 2)] : volumeFrames[(currentFrame % 2)]}
                                alt="Volume"
                                style={{ height: '60%', width: '60%'}}
                            />
                        </button>
                        <Tooltip className="tooltip" id="volume-toggle" place="bottom" 
                        
                        />

                    </div>
                </div>
                <div className="page-side" style={{width: marginSize}}>
                    <div className="dotbox">
                        <div className="top-dot">&#9679;</div>
                        <div className="middle-dot">&#9679; </div>
                        <div className="bottom-dot">&#9679;</div>
                    </div>
                </div>
                <div className="page-lines" ref={mainRef} style={{ height: lineHeight + '%'}}>
                    {Array.from({ length: lineCount }).map((_, index) => (
                        <div
                            key={index}
                            className="blue-line"
                            style={{ height: lineHeightPercent }}
                        />
                    ))}
                </div>
                    <div
                        className="page-content"
                        style={{
                            top: `${marginSize}px`,
                            left: `${marginSize}px`,
                            right: 0,
                            bottom: 0,
                            width: `${pageWidth - marginSize - 1}px`,
                            height: 'auto',
                            boxSizing: 'border-box'
                        }}
                    >       
                    {(() => {
                        switch (currentPage) {
                        case 'homePage':
                            return (
                            <HomePage
                                lineHeightPixels={lineHeightPixels}
                                currentFrame={currentFrame}
                                audioRef={audioRef}
                                playHoverSound={playHoverSound}
                                muteState={muteState}
                                marginSize={marginSize}
                            />
                            );
                        case 'aboutMePage':
                            return (
                            <AboutMePage
                                lineHeightPixels={lineHeightPixels}
                                currentFrame={currentFrame}
                                playHoverSound={playHoverSound}
                                marginSize={marginSize}
                            />
                            );
                        case 'projectsArchivePage':
                            return (
                            <CurrentProjects
                                lineHeightPixels={lineHeightPixels}
                                currentFrame={currentFrame}
                                audioRef={audioRef}
                                playHoverSound={playHoverSound}
                                muteState={muteState}
                                marginSize={marginSize}
                            />
                            );
                        case 'snakePage':
                            return (
                            <SnakePage
                                lineHeightPixels={lineHeightPixels}
                                currentFrame={currentFrame}
                                audioRef={audioRef}
                                playHoverSound={playHoverSound}
                                muteState={muteState}
                                marginSize={marginSize}
                            />
                            );
                        default:
                            return null;
                        }
                    })()}
                </div>
            </div>
        </>
    );
}

export default MainPage;



/*
                        <button
                            className="button"
                            onClick={() => setCurrentPage("projectsArchivePage")}
                            onMouseEnter={playHoverSound}
                            data-tooltip-id="projectsArchivePage"
                            data-tooltip-content="Projects Archive"
                        >
                            <img
                                src={backgroundFrames[currentFrame % 2 === 0 ? 0 : 1]}
                                alt="Projects Archive"
                                style={{ height: '60%', width: '60%'}}
                            />
                        </button>
                        <Tooltip className="tooltip" id="projectsArchivePage" place="bottom" />
                        <button
                            className="button"
                            onClick={() => setCurrentPage("snakePage")}
                            onMouseEnter={playHoverSound}
                            data-tooltip-id="snakePage"
                            data-tooltip-content="Snake"
                        >
                            <img
                                src={backgroundFrames[currentFrame % 2 === 0 ? 0 : 1]}
                                alt="Snake"
                                style={{ height: '60%', width: '60%'}}
                            />
                        </button>
                        <Tooltip className="tooltip" id="snakePage" place="bottom" />
                    </div>
                    <div className="settings-box" style={{ height: marginSize, width: (2* marginSize)}}>
                        <button
                            className="button"
                            onClick={() => setCurrentPage("projectsArchivePage")}
                            onMouseEnter={playHoverSound}
                            data-tooltip-id="projectsArchivePage"
                            data-tooltip-content="Projects Archive"
                        >
                            <img
                                src={backgroundFrames[currentFrame % 2 === 0 ? 0 : 1]}
                                alt="Projects Archive"
                                style={{ height: '60%', width: '60%'}}
                            />
                        </button>
                        <Tooltip className="tooltip" id="projectsArchivePage" place="bottom" />


*/