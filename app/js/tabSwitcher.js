class TabSwitcher {
  constructor() {
    this.links = document.querySelectorAll('.service-list li a');
    this.currentTab = document.querySelector('.service-list li.active');
    this.openTabContent = document.querySelector(
      '.service-content-item:not(.hide-ui)'
    );
    this.hiddenTabsContent = document.querySelector(
      '.service-content-item.hide-ui'
    );

    this.links.forEach(link => {
      link.addEventListener('click', this.selectTab.bind(this), false);
    });
  }

  selectTab(event) {
    event.preventDefault();
    this.currentTab.classList.remove('active');
    event.currentTarget.parentNode.classList.add('active');
    this.currentTab = event.currentTarget.parentNode;

    const tabToOpen = event.currentTarget.href.split('#')[1];
    this.openTabContent.classList.add('hide-ui');
    
    this.openTabContent = document.querySelector('.service-content-item.'+tabToOpen);
    this.openTabContent.classList.remove('hide-ui');
  }
}

export default TabSwitcher;
