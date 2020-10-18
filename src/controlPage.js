const ipcRenderer = require('electron').ipcRenderer;
const cameraPage = '/src/cameraPage.html'

function confirmModulesButton() {

    //Map digital actions

    ipcRenderer.send('load-page', cameraPage);
} 

/** BV Dropdown Menu */

var physicalModule = [
    'Button',
    'Launchpad',
    'UFO',
    'MOMOMO',
    "fivefucks",
];

console.log(physicalModule)

let moduleType;
let digitalAction = [];

let findDigitalAction = (i) => {      
    switch (i) {

        case "Button":
            digitalAction = [
                "Click",
                "Rotate",
                "Explode"
                ]
        break;

        case "Launchpad":
            digitalAction = [
                "Arrow Keys",
                "dasdssa",
                "Expldsadd"
                ]
        break;

        case "UFO":
            digitalAction = [
                "there are",
                "aliens",
                "here"
            ]
        break;

        default: console.log('unknown module')
        break;

    }
}

let customForm = [];

let findDetectionLogic = (i) => {      
    switch (i) {

        case "Launchpad":
            customForm = [
                "Clockwise Directiondsdsada",
                "Anti-Clockwise Directiosdasdasn"
                ]
        break;

        case "binary":
            customForm = [
                "Keypress"
            ]
        break;

        case "continuous":
            customForm = [
                "First Detection",
                "Second Detection",
                "Third Detection"
            ]
        break;

        default: console.log('unknown detection logic')
        break;

    }
}

var makeNewBV = (e, i) => {
    
    findDigitalAction(i)
    console.log(digitalAction)

    let selectModuleType = new BVSelect({
      selector: "#module-type-" + e,
      width: "auto",
      searchbox: false,
      offset: false,
      placeholder: i,
      breakpoint: 450
    });

    let ammendSelectBox = () => {
        selectModuleType.Change({
            options : {
                0: {
                    inner_text: digitalAction[0],
                    value: digitalAction[0],
                },
                1: {
                    inner_text: digitalAction[1],
                    value: digitalAction[1],
                },
                2: {
                    inner_text: digitalAction[2],
                    value: digitalAction[2],
                },
                3: {
                    inner_text: "Custom Shortcut",
                    value: "customShortcut"+i,
                    icon: "fas fa-cog"
                },
            }
        })

        selectModuleType.Update();
        return
    }

    ammendSelectBox();    
    console.log(selectModuleType.GetID());

};



let frontScreenSelect = () => {

    let frontSelect = new BVSelect({
      selector: "#main-title-select",
      width: "auto",
      searchbox: true,
      offset: false,
      placeholder: i,
      breakpoint: 450
    });

    let ammendSelectBox = () => {
        frontSelect.Change({
            options : {
                0: {
                    inner_text: "After Effects",
                    value: "After Effects",
                },
                1: {
                    inner_text: "Blender",
                    value: "Blender",
                },
                2: {
                    inner_text: "UFO STUFF",
                    value: "UFO STUFF",
                },
                3: {
                    inner_text: "Custom Shortcut",
                    value: "customShortcut"+i,
                    icon: "fas fa-cog"
                },
            }
        })

        selectModuleType.Update();
        return
    }

    ammendSelectBox();    

};


/** Vanilla JS for simple buttons */

let AddModuleDropdownClicked = false;
let customMenuDropdownClicked = false;

let AddModuleDropdown = () => {
    AddModuleDropdownClicked = AddModuleDropdownClicked ? false : true;
    if (AddModuleDropdownClicked == true) {
        gsapDropdown("#module-select-dropdown", 350)
        return;
    } else {
        gsapDropdownUp("#module-select-dropdown")
    }
}

let customMenuDropdown = (e) => {
    customMenuDropdownClicked = customMenuDropdownClicked ? false : true;
    if (customMenuDropdownClicked == true) {
        gsapDropdown("#custom-options-dropdown-"+ e, 200)
        return;
    } else {
        gsapDropdownUp("#custom-options-dropdown-"+ e)
    }
}

/** Click outside to close menus */

function hideOnClickOutside(element) {
    const outsideClickListener = event => {
        if (!element.contains(event.target) && isVisible(element)) { // or use: event.target.closest(selector) === null
            gsapDropdownUp("#module-select-dropdown")
          removeClickListener()
        }
    }

    const removeClickListener = () => {
        document.removeEventListener('click', outsideClickListener)
    }

    document.addEventListener('click', outsideClickListener)
}


/** Tippy Tooltips */

tippy('#titleField', {
    content: 'Click to rename your board!',
});


