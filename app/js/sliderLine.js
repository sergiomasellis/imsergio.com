class SliderLine {
  constructor() {
    this.initAnimatedTabLine();
  }

  initAnimatedTabLine() {
    const animatedLine = document.querySelector('.slider-line');
    const menuScale = document.querySelectorAll('.service-list li');
    const menuScaleAnchor = document.querySelectorAll('.service-list li a');
    let activeMenuLine = document.querySelector('.service-list li.active');

    if (animatedLine != null) {
      //   resize.add(() => {
      // animatedLine.style.width = activeMenuLine.offsetWidth + 'px';
      // animatedLine.style.left = activeMenuLine.offsetLeft + 'px';
      //   });
    }

    [...menuScale].forEach(el => {
      el.onmouseover = event => {
        var selectedTab = event.currentTarget;
        animatedLine.style.width = selectedTab.offsetWidth + 'px';
        animatedLine.style.left = selectedTab.offsetLeft + 'px';
      };

      el.onmouseleave = () => {
        activeMenuLine = document.querySelector('.service-list li.active');
        animatedLine.style.width = activeMenuLine.offsetWidth + 'px';
        animatedLine.style.left = activeMenuLine.offsetLeft + 'px';
      };
    });
    [...menuScaleAnchor].forEach(el => {
      el.onfocus = event => {
        var selectedTab = event.currentTarget.parentNode;
        animatedLine.style.width = selectedTab.offsetWidth + 'px';
        animatedLine.style.left = selectedTab.offsetLeft + 'px';
      };
    });

    if (activeMenuLine != null) {
      animatedLine.style.width = activeMenuLine.offsetWidth + 'px';
      animatedLine.style.left = activeMenuLine.offsetLeft + 'px';

      //   resize.add(() => {
      // animatedLine.style.width = activeMenuLine.offsetWidth + 'px';
      // animatedLine.style.left = activeMenuLine.offsetLeft + 'px';
      //   });
      [...menuScale].forEach(el => {
        el.onmouseover = event => {
          var selectedTab = event.currentTarget;
          animatedLine.style.width = selectedTab.offsetWidth + 'px';
          animatedLine.style.left = selectedTab.offsetLeft + 'px';
        };
        el.onmouseleave = () => {
          activeMenuLine = document.querySelector('.service-list li.active');
          animatedLine.style.width = activeMenuLine.offsetWidth + 'px';
          animatedLine.style.left = activeMenuLine.offsetLeft + 'px';
        };
      });
    }
  }
}

export default SliderLine;
