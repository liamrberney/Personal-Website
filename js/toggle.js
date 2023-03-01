
if(localStorage.getItem('darkMode') != 'enabled' && localStorage.getItem('darkMode') != 'disabled'){
    localStorage.setItem('darkMode','enabled');
    location.reload();
}
function change() {

    if ( document.getElementById("navbar").classList.contains('bg-light') ){
        localStorage.setItem('darkMode','enabled');
        location.reload();
    }
    else{    
        localStorage.setItem('darkMode','disabled');
        location.reload();
    }
    console.log(localStorage.getItem('darkMode'));
    
};


let root = document.documentElement
if(localStorage.getItem('darkMode') == 'enabled'){
    console.log("howdy3");
    document.getElementById("navbar").classList.remove('bg-light');
    document.getElementById("navbar").classList.add('bg-dark');
    root.style.setProperty('--title-color', 'white');
    root.style.setProperty('--background-color', 'black');
}
else{
    console.log("howdy4");
    document.getElementById("navbar").classList.remove('bg-dark');
    
    document.getElementById("navbar").classList.add('bg-light');  
    root.style.setProperty('--title-color', 'black');
    root.style.setProperty('--background-color', 'white');
}