import React, {useState, useEffect} from 'react';
import './App.css';
import Col from "./Components/Col";


function App() {
    const [animated, Setanimated] = useState(false)



    function GetColor(color : string, bool: boolean){
        const poup__wrap : any = document.querySelector('.poup__wrap')
        const popup__text : any = poup__wrap.querySelector('span')


        if (bool == false) {
            poup__wrap.style.opacity = '0'
            poup__wrap.style.visibility = 'hidden'
            poup__wrap.style.transform = 'scale(1)'
        } else if (bool == true) {
            let items = ['😀', '😎',  '🥰', '😏', '😁','😉','☺','🤗','🙃']

            var item = items[Math.floor(Math.random()*items.length)];
            Setanimated(true)
            poup__wrap.style.opacity = '1'
            poup__wrap.style.visibility = 'visible'
            poup__wrap.style.transform = 'scale(2)'
            poup__wrap.style.backgroundColor = color
            popup__text.textContent = color + item
        }
    }
    return (
        <div className='App'>
            <div className="poup__wrap">
                <h1>Copyed <span>#0000</span>😀</h1>
            </div>
            <center>
                <h2 className='warringtouser'>To refresh a colors click space</h2>
            </center>
            <div className="wrapper">
                <Col  GetColor={GetColor} anime={animated}/>
                <Col  GetColor={GetColor} anime={animated}/>
                <Col  GetColor={GetColor} anime={animated}/>
                <Col  GetColor={GetColor} anime={animated}/>
                <Col  GetColor={GetColor} anime={animated}/>
            </div>
        </div>
    );
}

export default App;
