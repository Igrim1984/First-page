//------------------------------------------------- Dropmenu -------------------------------------------------------

const dropmenu = document.querySelector('#dropmenu');
const burger = document.querySelector('#burger');

burger.addEventListener('click', () => {
    if (dropmenu.classList.contains('hidden')) {
        dropmenu.classList.remove ('hidden');
        burger.innerHTML = '<div id="menuicon" class="text-6xl text-center align-middle text-white border-white border-4 w-24 h-24 cursor-pointer transform hover:scale-125"">X</div>';
    } else {
        dropmenu.classList.add('hidden');
        burger.innerHTML = '<svg class="w-24 h-24 cursor-pointer border-white border-4 text-white transform hover:scale-125" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
        
    }
})

// -------------------------------------------Bottom Section-----------------------------------------------------

const anothermenu = document.querySelector('#anothermenu');
const anothermenuicon = document.querySelector('#anothermenuicon');

anothermenuicon.addEventListener('click', () => {
    if (anothermenu.classList.contains('hidden')) {
        anothermenu.classList.remove ('hidden');
        anothermenuicon.innerHTML ='Ukryj dodatkową zawartość';
    } else {
        anothermenu.classList.add('hidden');
        anothermenuicon.innerHTML = 'Pokaż dodatkową zawartość';
    }
})

//----------------------------------------------Login-----------------------------------------------------------

const login = document.querySelector('#login');
const loginform = document.querySelector('#loginform');

login.addEventListener('click', () => {
    if (loginform.classList.contains('hidden')) {
        loginform.classList.remove ('hidden');
        regform.classList.add('hidden')
    } else {
        loginform.classList.add('hidden');
    }    
})

//-------------------------------------------Register---------------------------------------------------------

const reg = document.querySelector('#reg');
const regform = document.querySelector('#regform');

reg.addEventListener('click', () => {
    if (regform.classList.contains('hidden')) {
        regform.classList.remove ('hidden');
        loginform.classList.add('hidden');
    } else {
        regform.classList.add('hidden');
    }    
})