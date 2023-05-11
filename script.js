let sottosopra = document.querySelector('#sottosopra');

let mainNavbar = document.querySelector('#mainNavbar');

let parteIlContatore = document.querySelector('#parteilcontatore');

let btnCustom = document.querySelector('#btnCustom');



sottosopra.addEventListener('click', ()=>{
    
    sottosopra.classList.toggle('fa-rotate-270');
    
})




let logoA = document.querySelector('#logoA');
let logoB = document.querySelector('#logoB');



window.addEventListener('scroll', ()=>{
    
    if(window.scrollY > 600){

        mainNavbar.classList.remove('bg-transparent');
        mainNavbar.classList.add('beige');

         
        sottosopra.classList.remove('icona');
        sottosopra.classList.add('icona2');
        
        
        logoB.classList.remove('d-none');
        logoA.classList.add('d-none');

        btnCustom.classList.remove('btnCustom');
        btnCustom.classList.add('btnCustom2');
        
    } else {

        mainNavbar.classList.remove('beige');
        mainNavbar.classList.add('bg-transparent');

         
        sottosopra.classList.remove('icona2');
        sottosopra.classList.add('icona');
        
        
        logoA.classList.remove('d-none');
        logoB.classList.add('d-none');

        btnCustom.classList.add('btnCustom');
        btnCustom.classList.remove('btnCustom2');

        
    }
    
    
})


// window.addEventListener('scroll', ()=>{
    
//     if(window.scrollY > 600){
       
        
//     } else {
       
//     }
    
    
// })



function createInterval(numeroFinale, elemento){
    
    let contatore = 0;
    
    let interval = setInterval( ()=>{
        
        
        if(contatore < numeroFinale){
            
            contatore++
            elemento.innerHTML = contatore;
            
            
        } else {
            
            clearInterval(interval);
            
        }
        
    }, 1)
    
}

createInterval();


let firstSpan = document.querySelector('#contatore');

let Titoletto = document.querySelector('#titoletto');

let intersectionCheck = true;




let osservato = new IntersectionObserver(
    
    (entries)=>{
        
        entries.forEach( (entry)=>{
            
            if(entry.isIntersecting && intersectionCheck == true){
                
                createInterval(72, firstSpan);
                
                intersectionCheck = false;
                
            }
        } )
    }
    );
    
    osservato.observe(Titoletto);
    
const swiper = new Swiper('.swiper', {
    loop: true,
        
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
        
});
    
    
    let iconcina = document.querySelectorAll('.iconcina');
    
    let columns = document.querySelectorAll('.bordino');
    
    let check = false;
    
    
    columns.forEach( (colonna, i)=>{
        
        colonna.addEventListener('mouseenter', ()=>{
            
            if(check == false){
                
                iconcina[i].classList.remove('coloretorretta');
                iconcina[i].classList.add('scritta');
                
            } else {
                
                iconcina[i].classList.remove('nero'); 
                
            }
            
        });
        
        
        
        
        colonna.addEventListener('mouseleave', ()=>{
            
            
            if(check == false){
                
                iconcina[i].classList.remove('coloretorretta');
                iconcina[i].classList.add('nero');
                
                check = true;
                
            } else {
                
                iconcina[i].classList.add('scritta');
                
                check = false;
                
            }
            
        });
        
        
    });
    
    
    
    
    
    
    
    