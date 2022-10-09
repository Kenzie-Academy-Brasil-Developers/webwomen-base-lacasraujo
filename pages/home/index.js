/* Desenvolva sua lógica aqui... */
let arrSelected=[]

function goToVacancies(){
    let vacanciesButton =document.querySelector(".vacanciesButton")
    vacanciesButton.addEventListener("click",()=>{
        let vacancies =document.querySelector(".vacancies")

        window.scrollTo(0, vacancies)

    } )
}

goToVacancies()

function locStorage(){

  let arrUpdated =JSON.parse( localStorage.getItem("PrefUser"))

  if(localStorage.getItem("PrefUser")){

    arrSelected =[...arrUpdated]
  }
    
}

locStorage()

renderCardsSelected()


function renderCards(){

    jobsData.forEach(element => {
        
    
    const  mainCards = document.querySelector(".mainCards")
    const  mainCard = document.createElement("div")
    const  mainCardH3 = document.createElement("h3")
    const  spans = document.createElement("div")
    const  enterprise = document.createElement("span")
    const  location = document.createElement("span")
    const  description = document.createElement("p")
    const  buttonAndModalities = document.createElement("div")
    let modalities = document.createElement("span")
    const  cardButton = document.createElement("button")


    mainCard.classList.add("mainCard")
    mainCardH3.classList.add("mainCardH3")
    spans.classList.add("spans")
    enterprise.classList.add("enterprise")
    location.classList.add("location")
    description.classList.add("description")
    buttonAndModalities.classList.add("buttonAndModalities")
    modalities.classList.add("modalities")
    cardButton.classList.add("cardButton")


    mainCardH3.innerText = element.title
    enterprise.innerText = element.enterprise
    location.innerText = element.location
    description.innerText = element.descrition

    let stri =""
    element.modalities.map(element => {

        
       
        stri += `${element},  `

        buttonAndModalities.appendChild(modalities)
        
    });

    modalities.innerText = stri

    cardButton.innerText = "Candidatar"

    cardButton.addEventListener("click",()=> {
        
       
        if( arrSelected.find(obj => obj == element ) == undefined  ){
            arrSelected.push(element)
            let arrSel = JSON.stringify(arrSelected)
            localStorage.setItem("PrefUser",arrSel)
        }else(
            window.alert("Vaga Ja selecionada")
        )




        renderCardsSelected()
    })

    

    
    mainCards.appendChild(mainCard)
    mainCard.append(mainCardH3,spans,description,buttonAndModalities)
    spans.append(enterprise,location)
    buttonAndModalities.append(cardButton)

    });

}

renderCards()

function renderCardsSelected(){
    
    let cardsAside = document.querySelector(".cardsAside")
    let pPattern = document.createElement("p")
    pPattern.innerText="Você ainda não aplicou para nenhuma vaga"

    cardsAside.innerHTML=""

    if(arrSelected.length == 0){
        cardsAside.appendChild(pPattern)
    }

    arrSelected.forEach((element,index )=> {

        
       
        let pPattern = document.createElement("p")
        let cardAside = document.createElement("div")
        let h4AndButton= document.createElement("div")
        let CardAsideH4 = document.createElement("h4")
        let trash = document.createElement("button")
        let spans = document.createElement("div")
        let enterprise = document.createElement("span")
        let location = document.createElement("span")
    
        pPattern.classList.add("pPattern")
        cardAside.classList.add("cardAside")
        h4AndButton.classList.add("h4AndButton")
        CardAsideH4.classList.add("CardAsideH4")
        trash.classList.add("trash")
        spans.classList.add("spans")
        enterprise.classList.add("enterprise")
        location.classList.add("location")

        pPattern.innerText="Você ainda não aplicou para nenhuma vaga"
        h4AndButton.innerText=element.title
        enterprise.innerText=element.enterprise
        location.innerText=element.location
        
        
            cardsAside.appendChild(cardAside)
            cardAside.append(h4AndButton,spans)
            h4AndButton.append(CardAsideH4,trash)
            spans.append(enterprise,location)
            

        trash.addEventListener("click",()=>{

            cardsAside.innerHTML=""

            arrSelected.splice(index,1)

            let arrSel = JSON.stringify(arrSelected)
            localStorage.setItem("PrefUser",arrSel)

            renderCardsSelected()

        })
    });
}

