import '../scss/main.scss';

import React, { Component } from 'react'
import ReactDOM from "react-dom";

import HomeComponent from "./HomeComponent";
import CursorAnimation from "./CursorAnimation";
import LoaderComponent from './LoaderComponent';
import CanvasComponent from './CanvasComponent';
import NavigationComponent from './NavigationComponent';
import ResumeComponent from './ResumeComponent';
import SocialComponent from './SocialComponent';


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

        this.canvasRef = React.createRef()
        this.homeRef = React.createRef()
    }

    render() {
        return  (
        <div> 

            <div className="container">
            
                <CanvasComponent 
                    loaded={this.state.loaded}
                    canvasRef={this.canvasRef}
                 ></CanvasComponent>

                <HomeComponent 
                    loaded={this.state.loaded && this.state.currentPage === 'home'} 
                    onSetUpdate={home => this.updateHomeComponent = home}
                    homeRef={this.homeRef}
                ></HomeComponent>

                <ResumeComponent
                    loaded={this.state.loaded && this.state.currentPage === 'resume'} 
                    onSetUpdate={resume => this.updateResumeComponent = resume}
                ></ResumeComponent>

                <SocialComponent></SocialComponent>

                <LoaderComponent 
                    onLoaded={this.siteLoaded} 
                    onSetUpdate={loader => this.updateLoaderComponent = loader}
                ></LoaderComponent>

            </div>

            <NavigationComponent onPageChange={this.navigateToPage}></NavigationComponent>

            <div className="cursor">
                <div className="cursor__outer"></div>
                <div className="cursor__inner"></div>
            </div>

        </div>);
    }

    navigateToPage(page){
        this.setState({currentPage: page});
    }

    siteLoaded() {
        this.setState({loaded: true});
    }
    
    componentDidMount() {
        try {
            window.VANTA.NET({
                el: this.canvasRef.current,
                backgroundColor:0x1c0034,
                color: 0x0ce9c1,
                points: 18.00,
                maxDistance: 12.00,
                spacing: 11.00
            }) 
        } catch (error) {
            console.error(error);
        }


        const node = ReactDOM.findDOMNode(this);

        // define dom Elements
        this.state.canvas = node.getElementsByClassName('vanta-canvas')[0];

        this.state.context = this.state.canvas.getContext('2d');
        this.state.target = window;

        // // Mouse related properties
        this.state.mouse = {x: this.state.canvas.width/2, y: this.state.canvas.height/2};

        // // Don't Show Cursor
        this.state.showCursor = false;


        // Init
        this.init();
        this.events();
    }

    componentWillUnmount() {
        this.stopEvents();
    }

    init() {
        // Don't be rude say hi!
        console.log('%c Welcome to ImSergio.com. You found my secret console try not to break anything! ', 'background: #222; color: #0ce9c1;');

        // Setup Canvas Default Size
        this.state.canvas.width = this.state.target.innerWidth;
        this.state.canvas.height = this.state.target.innerHeight;

        // Cursor
        this.cursorAnimationClass = new CursorAnimation(this.state.canvas.width/2, this.state.canvas.height/2);

        // Update Main Scene
        this.update();
    }

    events() {
        if(this.isMobile()) {
            this.state.target.addEventListener('deviceorientation', this.deviceRotated.bind(this), false);
        } else {
            this.state.target.addEventListener('resize', this.resizeCanvas.bind(this), false);
            this.state.target.addEventListener('mousemove', this.cursorMoved.bind(this), false);
            this.state.target.addEventListener('mouseout', this.cursorOut.bind(this), false);
        }
    }

    isMobile() {
        return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
                || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) ? true : false;
    }

    stopEvents() {
        this.state.target.removeEventListener('resize', null);
        this.state.target.removeEventListener('mousemove', null);
        this.state.target.removeEventListener('mouseout', null);
    }

    resizeCanvas()  {
        this.setState({
            canvas: {
                width: this.state.target.innerWidth,
                height: this.state.target.innerHeight
            }
        })
    }

    deviceRotated(event) {

        var maxX = this.state.canvas.clientWidth  - this.homeRef.current.clientWidth;
        var maxY = this.state.canvas.clientHeight - this.homeRef.current.clientHeight;

        var x = event.beta;  // In degree in the range [-180,180]
        var y = event.gamma; // In degree in the range [-90,90]

        // Because we don't want to have the device upside down
        // We constrain the x value to the range [-90,90]
        if (x >  90) { x =  90};
        if (x < -90) { x = -90};

        // To make computation easier we shift the range of 
        // x and y to [0,180]
        x += 90;
        y += 90;

        // 10 is half the size of the ball
        // It center the positioning point to the center of the ball
        this.state.mouse.y  = (maxX*x / 66);
        this.state.mouse.x = (maxY*y / 66);
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