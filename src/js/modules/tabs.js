const tabs = (tabsParentSelector, tabsSelector, tabsContentSelector, activeClass) => {

    const tabsParent = document.querySelector(tabsParentSelector),
          tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector);

    function hideTabsContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabsContent(i) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    }


    tabsParent.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains(tabsSelector.replace(/\./, '')) || e.target.parentNode.classList.contains(tabsSelector.replace(/\./, ''))) {
            tabs.forEach((item, i) => {
                if (item === e.target || item === e.target.parentNode) {
                     hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });

};

export default tabs;