import React, {useEffect, useState} from "react";
import chroma from "chroma-js"

function App(props ) {


    useEffect(() => {
        const cols = document.querySelectorAll('.col')

        document.addEventListener('keydown', (event) => {
            if (event.code.toLowerCase() === 'space') {
                setRandomColors()
            }
        })


        function setRandomColors() {
            cols.forEach((col) => {
                const text = col.querySelector('h2')

                const hexCodes = '123465789ABCDEF';
                let generratedColor = ''
                for (let i = 0; i < 6; i++) {
                    generratedColor += hexCodes[Math.floor(Math.random() * hexCodes.length)]
                }


                let color = '#' + generratedColor

                col.addEventListener('click', (whichcol) => {
                    let currentcol = whichcol.path[1]
                    navigator.clipboard.writeText(color)
                    props.GetColor(text.textContent, true)
                    setTimeout(()=> {
                        props.GetColor(text.textContent, false)
                    }, 1000)
                    // Setanimated(true)

                })



                text.textContent = color

                col.style.backgroundColor = color

                const luminance = chroma(color).luminance()
                text.style.color = luminance > 0.5 ? 'black' : 'white'


            })
        }


        setRandomColors()

    }, [])





    return (
        <div className="col">
            <h2 className="copy">text</h2>
            <button data-type="lock">
                <svg width="24" height="24" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round"
                     strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m4.481 15.659c-1.334 3.916-1.48 4.232-1.48 4.587 0 .528.46.749.749.749.352 0 .668-.137 4.574-1.492zm1.06-1.061 3.846 3.846 11.321-11.311c.195-.195.293-.45.293-.707 0-.255-.098-.51-.293-.706-.692-.691-1.742-1.74-2.435-2.432-.195-.195-.451-.293-.707-.293-.254 0-.51.098-.706.293z"
                        fillRule="nonzero"/>
                </svg>
            </button>
        </div>
    );
}

export default App;