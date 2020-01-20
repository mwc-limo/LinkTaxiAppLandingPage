import React from 'react';
import apple from './apple-en.png'
import google from './google-en.png'
import linktaxi from './linktaxi.png'
import './App.css'
import 'tachyons';

const App = () => {

    function getMobileOperatingSystem() {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/android/i.test(userAgent)) {
            window.open(
                "https://play.google.com/store/apps/details?id=com.tiskel.tma.wroclawlinktaxi", "_self")


        }

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            window.open(
                "https://apps.apple.com/us/app/link-taxi/id1445721945", "_self");
        }

    }

    getMobileOperatingSystem();

    return (
        <div className='background bg-light-blue pa3'>

            <article className="br3 ba bg-near-white b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">

                <div className='pa3 center container'>
                    <img className='pa1' src={linktaxi} alt="linktaxi"/>

                    <a href="https://apps.apple.com/us/app/link-taxi/id1445721945">
                        <img className='pa1' src={apple} alt="apple"/>
                    </a>

                    <a href="https://play.google.com/store/apps/details?id=com.tiskel.tma.wroclawlinktaxi">
                        <img className='pa1' src={google} alt="google-play"
                        />
                    </a>
                </div>

            </article>

        </div>
    );
};

export default App;

