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




// FETCH = una chiamata asincrona
// è quella funzione che mi permette di agganciarmi al Json
// la fetch, il dato che trova all'interno del file Json, lo trasforma in quella che viene chiamata
// Promise

// la fetch da sola non riesce a convertire quello che trova nel file Json, quindi lui si aggancia e per convertire la Promise, ha bisogno del metodo:
// .then()

// una volta che ho preso la promise, mi arriva una response che devo convertire in un file JavaScript, e lo faremo attraverso il metodo .json()

// arrivati a questo punto abbiamo convertito il dato, ma non ce l'abbiamo ancora disponibile per poterlo utilizzare

// per poterlo utilizzare, dobbiamo concatenare un secondo .then() nel quale andremo a mettere come parametro formale data, proprio perché ci stanno arrivando dei dati convertiti

// e all'interno del blocco di istruzioni andrò a scrivere tutto il da farsi con i dati che mi arrivano dal Json, chiaramente convertiti in un oggetto JavaScript


// ANNUNCI

fetch('./annunci.json').then( (response)=> response.json() ).then( (data)=> {
    
    // cattura wrapper radio buttons
    
    let categoryWrapper = document.querySelector('#categoryWrapper');
    
    // cattura wrapper delle cards annunci
    
    let cardsWrapper = document.querySelector('#cardsWrapper');
    
    
    // funzione che crea i radio buttons
    
    function setCategoryFilters(){
        
        let categories = data.map( (annuncio)=> annuncio.category );
        
        // ho bisogno di un array con le categorie che non si ripetono, quindi.
        
        let uniqueCategories = [];
        
        categories.forEach( (category)=>{
            
            if( !uniqueCategories.includes(category)){
                
                uniqueCategories.push(category)
                
            }
            
            
        } )
        
        
        uniqueCategories.forEach( (category)=>{
            
            
            let div = document.createElement('div');
            
            div.classList.add('form-check');
            
            div.innerHTML = `
            
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="${category}">
            <label class="form-check-label" for="${category}">
            ${category}
            </label>        
            
            `;
            
            
            categoryWrapper.appendChild(div);
            
            
            
        } )
        
        
        
    }
    
    setCategoryFilters();
    
    
    // funzione mostra cards
    
    function showCards(array){
        
        // svuotamento wrapper
        cardsWrapper.innerHTML = '';
        
        // metto le card in ordine decrescente
        
        array.sort((a, b) => Number(b.price - a.price));
        
        
        array.forEach( (element, i)=>{
            
            
            let div = document.createElement('div');
            
            div.classList.add('col-12' , 'col-md-3' , 'my-5');
            
            div.innerHTML = `
            
            
            
            <div class="announcement-card text-center">
            <img class= "img-card-custom" src="https://picsum.photos/${200 + i}" alt="">
            <p class="h3">${element.name}</p>
            <h3>${element.category}</h3>
            <h3>${element.price} €</h3>
            </div>
            
            `;
            
            
            cardsWrapper.appendChild(div);
            
            
            
        } )
        
    }
    
    showCards(data);
    
    
    // funzione filtra per categoria, mostra cards (al click sul radio button)
    
    function filterbyCategory(array){


        // let categoria = Array.from(checkInputs).find( (button)=>button.checked).id;

        let arrayFromNodelist = Array.from(checkInputs);

        let button = arrayFromNodelist.find((bottone)=>bottone.checked);

        let categoria = button.id;
        
        
        if(categoria != 'All'){
            
            let filtered = array.filter( (annuncio)=> annuncio.category == categoria );
            
            return(filtered);
            
        } else {
            
            return(data);
            
        }
        
        
        
    }
    
    // cattura radio buttons
    
    let checkInputs = document.querySelectorAll('.form-check-input')
    
    checkInputs.forEach( (checkInput)=>{
        
        
        checkInput.addEventListener('click', ()=>{
            
            globalfilter();
            
        })
        
        
    })
    
    
    // cattura range input and number
    
    let inputPrice = document.querySelector('#inputPrice');
    
    let incrementNumber = document.querySelector('#incrementNumber');
    
    // funzione settaggio valore input price massimo
    
    function setInputPrice(){
        
        let prices = data.map( (annuncio)=> Number(annuncio.price) );
        
        let maxPrice = Math.max(...prices);
        
        inputPrice.max = Math.ceil(maxPrice);
        
        inputPrice.value = Math.ceil(maxPrice);
        
        incrementNumber.innerHTML = Math.ceil(maxPrice);
        
        
    }
    
    setInputPrice();
    
    // funzione che filtra per prezzo
    
    function filterbyPrice(array){
        
        let filtered = array.filter( (annuncio)=> annuncio.price <= +(inputPrice.value) );        
        
        return filtered;
        
    }
    
    //  evento al cambio dell'input range
    
    inputPrice.addEventListener('input', ()=>{
        
        globalfilter();
        
        incrementNumber.innerHTML = inputPrice.value;
        
        
    } )
    
    // cattura word input per filtro per parola
    
    let wordInput = document.querySelector('#wordInput');
    
    // funzione filtra per parola
    
    function filterbyWord(array){

        let nome = wordInput.value;
        
        let filtered = array.filter ( (annuncio)=> annuncio.name.toLowerCase().includes(nome.toLowerCase()) );
        
        return filtered;
        
    }
    
    // evento digitazione parola sull'input
    
    wordInput.addEventListener('input', ()=>{
        
        globalfilter();
        
    })



    function globalfilter(){

        let filteredByCategory = filterbyCategory(data);

        let filteredByPrice = filterbyPrice(filteredByCategory);

        let filteredByWord = filterbyWord(filteredByPrice);

        showCards(filteredByWord);

    }

} )