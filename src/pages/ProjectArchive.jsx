import { useEffect, useRef, useState } from 'react';
import { Tooltip } from 'react-tooltip';

function ProjectArchive({ lineHeightPixels, currentFrame, audioRef, playHoverSound, muteState, marginSize }) {
    const mainRef = useRef(null);

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
            <div>
                <table style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Project 1</td>  
                            <td>This is a description of Project 1.</td>
                        </tr>
                        <tr>
                            <td>Project 2</td>    
                            <td>This is a description of Project 2.</td>
                        </tr>
                        <tr>
                            <td>Project 3</td>    
                            <td>This is a description of Project 3.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProjectArchive;