import React from 'react';
import ReactDOM from 'react-dom';

import './styles/style.css';
import {NavPhrases} from './modules/Phrases';

import logotype from "./img/gavag_logo.png";
import mobNavSVG from "./img/menu-fa.svg";

import HomePage from "./modules/pages/Home";
import LogPage from "./modules/pages/Log";

import fbLogo from "./img/brands/facebook.svg";
import instaLogo from "./img/brands/instagram.png";

let language = 0;

let routing = 0;

export function getLanguage() {
    return language;
}

/* =-=-=-=-=-=-= LOGIN =-=-=-=-=-=-= */
let loggedIn = localStorage.getItem("loggedIn");
console.log(localStorage.getItem("loggedInfsighsi"));

if (loggedIn === null) {
    let username = window.prompt("Username:", "")
    let password = window.prompt("Password:", "")

    if(username+password !== "adminadmin") {
        window.location.reload();
        alert("Invalid username or password.");
    }
    else {
        loggedIn = 1;
        localStorage.setItem("loggedIn", 1);

    }
}
else loggedIn = 1;
/* =-=-=-=-=-=-= LOGIN =-=-=-=-=-=-= */

function NavSection() {
    return (
        <nav className='pNav'>
            <div className='pNav--Wrapper'>
                <div className='gavagLogo'>
                    <img draggable="false" className='gavagLogo--img' src={logotype} width="150px" alt="Gavag"></img>
                </div>
                <div className='pNavBar'>
                    <ul className='pNav--List'>
                        <li className='pNav--Listitem pNav--ListitemID--1' onClick={() => switchPage(0)}>{NavPhrases.phrase_home[getLanguage()]}</li>
                        <li className='pNav--Listitem pNav--ListitemID--2' onClick={() => switchPage(1)}>{NavPhrases.phrase_log[getLanguage()]}</li>
                        <li className='pNav--Listitem pNav--ListitemID--3' onClick={switchLanguage}>{NavPhrases.lang_flag[getLanguage()]}</li>
                    </ul>
                </div>
                <div className="mobileNav-Button" onClick={toggleMobileNav}>
                    <img draggable="false" src={mobNavSVG} alt="mobNav"></img>
                </div>
            </div>
        </nav>
    );
}

function MobileNavPanel() {
    return (
        <div className='mobileNav'>
            <ul className='mobileNavBar' id='mobileNavBar'>
                <div className='mobileNav--List'>
                    <li className='mobileNav--Listitem mobileNav--ListitemID--1' onClick={() => switchPage(0)}>
                        {NavPhrases.phrase_home[getLanguage()]}
                    </li>
                    <li className='mobileNav--Listitem mobileNav--ListitemID--2' onClick={() => switchPage(1)}>
                        {NavPhrases.phrase_log[getLanguage()]}
                    </li>
                    <li className='mobileNav--Listitem mobileNav--ListitemID--3' onClick={switchLanguage}>
                        <center>{NavPhrases.lang_flag[getLanguage()]}</center>
                    </li>
                </div>    
            </ul>
        </div>
    )
}

function FooterSection() {
    return (
        <footer className="footer--Wrapper">
            <div className="footer--Contacts">
                <h1 className="footer--Copyright">
                    Gavag Lab. © 2021-2022
                </h1>
                <h1 className="footer--Sponsor">
                    Sponsored by <a href='https://armath.am/' target='_blank' rel='noreferrer'>Armath</a>
                </h1>
            </div>
            <div className="footer--socialMedia">
                <h1 className="footer--Copyright">Social Media:</h1>
                <ul className='socialMedia--icons'>
                    <li><a href='https://www.facebook.com/groups/gavag.lab' target='_blank' rel='noreferrer'><img draggable="false" src={fbLogo} alt="Facebook" width="24px" className='socialMedia--icon facebook'></img></a></li>
                    <li><a href='https://www.instagram.com/armath.lab.avag__in_gavar/' target='_blank' rel='noreferrer'><img draggable="false" src={instaLogo} alt="Instagram" width="24px" className='socialMedia--icon instagram'></img></a></li>
                </ul>
            </div>
        </footer>
    )
}

function toggleMobileNav() {
    if (document.getElementById("mobileNavBar").style.display === "flex") {
        document.getElementById("mobileNavBar").style.setProperty("display", "none");
    }
    else {
        document.getElementById("mobileNavBar").style.setProperty("display", "flex");
    }
}

function switchLanguage() {
    if(language === 2) language = 0;
    else language += 1;
    ReactDOM.render(
        <React.StrictMode>    
            <LoadPage />
        </React.StrictMode>,
        document.getElementById('page')
    );
    if(routing === 0) {
        ReactDOM.render(
            <React.StrictMode>    
                <HomePage />
            </React.StrictMode>,
            document.getElementById('pgContent')
        );
    }
    else {
        ReactDOM.render(
            <React.StrictMode>    
                <LogPage />
            </React.StrictMode>,
            document.getElementById('pgContent')
        );
    }
}

function switchPage(routeID) {
    if (routeID === 0) {
        ReactDOM.render(<React.StrictMode><HomePage /></React.StrictMode>, document.getElementById('pgContent'));
        routing = 0;
    }
    else if (routeID === 1) {
        ReactDOM.render(<React.StrictMode><LogPage /></React.StrictMode>, document.getElementById('pgContent'));
        routing = 1;
    }
}

function LoadPage() {
    if(loggedIn === 1) return (
        <div className='pWrapper'>
            <NavSection />
            <MobileNavPanel />
            <div className='pContent' id='pgContent'>
                <HomePage />
            </div>
            <FooterSection />
        </div>
    );
}

export default LoadPage;