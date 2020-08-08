
const chat = document.querySelector('#chatbox');
const form = document.querySelector("form")
const input = document.querySelector("input")
const button = document.querySelector("button")

form.addEventListener("submit", chatSubmission)
function chatSubmission(stayHome){
  stayHome.preventDefault();
  const irene = ["Me", "Myself", "I"][Math.floor(Math.random() *3)]
    whatTheMessageSays(irene, input.value);
    form.reset();
}

const time = new Date().toLocaleTimeString();

let newMessage = false;
function whatTheMessageSays(sender, theText){
     if (!theText.length) return;
     newMessage++;

    const text = `<ul class="message" id ="${newMessage}">
                <li>${time}</li>
                <li class="sender">${sender}:</li>
                <li>${theText}</li>
                <li class="delete" onClick="deleteMe(${newMessage})">❌</li>
                </ul> `   
      
 chat.innerHTML += text;
 chat.scrollTop = chat.scrollHeight;
}

function deleteMe(newMessage){
    const text = document.getElementById(newMessage);
    text.remove();
}

button.addEventListener("click", getTheJoke)
function getTheJoke(){
fetch("https://api.icndb.com/jokes/random")
.then((Response) => Response.json())
.then((json) => whatTheMessageSays("This is my joke", json.value.joke));
}

