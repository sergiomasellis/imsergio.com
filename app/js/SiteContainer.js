import '../scss/main.scss';

import React, { Component } from 'react'
import ReactDOM from "react-dom";

import HomeComponent from "./HomeComponent";
import CursorAnimation from "./CursorAnimation";
// import Loading from "./LoadingIntro";
// import BackgroundComponent from "./BackgroundComponent";
import LoaderComponent from './LoaderComponent';
import CanvasComponent from './CanvasComponent';
import NavigationComponent from './NavigationComponent';


class SiteContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'home',
            mouse: {
                x: 0,
                y: 0
            },
            loaded: false
        };

        this.navigateToPage = this.navigateToPage.bind(this);
        this.siteLoaded = this.siteLoaded.bind(this);
    }

    render() {
        return  (
        <div> 

            <CanvasComponent></CanvasComponent>

            <HomeComponent 
                loaded={this.state.loaded && this.state.currentPage === 'home'} 
                onSetUpdate={home => this.updateHomeComponent = home}
            ></HomeComponent>

            <LoaderComponent 
                onLoaded={this.siteLoaded} 
                onSetUpdate={loader => this.updateLoaderComponent = loader}
            ></LoaderComponent>


            <NavigationComponent onPageChange={this.navigateToPage}></NavigationComponent>


            {/* <BackgroundComponent currentPage={this.state.currentPage}></BackgroundComponent> */}
            {/* { this.state.currentPage === 'home' ? (<h1>Resume</h1>):('')} */}
            
            

            
            <div className="cursor">
                <div className="cursor__outer"></div>
                <div className="cursor__inner"></div>
            </div>

            
            
        </div>);
    }

    navigateToPage(page){
        console.log('outside', page);
        this.setState({currentPage: page});
    }

    siteLoaded() {
        this.setState({loaded: true});
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
        console.log('%c Welcome to ImSergio.com. You found my secret console try not to break anything! ', 'background: #222; color: #0ce9c1;');

        // Setup Canvas Default Size
        this.state.canvas.width = this.state.target.innerWidth;
        this.state.canvas.height = this.state.target.innerHeight;
        
        // Loader
        // this.loaderAnimationClass = new LoaderAnimation();
        
        // Background
        // this.homeAnimationClass = new HomeAnimation();

        // Logo
        // this.headerAnimationClass = new HeaderAnimation();

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
        this.setState({
            canvas: {
                width: this.state.target.innerWidth,
                height: this.state.target.innerHeight
            }
        })
        // this.state.canvas.width = this.state.target.innerWidth;
        // this.state.canvas.height = this.state.target.innerHeight;
    }

    cursorMoved({clientX, clientY, target}) {

        // Set Mouse position on mouse move
        this.state.mouse.x = clientX;
        this.state.mouse.y = clientY;

        // this.setState({
        //     mouse: {
        //         x: clientX,
        //         y: clientY
        //     }
        // })
        
        
        // Update to random color on mouse move
        // this.homeAnimationClass.update();
        // this.updateHomePage(this.state.mouse.x, this.state.mouse.y, this.state.canvas.width, this.state.canvas.height);

        
        // Look at dom ID attrib to see whos being hovered
        this.cursorAnimationClass.cursor.target = target.className;

        // Set new deg for title rotation on mouse move
        // this.headerAnimationClass.update(this.state.mouse.x, this.state.mouse.y, this.state.canvas.width, this.state.canvas.height);
        this.cursorAnimationClass.update(this.state.mouse.x, this.state.mouse.y, this.state.canvas.width, this.state.canvas.height);
    }

    cursorOut() {
        // this.headerAnimationClass.update(0, 0);
        this.cursorAnimationClass.cursor.target = 'NotOnScreen';
    }

    update() {
        
        // update loader position
        // this.loaderAnimationClass.update(this.state.mouse.x, this.state.mouse.y);

        this.updateLoaderComponent();

        // Rotate Header based on deg from mouse move
        // this.headerAnimationClass.update(this.state.mouse.x, this.state.mouse.y, this.state.canvas.width, this.state.canvas.height);

        // draw changes to BG
        // this.homeAnimationClass.draw(this.canvas, this.context);
        this.updateHomeComponent(this.state.mouse.x, this.state.mouse.y, this.state.canvas.width, this.state.canvas.height);

        // Cursor animation raf
        this.cursorAnimationClass.update(this.state.mouse.x, this.state.mouse.y);
        
        this.state.target.requestAnimationFrame(this.update.bind(this));
    }
}

let App = document.getElementById("app");
ReactDOM.render(<SiteContainer />, App);