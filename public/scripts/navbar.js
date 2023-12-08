const menuTrigger = document.querySelector('.trigger'),
    closeTrigger = document.querySelector('.mini-close'),
    giveClass = document.querySelector('.site')

menuTrigger.addEventListener('click', function() {
    giveClass.classList.toggle('showmenu')
})

closeTrigger.addEventListener('click', function() {
    giveClass.classList.remove('showmenu')
})


//submenu
const button = document.querySelectorAll('.has-child > a'),
modalheight = document.querySelector('.menu-list')

button.forEach((item) => item.parentNode.classList.remove('expand'))
button.forEach((menu) => menu.addEventListener('click', function() {
    let modal = document.querySelector('.menu-list')
    modal.classList.toggle('show')

    if(this.parentNode.classList != 'expand') {
        this.parentNode.classList.toggle('expand')
    }

    if(!modal.classList.contains('show')) {
        modal.style.height = modalheight + 'px'
    } else {
        modal.style.height = ( this.parentNode.querySelector('ul').offsetHeight + 45) + 'px'
    }

    //back button
    menu.parentNode.querySelector('.back').addEventListener('click', function (){
        modal.style.height = 'auto'
        modal.classList.remove('show')
        menu.parentNode.classList.remove('expand')
    })
}))

/*
//mini menu
const topMenu = document.querySelectorAll('.top li a')
for (let i = 0; i < topMenu.length; i++) {
    topMenu[i].addEventListener('click', function() {
        let current = document.querySelectorAll('.active')

        //remove class list
        if(this.classList.contains('.active')) {
            this.classList.remove('active')
            document.querySelector(`#${this.className}`).classList.remove('active')
            return
        }

        // if theres no active class
        if(current.length > 0) {
            current[0].classList.remove('active')
            document.querySelector(`#${current[0].classList}`).classList.remove('active')
        }

        //add active to ID
        document.querySelector(`#${this.classList}`).classList.remove('active')

        //add active class to the current/clicked button
        this.classList.add('active')
    })
}*/