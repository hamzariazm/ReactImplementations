import { useState, useRef } from "react";

const UseRefExample = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const ref = useRef(null);

    const handleClick = () => {
        const nextIsPlaying = !isPlaying;
        setIsPlaying(nextIsPlaying);

        if (nextIsPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }

    return(
        <div>
            <button onClick={handleClick}>
                {isPlaying ? 'Pause': 'Play'}
            </button>
            <br />
            <video ref={ref} width="250">
            <source
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                type="video/mp4"
            />
            </video>
        </div>
    )
}

export default UseRefExample;