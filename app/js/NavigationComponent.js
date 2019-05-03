import React from 'react';

class NavigationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        };

        this.toggleNavigation = this.toggleNavigation.bind(this);
    }
    
    toggleNavigation() {
        this.setState({showMenu: !this.state.showMenu})
    }

    render() {
        return (
            <div>
                <nav className={`navigation ${(this.state.showMenu) ? 'open':''}`} onClick={this.toggleNavigation}>
                    <div className="navigation__top"></div>
                    <div className="navigation__mid"></div>
                    <div className="navigation__bottom"></div>
                </nav>

                <div className={`navigation-modal ${(this.state.showMenu) ? '':'hide'}`}>
                    <nav>
                        <ul>
                            <li><a href="#resume">Resume</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#work">Contact</a></li>
                        </ul> 
                    </nav>
                </div>
            </div>
        );
    }

}


export default NavigationComponent;