import React, { Component } from 'react';

class NavigationComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false,
            currentPage: 'home'
        };

        this.toggleNavigation = this.toggleNavigation.bind(this);
        this.goToPage = this.goToPage.bind(this);
    }
    
    toggleNavigation() {
        this.setState({showMenu: !this.state.showMenu})
    }

    goToPage(page){
        // hide modal
        this.toggleNavigation();

        // show page
        this.setState({currentPage: page});

        // Send page data to parent component
        this.props.onPageChange(page);
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
                            <li><a href="#home" onClick={() => this.goToPage('home')} className={(this.state.currentPage == 'home') ? 'active':'not-active'}>Home</a></li>
                            <li><a href="#about" onClick={() => this.goToPage('about')} className={(this.state.currentPage == 'about') ? 'active':'not-active'}>About</a></li>
                            <li><a href="#resume" onClick={() => this.goToPage('resume')} className={(this.state.currentPage == 'resume') ? 'active':'not-active'}>Resume</a></li>
                            <li><a href="#contact" onClick={() => this.goToPage('contact')} className={(this.state.currentPage == 'contact') ? 'active':'not-active'}>Contact</a></li>
                        </ul> 
                    </nav>
                </div>
            </div>
        );
    }

}


export default NavigationComponent;