import React from 'react';
import ReactDOM from "react-dom";

class CanvasComponent extends React.Component {
    render() {
        return (
            <canvas ref="canvas" id="canvas" className="canvas"/>
        );
    }
    componentDidMount() {
        // const node = ReactDOM.findDOMNode(this);
        // // Get child nodes
        // if (node instanceof HTMLElement) {
        //     const child = node.querySelector('.someClass');
        // }
    }
}


export default CanvasComponent;