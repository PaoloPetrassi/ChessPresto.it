
let opener = document.querySelector('.opener');

let movedDivs = document.querySelectorAll('.moved');

let check = false;


let organizzatori = [

    {name: 'Bill', caratteristiche : ['Ciao', 'Miao'], url: 'Media/bill.jpg'},
    {name: 'Cavallo', caratteristiche : ['lol', 'troll'], url: 'Media/cavallo.jpg'},
    {name: 'Grigio', caratteristiche : ['nonso', 'bho'], url: 'Media/grigio.jpg'},
    {name: 'Soldato', caratteristiche : ['punto', 'dash'], url: 'Media/soldato.jpg'},
    {name: 'Gufo', caratteristiche : ['Nomi', 'Cose'], url: 'Media/gufo.jpg'}

]


let cardWrapper = document.querySelector('#cardWrapper');

movedDivs.forEach((moved, i)=>{


    moved.style.backgroundImage = `url('${organizzatori[i].url}')`;


    moved.addEventListener('click', ()=>{


        cardWrapper.innerHTML = '';

        let div = document.createElement('div');

        div.classList.add('chi-siamo');

        div.innerHTML = `
                <h3 class="display-2">${organizzatori[i].name}</h3>
                <p>${organizzatori[i].caratteristiche}</p>
        `;

        cardWrapper.appendChild(div);


        let card = document.querySelector('.chi-siamo');

        card.style.backgroundImage = `url('${organizzatori[i].url}')`;

        card.setAttribute('data-aos', 'zoom-in');
        card.setAttribute('data-aos-duration','1000');



    })



})



opener.addEventListener('click', ()=>{


    if(check == false){


        movedDivs.forEach((moved, i)=>{

            check = true;

            let angle = (360* i) / movedDivs.length;
    
            moved.style.transform = `rotate(${angle}deg) translate(175%) rotate(-${angle}deg)`;

            moved.style.zIndex = "1";

            opener.innerHTML = `<i class="fa-solid fa-door-open fa-10x icona3"></i>`;

        })


    } else {

        check = false;

        cardWrapper.innerHTML = '';
        
        movedDivs.forEach((moved)=>{

            
            moved.style.transform = `rotate(0deg) translate(0px)`;

            moved.style.zIndex = "-1";


            opener.innerHTML = `<i class="fa-solid fa-door-closed fa-10x icona3"></i>`;
        })

    }

})