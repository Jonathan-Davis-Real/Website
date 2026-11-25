import proj1 from '../assets/images/Projects/Culture Jam - Jonathan Davis.jpg'

function SchoolProject1({ lineHeightPixels, marginSize }) {
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
        >
            <div>
                <p
                    style={{
                        lineHeight: `${2 * lineHeightPixels}px`,
                        fontSize: `${2 * lineHeightPixels}px`,
                        marginTop: '0px'
                    }}
                >
                    Project 1 - Culture Jam
                </p>

                <div className="school-project-layout">
                    <img
                        src={proj1}
                        alt="Culture Jam project artwork"
                        style={{ height: `${lineHeightPixels * 24}px` }}
                    />

                    <section className="about-section">
                        <h2 className="about-section-title">Statement:</h2>
                        <p>This project is a commentary of the restrictive business practices of credit card companies such as Master Card. Mastercard has pressured online retailers including Steam, Itch.io, and Patreon to limit or ban the adult content that is allowed on their platforms. Credit cards are the primary way that a majority of these platform’s users pay for their services. As such the Credit card companies have a lot of influence over the policies of these platforms. I believe this is a massive overstep of what a payment provider like Mastercard should be doing. This piece reflects (literally) the ways that Mastercard has decided user spending without them even knowing in some cases.</p>
                    </section>
                </div>

            </div>
        </div>
    );
}

export default SchoolProject1;