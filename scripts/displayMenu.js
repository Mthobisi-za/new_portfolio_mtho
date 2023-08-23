var menu_counter = 0;

function displayMenu() {
    console.log('changing')
    if (menu_counter == 0) {
        document.querySelector('.popup_menu').style.display = 'grid';
        document.querySelector('.close').style.display = 'inline';
        document.querySelector('.open').style.display = 'none';
        menu_counter++
    } else {
        document.querySelector('.popup_menu').style.display = 'none';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.open').style.display = 'inline';
        menu_counter--
    }
}