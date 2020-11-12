const loader = document.querySelector('.loader');
const emoji = loader.querySelector('.emoji');

const emojis = ["🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚", "🕛", "🕜", "🕝", "🕞", "🕟", "🕠", "🕡", "🕢", "🕣", "🕤", "🕥", "🕦", "🕧"];

const interval = 1250;

const loadEmojis = (arr) => {

  let i = 1
  while(i > 0){
    setInterval(() => {
      emoji.innerText = arr.slice(i, i+1)
  }, interval);
  }
  loadEmojis(arr.slice(i))
  console.log(i)

}


const init = () => {
  loadEmojis(emojis);
 
}

init();



//works but too fast after the while loop
// const interval = 1250;

// const loadEmojis = (arr) => {

//     setInterval(() => {

//       let i = 1

//       emoji.innerText = arr.slice(i, i+1)
//     loadEmojis(arr.slice(i))
//     //emoji.innerText = arr[Math.floor(Math.random() * arr.length)];
//     console.log(i)

//   }, interval);

// }
// const init = () => {
//   loadEmojis(emojis);
 
// }

// init();



// const loadEmojis = (arr) => {
//       setInterval(() => {
//         let i = 0
//         while(i < arr.length){
//           emoji.innerText = arr[i];
//         i++
       
//         //console.log(emoji.innerText)
//         }
//     }, interval);
// }

// const init = () => {
//   loadEmojis(emojis);
 
// }

// init();




// const interval = 135;
// const loadEmojis = (arr) => {
//       setInterval(() => {
//         let i = 0;
//         if(i === arr.length-1){
//             i = 0
//             emoji.innerText = arr[i]
//             i++ 
//             console.log(emoji.innerText)
//         }
//         else if(i < arr.length){  
//             emoji.innerText = arr[i]
//             i++
//             console.log(emoji.innerText)
//         }
//     }, interval);
// }
//       const init = () => {
//       loadEmojis(emojis);
// }
// init();

// let i = 0;
// if(i === emojis.length-1){
//     i = 0
//     emoji.innerText = emojis[i]
//     i++ 
// }
// else(i < emojis.length){  
//     emoji.innerText = emojis[i]
//     i++
// }
// console.log(emoji.innerText)