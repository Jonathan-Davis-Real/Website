import { useMemo, useRef } from 'react';

import me1 from '../assets/images/Me/Me1.png';
import me2 from '../assets/images/Me/Me2.png';

import gptBall1 from '../assets/images/About/GptBall1.jpg';
import gptBall2 from '../assets/images/About/GptBall2.jpg';
import eyeStaff1 from '../assets/images/About/EyeStaff1.jpg';
import eyeStaff2 from '../assets/images/About/EyeStaff2.jpg';
import homeTown from '../assets/images/About/HomeTown.jpg';
import china1 from '../assets/images/About/China1.jpg';
import hongKong1 from '../assets/images/About/HongKong.jpg';
import hongKong2 from '../assets/images/About/HongKong2.jpg';
import italy from '../assets/images/About/Italy.jpg';
import japan1 from '../assets/images/About/Japan1.jpg';
import japan2 from '../assets/images/About/Japan2.jpg';

import tape1 from '../assets/images/Tape/Tape1.png';
import tape2 from '../assets/images/Tape/Tape2.png';
import tape3 from '../assets/images/Tape/Tape3.png';
import tape4 from '../assets/images/Tape/Tape4.png';
import tape5 from '../assets/images/Tape/Tape5.png';
import tape6 from '../assets/images/Tape/Tape6.png';

const tapeFrames = [tape1, tape2, tape3, tape4, tape5, tape6];

function TapedPhoto({ src, alt }) {
    const tapePieces = useMemo(() => {
        const cornerPairs = [
            ['top-right', 'bottom-left'],
            ['top-left', 'bottom-right']
        ];
        const corners = cornerPairs[Math.floor(Math.random() * cornerPairs.length)];

        return corners.map((corner) => ({
            corner,
            tape: tapeFrames[Math.floor(Math.random() * tapeFrames.length)]
        }));
    }, []);

    return (
        <div className="about-photo">
            <img className="about-photo-image" src={src} alt={alt} />
            <div className="about-photo-caption">{alt}</div>
            {tapePieces.map(({ corner, tape }) => (
                <img
                    key={corner}
                    className={`photo-tape ${corner}`}
                    src={tape}
                    alt=""
                    aria-hidden="true"
                />
            ))}
        </div>
    );
}

function AboutMePage({ lineHeightPixels, currentFrame, playHoverSound, marginSize }) {
    const mainRef = useRef(null);
    const meFrames = [me1, me2];
    const pageWidth = window.innerWidth;

    return (
        <div
            className="page-home page-about"
            style={{
                lineHeight: `${lineHeightPixels}px`,
                width: `${pageWidth - marginSize - 1}px`,
                height: '100%',
                fontSize: `${lineHeightPixels}px`
            }}
            ref={mainRef}
        >
            <div>
                <p
                    style={{
                        lineHeight: `${2 * lineHeightPixels}px`,
                        fontSize: `${2 * lineHeightPixels}px`,
                        marginTop: '0px'
                    }}
                >
                    About Me
                </p>
                <section className="about-section">
                    <h2 className="about-section-title">Introduction</h2>
                    <p className="stack-regular">
                        Hello! I am Jonathan Davis (he/him)<br />
                        I am 21 Years old and am currently studying computer science at Oregon State University.
                    </p>
                </section>

                <section className="about-section">
                    <h2 className="about-section-title">Skills &amp; Projects</h2>
                    <p>
                        My main area of focus in regards to my own personal skills is in my gadgetry <br/>
                        i.e. the designing, building, and programming of electronic gadgets.<br/><br/>
                        Magic GPT Ball<br/>
                        This was a joke gift I made for a friend. Shake it and it gives a useful response from ChatGPT.
                    </p>
                    <div className="about-gallery">
                        <TapedPhoto src={gptBall1} alt="Magic GPT Ball" />
                        <TapedPhoto src={gptBall2} alt="Magic GPT Ball" />
                    </div>

                    <p>
                        Eyeball Staff<br/>
                        This is my most recent project. It is still a work in progress, but the idea is that the eye detects<br/>
                        nearby faces and follows them. (I chose 2 very orbical projects, I promise I make more than orbs)
                    </p>
                    <div className="about-gallery">
                        <TapedPhoto src={eyeStaff1} alt="Eyeball Staff" />
                        <TapedPhoto src={eyeStaff2} alt="Eyeball Staff" />
                    </div>
                </section>

                <section className="about-section">
                    <h2 className="about-section-title">Interests &amp; Travel</h2>
                    <p>
                        I love to travel and I have been lucky enough to visit some truly incredible places.<br/>
                    </p>
                    <div className="about-gallery">
                        <TapedPhoto src={homeTown} alt="My hometown" />
                        <TapedPhoto src={china1} alt="China" />
                        <TapedPhoto src={hongKong1} alt="Hong Kong" />
                        <TapedPhoto src={hongKong2} alt="Hong Kong" />
                        <TapedPhoto src={italy} alt="Italy" />
                        <TapedPhoto src={japan1} alt="Japan" />
                        <TapedPhoto src={japan2} alt="Japan" />
                    </div>
                </section>

            </div>
        </div>
    );
}

export default AboutMePage;
