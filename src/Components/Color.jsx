import React, {useEffect, useState} from "react";
import {HexColorPicker} from "react-colorful";
import './color.css'
import {Link, useParams} from "react-router-dom";
import chroma from "chroma-js";

function App() {
    let {color} = useParams();

    const [currentColor, setCurrentColor] = useState("#" + color);

    useEffect(() => {
        let text = document.querySelector('.color__back')

        function colorBack() {
            const luminance = chroma(color).luminance()
            text.style.color = luminance > 0.5 ? 'black' : 'white'
        }

        colorBack()


    }, [])

    document.body.style.backgroundColor = currentColor

    return (
        <div className="color__wrap">
            <Link to="/" className="color__back">Back</Link>
            <HexColorPicker color={color} onChange={setCurrentColor}/>
            <div className="copy__wrap">
                <p>{currentColor}</p>
                <button title="COPY">
                    <svg onClick={() => {
                        navigator.clipboard.writeText(currentColor)
                    }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M17.391 3l2.609 2.808v7.736c0 4.106-6 2.456-6 2.456s1.518 6-2.638 6h-7.362v-16.192l2.666-2.808h-4.666v21h20v-21h-4.609zm2.609 19h-3.824c1.377-1.103 2.751-2.51 3.824-3.865v3.865zm-14.297-15h12.651l-3.312-3.569v-.41c.001-1.668-1.352-3.021-3.021-3.021-1.667 0-3.021 1.332-3.021 3l.001.431-3.298 3.569zm6.297-5c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1z"/>
                    </svg>
                </button>
            </div>
        </div>
    );



}

export default App;