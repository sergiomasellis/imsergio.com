import anime from 'animejs';

class ScrollToSection {
  constructor() {
    this.links = document.querySelectorAll('.navigation__list li a');
    this.currentTab = document.querySelector('.navigation__list li a.active');
    this.currentTabMobile = document.querySelector(
      '.mobile-menu .accordion li a.active'
    );
    
    console.log(this.currentTabMobile);

    this.links.forEach(link => {
      link.addEventListener('click', this.scrollTo.bind(this), false);
    });
  }

  scrollTo(event) {
    event.preventDefault();
    const tabToOpen = event.currentTarget.href.split('#')[1];
    const content = document.querySelector('.' + tabToOpen + '-link');

    this.currentTab.classList.remove('active');
    this.currentTab = event.currentTarget;
    this.currentTab.classList.add('active');

    anime({
      targets: 'html, body',
      scrollTop: window.pageYOffset + content.getBoundingClientRect().top,
      easing: 'easeOutCubic'
    });
  }
}

export default ScrollToSection;
