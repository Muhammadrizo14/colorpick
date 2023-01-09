import React, {useEffect, useState} from "react";
import Col from "./Col";

function App() {
    const [animated, Setanimated] = useState(false)


    function GetColor(color: string, bool: boolean) {
        const poup__wrap: any = document.querySelector('.poup__wrap')
        const popup__text: any = poup__wrap.querySelector('span')
        const popup__title: any = poup__wrap.querySelector('h1')
        let items = ['😀', '😎', '🥰', '😏', '😉', '☺', '🤗', '🙃']

        let words = ['Good job!', 'Well done!', 'RIGHT ONE!', 'Got it!', 'bright!', 'cheerful', 'confident']


        if (bool == false) {
            poup__wrap.style.opacity = '0'
            poup__wrap.style.visibility = 'hidden'
            poup__wrap.style.transform = 'scale(1)'
        } else if (bool == true) {

            var item = items[Math.floor(Math.random() * items.length)];
            var word = words[Math.floor(Math.random() * items.length)];
            Setanimated(true)
            poup__wrap.style.opacity = '1'
            poup__wrap.style.visibility = 'visible'
            poup__wrap.style.transform = 'scale(2)'
            poup__wrap.style.backgroundColor = color
            popup__text.textContent = color + item
            popup__title.textContent = word
        }
    }


    return (
        <div className="App">
            <div className="poup__wrap">
                <h1>Good job!</h1>
                <h2>Copied <span>#0000</span></h2>
            </div>
            <center>
                <h2 className='warringtouser'>To update the colors press the space bar</h2>
            </center>
            <div className="wrapper">
                <Col GetColor={GetColor} anime={animated}/>
                <Col GetColor={GetColor} anime={animated}/>
                <Col GetColor={GetColor} anime={animated}/>
                <Col GetColor={GetColor} anime={animated}/>
                <Col GetColor={GetColor} anime={animated}/>
            </div>
        </div>
    );
}

export default App;