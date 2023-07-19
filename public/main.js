const topMenu = document.getElementById('ct-top-menu')
const toggleTopMenuIcon = document.getElementById('ct-toggle-menu-icon')

document.addEventListener('click', (e) =>{
    
    if (toggleTopMenuIcon.contains(e.target)){

        topMenu.classList.toggle('ct-topmenu-expanded')
        topMenu.classList.toggle('hidden')

    }
    else{

        if(topMenu.classList.contains('ct-topmenu-expanded')){
            topMenu.classList.remove('ct-topmenu-expanded')
            topMenu.classList.add('hidden')

        }
    }
})