import React from 'react'
import { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'

export default function Navbar() {
    useEffect(() => {
        let sidenav = document.querySelector("#slide-out");
        M.Sidenav.init(sidenav, {
            inDuration: 350,
            outDuration: 350,
            edge: 'left' //or right
        });
    },        // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
        // var collapsibleElem = document.querySelector('.collapsible');
        // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);
        []);

    return (
        <>
            <nav>
                <div className="nav-wrapper blue">
                    <a href="/" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
                    <div className="container">

                        <a href="#" className="brand-logo left">Logo</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="sass.html">EduSpace</a></li>
                            <li><a href="badges.html">About</a></li>
                            <li><a href="collapsible.html">Contact</a></li>
                        </ul>
                    </div>


                </div>
            </nav>


            <ul id="slide-out" className="sidenav">
                <li><div className="user-view">
                    <div className="background">
                        <img src="images/office.jpg" />
                    </div>
                    <a href="#user"><img className="circle" src="images/yuna.jpg" /></a>
                    <a href="#name"><span className="white-text name">John Doe</span></a>
                    <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                </div></li>
                <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                <li><a href="#!">Second Link</a></li>
                <li><div className="divider"></div></li>
                <li><a className="subheader">Subheader</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>

            </ul>

        </>
    )
}
