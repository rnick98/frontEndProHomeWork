class Accordion {
    constructor(list) {
        this.list = list;
        this.curreTabId = null;
        this.tabs = [];

        this.init();
        this.createTabMenu();
        this.createTabContent();
        this.createEventListener();
        this.setTab(this.curreTabId);
    }

    init() {
        this.list.classList.add('tabs');

        const tabs = this.list.querySelectorAll('.tab');

        for (let i = 0; i < tabs.length; i++) {
            tabs[i].dataset.id = i;
        }

        this.curreTabId = 0;
        this.tabs = tabs;

    }

    createTabMenu() {
        const tabMenuItems = Array.from(this.tabs).map(tab => {
            const tabId = tab.dataset.id;
            const tabName = tab.querySelector('.title').textContent;

            const tabMenuItem = document.createElement('li');
            tabMenuItem.className = 'tab-menu-item';
            tabMenuItem.dataset.id = tabId;
            tabMenuItem.textContent = tabName;

            return tabMenuItem;
        });

        const tabMenu = document.createElement('ul');
        tabMenu.className = 'tab-menu';
        tabMenu.append(...tabMenuItems); // tabMenuItems[0], tabMenuItems[1], tabMenuItems[2]

        this.list.prepend(tabMenu);

    }

    createTabContent() {
        const tabContent = document.createElement('div');
        tabContent.className = 'tab-content';

        const tabMenu = this.list.querySelector('.tab-menu');

        tabMenu.after(tabContent);
    }

    createEventListener() {
        this.list.addEventListener("click", (event) => {
            if (event.target.classList.contains('tab-menu-item')) {
                const tabId = event.target.dataset.id;

                this.setTab(tabId, event.target);
            }
        });


    }

    setTab(tabMenuItemId, liElement) {

        const bodyContent = this.list.querySelector(`.tab[data-id="${tabMenuItemId}"] .body`).innerHTML;

        // Remove active class
        const tabMenuItems = this.list.querySelectorAll('.tab-menu-item');

        tabMenuItems.forEach(tabMenuItem => {
            tabMenuItem.classList.remove('tab-active');
        })

        // Set active class
        const tabMenuItem = this.list.querySelector(`.tab-menu-item[data-id="${tabMenuItemId}"]`);
        tabMenuItem.classList.add('tab-active');

        // Set content to tab
        const headerBodyContent = document.createElement("div");
        headerBodyContent.textContent = bodyContent;

        liElement.appendChild(headerBodyContent);
    }
}