
const changeThemeBtn = document.querySelector('.changeThemeBtn');
const chevronIcon = document.querySelector('.changeThemeBtn i');
const changeTheme = document.querySelector('.changeTheme');
const themeEditor = changeTheme.querySelector('.themeEditor');

//change theme dropdown
changeThemeBtn.addEventListener('click', () => {
    if (chevronIcon.className ==="fa fa-chevron-down") {
        chevronIcon.className = "fa fa-chevron-up";
        // changeTheme.style.height = 'fit-content';
        themeEditor.style.borderTop = '1px solid var(--primary-color)';
        themeEditor.style.display = 'flex';
    } else {
        chevronIcon.className = "fa fa-chevron-down";
        // changeTheme.style.height = '80px';
        themeEditor.style.borderTop = 'none';
        themeEditor.style.display = 'none';
    }
});
//i can use smthing like setTimeInterval for the animation effect using a for loop with height set to an initial of 0.


function makeChanges(params) {
    let postTextColor = document.getElementById('postTextColor').value;
    let textBackgroundColor = document.getElementById('textBackgroundColor').value;
    let primaryColor = document.getElementById('primaryColor').value;
    let secondaryColor = document.getElementById('secondaryColor').value;
    let tertiaryColor = document.getElementById('tertiaryColor').value;
    let hoverColor = document.getElementById('hoverColor').value;
    // let bodyColor = document.getElementById('bodyColor').value;
    let defaultColor = document.getElementById('defaultColor');
    localStorage.clear();
    localStorage.setItem('--post-text-color', `${postTextColor}`);
    localStorage.setItem('--text-background', `${textBackgroundColor}`);
    localStorage.setItem('--primary-color', `${primaryColor}`);
    localStorage.setItem('--secondary-color', `${secondaryColor}`);
    localStorage.setItem('--tertiary-color', `${tertiaryColor}`);
    localStorage.setItem('--hover-color', `${hoverColor}`);
    // localStorage.setItem('--body-color', `${bodyColor}`);
    
    if (defaultColor.checked) {
        document.querySelector(':root').setAttribute('style', `--post-text-color:#444444; --text-background:#cff3a6; --primary-color:#ffffff;--secondary-color:#0ec597; --tertiary-color:#054d43; --hover-color:#10eeb6`);
        // document.body.style.backgroundColor =`transparent`;
        // localStorage.clear();
    } else {
        
        document.querySelector(':root').setAttribute('style', `--post-text-color:${postTextColor}; --text-background:${textBackgroundColor}; --primary-color:${primaryColor};--secondary-color:${secondaryColor}; --tertiary-color:${tertiaryColor}; --hover-color:${hoverColor}; --banner-text-color:${tertiaryColor}`);
        // document.body.style.backgroundColor =`${bodyColor}`;
    }
    //ty and store all the colors in localstorage and then onload of the window get the colors an doc.querselect(:root).setAttributes to the key values of the colors!
    // localStorage.setItem('--post-text-color',`${postTextColor}` );
};
// window.onload = function (params) {
//     document.querySelector(':root').onclick = makeChanges;
// }

 
// function (params) {
//     let ptc = localStorage.getItem('--post-text-color');
//     let tbg = localStorage.getItem('--text-background');
//     let pry = localStorage.getItem('--primary-color');
//     let sec = localStorage.getItem('--secondary-color');
//     let ter = localStorage.getItem('--tertiary-color');
//     let hov = localStorage.getItem('--hover-color');
//     let boc = localStorage.getItem('--body-color');
//     document.querySelector(':root').setAttribute('style', `--post-text-color:${ptc}; --text-background:${tbg}; --primary-color:${pry};--secondary-color:${sec}; --tertiary-color:${ter}; --hover-color:${hov};`);
//     document.body.style.backgroundColor =`${boc}`;
// }



// document.addEventListener('load', loadChanges);
function handleLightMode(params) {
    // const postTextColor = document.getElementById('postTextColor').value;
    // const textBackgroundColor = document.getElementById('textBackgroundColor').value;
    // const primaryColor = document.getElementById('primaryColor').value;
    // const secondaryColor = document.getElementById('secondaryColor').value;
    // const tertiaryColor = document.getElementById('tertiaryColor').value;
    // const hoverColor = document.getElementById('hoverColor').value;
    // const bodyColor = document.getElementById('bodyColor').value;
    let ptc = localStorage.getItem('--post-text-color');
    let tbg = localStorage.getItem('--text-background');
    let pry = localStorage.getItem('--primary-color');
    let sec = localStorage.getItem('--secondary-color');
    let ter = localStorage.getItem('--tertiary-color');
    let hov = localStorage.getItem('--hover-color');
    // let boc = localStorage.getItem('--body-color');
    document.getElementById("moverBtn").style.transform = "translateX(1%)";
    document.getElementById("moverBtn").style.transition = "all 0.6s ease-in-out";
    document.getElementById("lightBtn").style.backgroundColor = "lightslategray";
    document.getElementById("darkBtn").style.backgroundColor = "lightslategray";
    // document.querySelector(':root').setAttribute('style', `--post-text-color:#444;--box-shadow: 3px 3px 20px 3px gray; --text-background:${textBackgroundColor}; --primary-color:${primaryColor};--secondary-color:${secondaryColor}; --tertiary-color:${tertiaryColor}; --hover-color:${hoverColor}`);
    // document.body.style.backgroundColor = "transparent";
    document.querySelector(':root').setAttribute('style', `--post-text-color:${ptc};--box-shadow: 3px 3px 20px 3px gray; --text-background:${tbg}; --primary-color:${pry};--secondary-color:${sec}; --tertiary-color:${ter}; --hover-color:${hov};--banner-text-color:${ter}`);
    // document.body.style.backgroundColor = `${boc}`;
    document.body.style.backgroundColor = "transparent";
    localStorage.removeItem('transform');
}
//for toggle switch
function handleDarkMode(params) {
    // const postTextColor = document.getElementById('postTextColor').value;
    // const textBackgroundColor = document.getElementById('textBackgroundColor').value;
    // const primaryColor = document.getElementById('primaryColor').value;
    // const secondaryColor = document.getElementById('secondaryColor').value;
    // const tertiaryColor = document.getElementById('tertiaryColor').value;
    // const hoverColor = document.getElementById('hoverColor').value;
    // const bodyColor = document.getElementById('bodyColor').value;
    let ptc = "white";
    let tbg = localStorage.getItem('--text-background');
    let pry = localStorage.getItem('--primary-color');
    let sec = localStorage.getItem('--secondary-color');
    let ter = localStorage.getItem('--tertiary-color');
    let hov = localStorage.getItem('--hover-color');
    // let boc = localStorage.getItem('--body-color');
    if (document.title ==='Projects Page' || document.title ==='Home Page') {
        document.getElementById("moverBtn").style.transform = "translateX(99%)";
        document.getElementById("moverBtn").style.transition = "all 0.6s ease-in-out";
        document.getElementById("lightBtn").style.backgroundColor = "var(--secondary-color)";
        document.getElementById("darkBtn").style.backgroundColor = "var(--secondary-color)";
        // document.querySelector(':root').setAttribute('style', `--post-text-color:white;--box-shadow: 1px 2px 10px 2px var(--tertiary-color);--banner-text-color: white; --text-background:${textBackgroundColor}; --primary-color:${primaryColor};--secondary-color:${secondaryColor}; --tertiary-color:${tertiaryColor}; --hover-color:${hoverColor}`);
        // document.getElementById('pop-up-div').style.backgroundColor ="black";
        // document.body.style.backgroundColor = "black";
        document.querySelector(':root').setAttribute('style', `--post-text-color:${ptc};--box-shadow: 1px 2px 10px 2px gray; --text-background:${tbg}; --primary-color:${pry};--secondary-color:${sec}; --tertiary-color:${ter}; --hover-color:${hov};--banner-text-color: white;--banner-btn-shadow: none;`);
        document.getElementById('pop-up-div').style.backgroundColor ="black";
        document.body.style.backgroundColor = "black";
        localStorage.setItem('transform', 'translateX(99%)');
    } else {
        document.getElementById("moverBtn").style.transform = "translateX(99%)";
        document.getElementById("moverBtn").style.transition = "all 0.6s ease-in-out";
        document.getElementById("lightBtn").style.backgroundColor = "var(--secondary-color)";
        document.getElementById("darkBtn").style.backgroundColor = "var(--secondary-color)";
        // document.querySelector(':root').setAttribute('style', `--post-text-color:white;--box-shadow: 1px 2px 10px 2px var(--tertiary-color);--banner-text-color: white; --text-background:${textBackgroundColor}; --primary-color:${primaryColor};--secondary-color:${secondaryColor}; --tertiary-color:${tertiaryColor}; --hover-color:${hoverColor}`);
        // document.body.style.backgroundColor = "black";
        document.querySelector(':root').setAttribute('style', `--post-text-color:${ptc};--box-shadow: 1px 2px 10px 2px gray; --text-background:${tbg}; --primary-color:${pry};--secondary-color:${sec}; --tertiary-color:${ter}; --hover-color:${hov};--banner-text-color: white; --banner-btn-shadow: none;`);
        document.body.style.backgroundColor = `black`;
        localStorage.setItem('transform', 'translateX(99%)');
    }
    
}

window.onload = setTimeout(() => {
    let postTextColor = localStorage.getItem('--post-text-color');
    let textBackgroundColor = localStorage.getItem('--text-background');
    let primaryColor = localStorage.getItem('--primary-color');
    let secondaryColor = localStorage.getItem('--secondary-color');
    let tertiaryColor = localStorage.getItem('--tertiary-color');
    let hoverColor = localStorage.getItem('--hover-color');
    // let ptc = localStorage.getItem('--post-text-color');
    // let tbg = localStorage.getItem('--text-background');
    // let pry = localStorage.getItem('--primary-color');
    // let sec = localStorage.getItem('--secondary-color');
    // let ter = localStorage.getItem('--tertiary-color');
    // let hov = localStorage.getItem('--hover-color');
    // let boc = localStorage.getItem('--body-color');
    
    // document.body.style.backgroundColor =`${boc}`;
    if (localStorage.getItem('transform') === "translateX(99%)") {
        document.getElementById("moverBtn").style.transform = "translateX(99%)";
        document.getElementById("lightBtn").style.backgroundColor = "var(--secondary-color)";
        document.getElementById("darkBtn").style.backgroundColor = "var(--secondary-color)";
        document.querySelector(':root').setAttribute('style', `--post-text-color:white; --box-shadow: 1px 2px 10px 2px gray;--text-background:${textBackgroundColor}; --primary-color:${primaryColor};--secondary-color:${secondaryColor}; --tertiary-color:${tertiaryColor}; --hover-color:${hoverColor};--banner-text-color:white;--banner-btn-shadow: none;`);
        document.body.style.backgroundColor = 'black';
    } else {
        document.querySelector(':root').setAttribute('style', `--post-text-color:${postTextColor}; --text-background:${textBackgroundColor}; --primary-color:${primaryColor};--secondary-color:${secondaryColor}; --tertiary-color:${tertiaryColor}; --hover-color:${hoverColor};--banner-text-color:${tertiaryColor}`);
        document.body.style.backgroundColor = 'transparent';
    }
}, 1);

