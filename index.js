// const hamImage = document.getElementById('ham');
// const mobileDropdown = document.getElementById('mobileDropdown');

// hamImage.addEventListener('click', function () {
//     console.log('hamburger clicked!');
//     console.log(mobileDropdown)
//    mobileDropdown.classList.toggle('show')
// }

// );
const hamImage = document.getElementById('ham');
const mobileDropdown = document.getElementById('mobileDropdown');
const popup = document.getElementById('popup');

hamImage.addEventListener('click', function () {
    mobileDropdown.classList.add('show')  // adding the show class,which should display the side bar
    hamImage.classList.remove('show')    // Removing the show class from the ham image removes the image
    popup.classList.add('show');        // adding the show class, displays pop(close x)

});

popup.addEventListener('click', () => {
    popup.classList.remove('show');         // Removing the show class should remove pop up
    hamImage.classList.add('show')           // adding the show class should display the ham image
    mobileDropdown.classList.remove('show')  // Removing the show class should remove the side bar
});