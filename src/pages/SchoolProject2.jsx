function SchoolProject2({ lineHeightPixels, marginSize }) {
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
                    Project 2 - Video Remix
                </p>

                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/WWPIWxjGqtY?si=MuEpDemHLwX3jEJI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                <div className="school-project-layout">


                    <section className="about-section">
                        <h2 className="about-section-title">Statement:</h2>
                        <p>This video is a remix in the style of a YTP (look it up). The goal of this remix is to take two unrelated videos (House on haunted hill, and The Addams family) and combine them into one somewhat cohesive whole. In doing so I also wanted to add comedic elements though the use of editing to create a sort of surreal recontextualizing of the original story.</p>
                    </section>
                </div>

            </div>
        </div>
    );
}

export default SchoolProject2;
