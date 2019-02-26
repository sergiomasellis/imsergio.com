import '../scss/main.scss';

import React, { Component } from 'react'
import ReactDOM from "react-dom";

import HeaderAnimation from "./HeaderAnimation";
import CursorAnimation from "./CursorAnimation";
// import Loading from "./LoadingIntro";
import HomeAnimation from "./HomeAnimation";
import LoaderAnimation from './LoaderAnimation';
import CanvasComponent from './CanvasComponent';


class SiteContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return  <div> 

            <CanvasComponent></CanvasComponent>

            
            <div id="logo" className="welcome not-loaded">
                <span className="welcome__firstName example-one">Hello</span>
                <span className="welcome__lastName">Im Sergio</span>
            </div>
            
            
            <div className="loader">
                <span className="loader__text">SM</span>
            </div>
            
            <div className="cursor">
            <div className="cursor__outer"></div>
            <div className="cursor__inner"></div>
            </div>
            
            <nav className="navigation">
            <ul>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#work">Contact</a></li>
            </ul>
            </nav>
        </div>;
    }
    
    componentDidMount() {

        const node = ReactDOM.findDOMNode(this);

        // define dom Elements
        this.state.canvas = node.getElementsByClassName('canvas')[0];

        this.state.context = this.state.canvas.getContext('2d');
        this.state.target = window;

        // // Mouse related properties
        this.state.mouse = {x: this.state.canvas.width/2, y: this.state.canvas.height/2};

        // // Don't Show Cursor
        this.state.showCursor = false;

        // // Init
        this.init();
        this.events();
    }

    init() {
        // Don't be rude say hi!
        console.log('Welcome to Imsergio.com');

        // Setup Canvas Default Size
        this.state.canvas.width = this.state.target.innerWidth;
        this.state.canvas.height = this.state.target.innerHeight;
        
        // Loader
        this.loaderAnimationClass = new LoaderAnimation();
        
        // Background
        // this.homeAnimationClass = new HomeAnimation();

        // Logo
        this.headerAnimationClass = new HeaderAnimation();

        // Cursor
        this.cursorAnimationClass = new CursorAnimation(this.state.canvas.width/2, this.state.canvas.height/2);

        // Update Main Scene
        this.update();
    }

    events() {
        this.state.target.addEventListener('resize', this.resizeCanvas.bind(this), false);
        this.state.target.addEventListener('mousemove', this.cursorMoved.bind(this), false);
        this.state.target.addEventListener('mouseout', this.cursorOut.bind(this), false);
    }

    resizeCanvas()  {
        this.state.canvas.width = this.state.target.innerWidth;
        this.state.canvas.height = this.state.target.innerHeight;
    }

    cursorMoved({clientX, clientY, target}) {

        // Set Mouse position on mouse move
        this.state.mouse.x = clientX;
        this.state.mouse.y = clientY;
        
        
        // Update to random color on mouse move
        // this.homeAnimationClass.update();

        
        // Look at dom ID attrib to see whos being hovered
        this.cursorAnimationClass.cursor.target = target.className;

        // Set new deg for title rotation on mouse move
        this.headerAnimationClass.update(this.state.mouse.x, this.state.mouse.y, this.state.canvas.width, this.state.canvas.height);
        this.cursorAnimationClass.update(this.state.mouse.x, this.state.mouse.y, this.state.canvas.width, this.state.canvas.height);
    }

    cursorOut() {
        this.headerAnimationClass.rotate(0, 0);
        this.cursorAnimationClass.cursor.target = 'NotOnScreen';
    }

    update() {
        
        // update loader position
        this.loaderAnimationClass.update(this.state.mouse.x, this.state.mouse.y);

        // Rotate Header based on deg from mouse move
        this.headerAnimationClass.update(this.state.mouse.x, this.state.mouse.y, this.state.canvas.width, this.state.canvas.height);

        // draw changes to BG
        // this.homeAnimationClass.draw(this.canvas, this.context);

        // Cursor animation raf
        this.cursorAnimationClass.update(this.state.mouse.x, this.state.mouse.y);
        
        this.state.target.requestAnimationFrame(this.update.bind(this));
    }
}

let App = document.getElementById("app");
ReactDOM.render(<SiteContainer />, App);