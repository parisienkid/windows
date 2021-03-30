import validateInputs from './validateInputs';

const updateDataWindow = (data) => {

    const windowImgIndexParent = document.querySelector('.balcon_icons'),
          windowImgIndex = document.querySelectorAll('.balcon_icons_img img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('[name="checkbox-test"]');

    validateInputs(windowWidth);
    validateInputs(windowHeight)

    let indexOfWindow;
    updateIndexOfWindow();

    function updateIndexOfWindow() {
        windowImgIndex.forEach((item, i) => {
            if (item.parentElement.classList.contains('do_image_more')) {
                indexOfWindow = i;
                data['indexOfWindow'] = indexOfWindow;
            }
        });
    }

    windowImgIndexParent.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.nodeName === 'IMG') {
            updateIndexOfWindow();
        }
    });


    
    addDataInCalc(windowHeight, 'input', 'height');
    addDataInCalc(windowWidth, 'input', 'width');
    addDataInCalc(windowType, 'change', 'type');
    addDataInCalc(windowProfile, 'change', 'profile');
    

    function addDataInCalc(elem, event, name) {
            elem.forEach(item => {

                function updateData() {
                    if (elem === windowProfile) {
                        if (item.checked === true) {
                            windowProfile.forEach(i => {
                                if (i != item) {
                                    i.checked = false;
                                    data[name] = item.nextElementSibling.getAttribute('id');
                                }
                            });
                        }
                    } else {
                        data[name] = item.value;
                    }
                }

                updateData();

                item.addEventListener(event, () => {
                    updateData();
                });
            });
        }
    

};

export default updateDataWindow;