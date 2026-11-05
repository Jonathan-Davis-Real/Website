import { useRef } from 'react';
import { Tooltip } from 'react-tooltip';

function snakePage({ lineHeightPixels, currentFrame, playHoverSound, marginSize }) {

    const mainRef = useRef(null);

    function snakeGame() {
        let row = 16;
        let col = 16

        let snakeHead = { x: 0, y: 0 };
        let snakeBody = [{ x: 0, y: 0 }];

        let snakeLength = 0;

        let direction = 'right';

        function moveSnake() {
            snakeHead.x += 1;
            snakeBody.push({ x: snakeHead.x, y: snakeHead.y });
            if (snakeBody.length > snakeLength) {
                snakeBody.shift();
            }
        }

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                console.log(i, j);
            }
        }

    }
    
    return (
        <div className="page-snake" style={
            {
            lineHeight: `${lineHeightPixels}px`, 
            width: `${window.innerWidth - marginSize - 1}px`,
            height: '100%', 
            fontSize: `${lineHeightPixels}px`
            }
        } ref={mainRef}>
            <p> test </p>
            <table style={{ width: '6.25%', height: '25%' }}>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid black' }}>Snake</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default snakePage;
