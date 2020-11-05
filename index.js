/**********************  loader ***********************/
const loader = document.querySelector('.preload');
const emoji = loader.querySelector('.emoji');

const emojis = ["🕐", "🕜", "🕑","🕝", "🕒", "🕞", "🕓", "🕟", "🕔", "🕠", "🕕", "🕡", "🕖", "🕢",  "🕗", "🕣", "🕘", "🕤", "🕙",  "🕥", "🕚", "🕦",  "🕛", "🕧"];

const interval = 500;

const loadEmojis = (arr) => {

      setInterval(() => {
        let i = 0
        while(i < arr.length){
        emoji.innerText = arr[i]; 
        i++
        console.log(i)
        }
    }, interval);
}

        //console.log(Math.floor(Math.random() * arr.length))
       // console.log(Math.randomOrder())

const init = () => {
  loadEmojis(emojis);
 
}

init();

//loader stopper is located in the initial fetch 



// if(arrIndexNum === quoteArr.length-1){
//     arrIndexNum = 0
//     renderOneQuote(quoteArr[arrIndexNum])
//     arrIndexNum++ 
// }
// else if(arrIndexNum < quoteArr.length){  
//     renderOneQuote(quoteArr[arrIndexNum])
//     arrIndexNum++
// }

/**********************  DOM Elements  ***********************/
//const adapter = new APIAdapter("https://one-quote-at-a-time.herokuapp.com/api/v1/quotes")

let addQuote = false;

//console.log(addQuote)
//console.log("successss!!!")

const quoteDivcard = document.querySelector("#quote-card-frame")
const addBtn = document.querySelector(".pencil")
let emptLikeBtn = document.querySelector(".empty-heart")
const fullLikeBtn = document.querySelector(".full-heart")
const delBtn = document.querySelector(".trash")

const quoteFormContainer = document.querySelector(".container")
const quoteForm = document.querySelector(".add-quote-form")

const wholePage = document //!!!!!******** is this okay???????????????

let request = "https://one-quote-at-a-time.herokuapp.com/api/v1/quotes/"




//Each page click, each quote 
let quoteArr = []
let arrIndexNum = 0


/****************** FETCH  Initial Render  ******************/
fetch(request)
    .then(r => r.json())
    .then(data => {
       // console.log(data)
       document.querySelector(".preload").style.display = "none"//stop the load 

       quoteArr = data

        renderOneQuote(quoteArr[arrIndexNum])  

        // data.forEach(eachObj => {
        //   renderOneQuote(eachObj)
    // }
    //}
    //)
})



/*********************** ADD A QUOTE ***************************/
/*********************** FETCH CREATE ***************************/
/*************  Event Handler :: gather form submit data  **************/
quoteForm.addEventListener("submit", e => {
    e.preventDefault()

    const quoteObj = {
        content: e.target.content.value,
        author: e.target.author.value,
        likes: 0
        }
    //console.log(quoteObj)

    fetch("http://localhost:3000/api/v1/quotes/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(quoteObj)
        })
        .then(r => r.json())
        .then(actualNewQuote => {
           // console.log(quoteObj)
           // console.log(actualNewQuote)
            quoteArr.push(actualNewQuote)
            //console.log(quoteArr)
            // renderOneQuote(quoteObj) ////do i not need this???????
        })
  })


/*********************** QUOTE LIKES ***************************/
//************************ FETCH UPDATE *****************************/
wholePage.addEventListener("click", e => {

   // console.log("likes",quoteArr[arrIndexNum].likes)
    if(!quoteArr[arrIndexNum].likes){ //null and 0 
        emptLikeBtn.innerHTML =  "♡" //emp
    }else{
        emptLikeBtn.innerHTML = "❤️️"
    }


    // ******* like card ********/
    if (e.target.className === "empty-heart"){ 
        //console.log(" <3  <3 ")
        //debugger
        const cardFrame = e.target.closest("#card") 
        const quoteCard = cardFrame.querySelector(".quote-card")
        let quoteId = quoteCard.dataset.id
    
        
        //console.log(quoteCard)//false???
        quoteArr[arrIndexNum].likes = quoteArr[arrIndexNum].likes

        if( e.target.innerHTML === "♡" ){
        // if( quoteArr[arrIndexNum].likes === 0 ){
            e.target.innerHTML =  "❤️️" //emp
            quoteArr[arrIndexNum].likes = 1
        //console.log(currentNum)
        }else{
            e.target.innerHTML = "♡"
            quoteArr[arrIndexNum].likes = 0
        }
        //console.log(currentNum) 

        fetch(request + quoteId, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json",//update the obj
        },
        body: JSON.stringify({
            likes: quoteArr[arrIndexNum].likes //HOW CAN I CHECK ??? rails c ?? postman
        })
        })
    }


// *** DELETE card *** //
    else if(e.target.className === "trash"){
        console.log(":-D")
        //debugger

        const cardFrame = e.target.closest("#card") 
        const quoteCard = cardFrame.querySelector(".quote-card")
        let quoteId = quoteCard.dataset.id

        quoteCard.remove()

        fetch(request + quoteId, {
            method: 'DELETE',
        })


        quoteArr = quoteArr.filter (quote => {
            if(parseInt(quoteId) !== quote.id){
                return quote 
            }
        })
        //debugger
        console.log(quoteArr)
    }



    // ** buttons to not change ** //
    else if(e.target.className === "pencil"){
        console.log(":-D")
    }
    //debugger
    else if(e.target.className === "add-quote-form"){ ///i don't think this is working?
        console.log("form")
    }




    // *** CLICK ANYWHERE => NEXT QUOTE *** //
    //stretch function: random order
    else if(e.target.className === "quote-card-frame" || e.target.className === "quote-card"|| e.target.nodeName === "h1" || e.target.nodeName === "p" ){
    
        //debugger
        
       // console.log("lez go")
        //console.log(" <3 *** <3 ")
        
        if(arrIndexNum === quoteArr.length-1){
            arrIndexNum = 0
            renderOneQuote(quoteArr[arrIndexNum])
            arrIndexNum++ 
        }
        else if(arrIndexNum < quoteArr.length){  
            renderOneQuote(quoteArr[arrIndexNum])
            arrIndexNum++
        }
    }
})




/****************************  Render Helpers  ***************************/
function renderOneQuote(eachQuoteObj){
    //console.log(eachQuoteObj.id)
   // console.log(eachQuoteObj.content)
    quoteDivcard.innerHTML = ``//empty the quoteDivcard first!

    const cardFrame = document.createElement("div")
    cardFrame.classList.add("quote-card")
    
    cardFrame.dataset.id = eachQuoteObj.id //for fetch 2 
    cardFrame.dataset.reiIanJack = "nice guys"//<div class="card" data-id="2" data-rei="nice guy">

    //** img */
    // const img = document.createElement("img")
    // img.src = eachQuoteObj.image
    // cardFrame.append(img)

    /** quote */
    const h1 = document.createElement("h1")
    h1.innerHTML = eachQuoteObj.content
    cardFrame.append(h1)


    /** author */
    const p = document.createElement("p")
    p.innerHTML = `-${eachQuoteObj.author}`
    cardFrame.append(p)

    quoteDivcard.append(cardFrame)
}







//********* when pencil Btn gets clicked, show quoteFormContainer ******//
addBtn.addEventListener("click", (e) => {
    e.preventDefault()
    //console.log(addQuote) //false(currently)
    addQuote = !addQuote //true //if pencilBtn clicked, then turn true
    console.log(addQuote)//true (now it is)

    if(addQuote){ //if true
      quoteFormContainer.style.display = "block" //block Element is rendered as a block-level element
    } else { //if false
      quoteFormContainer.style.display = "none"// element will not be displayed
    }
})

