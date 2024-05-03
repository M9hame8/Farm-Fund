// Add Search Button On Header
let searchBtn = document.querySelector('header .cont ul li:nth-child(3)');
let myLinks = document.querySelectorAll('header .cont ul li');
let theUl = document.querySelector('header .cont ul');


searchBtn.onclick = () => {
    // Hide The Ul Element's
    myLinks.forEach((e) => {
        e.classList.add('hide');
    });

    // Create The Input And Add It 
    let myinput = document.createElement('input');
    myinput.placeholder = 'Search'
    myinput.style.cssText = 'padding: 10px ; border-radius: 20px; border: none; outline: none; background-color: #f8faf9;'
    theUl.append(myinput);

    // Create Back Button
    let backBtn = document.createElement('button');
    backBtn.textContent = 'X';
    backBtn.style.cssText = 'margin-left: -40px; background-color: transparent;color : #ddd'
    theUl.append(backBtn);
    
    // Show The Li Element's Again On Click Back btn And Remove Search And Back btn
    backBtn.addEventListener('click', () => {
        myLinks.forEach((e) => {
            e.classList.remove('hide');
        })
        backBtn.remove();
        myinput.remove();
    })

};
// Show All Section And Setting On Page
let toggleBtn = document.querySelector('header .cont ul li:nth-child(4)');
let asideMenu = document.querySelector('.landing .aside-minu')

// toggleBtn.onclick = () => {
//     asideMenu.style.left = '0%'
//     toggleBtn.firstChild.firstChild.classList.remove('fa-bars');
//     toggleBtn.firstChild.firstChild.classList.add('fa-circle-xmark');
// }


// Slider Image 
let myImages = Array.from(document.querySelectorAll('.landing .cont .image img'));


// ABout Section 
let vidDiv = document.querySelector('.about .video')
let videoIcon = document.querySelector('.about .video i');
let aboutImg = document.querySelector('.about .video img');
let aboutVid = document.querySelector('.about .video video');
videoIcon.addEventListener('click',() => {
    videoIcon.remove();
    aboutImg.remove();
    aboutVid.classList.remove('hide')
    aboutVid.play();
})


// Footer Section 
let spanFoot = document.querySelector('footer .cont p span');
let myTime = new Date();

spanFoot.style.color = 'var(--main-color)'
spanFoot.textContent = myTime.getFullYear();