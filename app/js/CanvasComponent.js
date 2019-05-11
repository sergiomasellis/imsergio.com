import React, {Component} from 'react';
// import ReactDOM from "react-dom";

class CanvasComponent extends Component {

    render() {
        return (
            <div ref={this.props.canvasRef} className="canvasContainer"></div>
        );
    }
}


export default CanvasComponent;