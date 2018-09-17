/**
 * Create a connection. Once the connection is made, the browser or the application
 * 
 */
 const WS = new WebSocket('ws://localhost:3232');

    /**Message listener */
 WS.onmessage = (payload)=>{

    /**
     * payload is every data header's. Everything you can think of when transmitting 
     * information online.
     */
    
     displayMessages(payload.data);



 };

 WS.onopen = ()=>{

     displayTitle('CONNECTED TO SERVER');
 };

 WS.onclose = ()=>{
     displayTitle('DISCONECTED TO SERVER');
 };

 function displayTitle(title){
     document.querySelector('h1').innerHTML = title;
 }

function displayMessages(message) {

    let h1 = document.createElement('h1');
    h1.innerText = message;
    document.querySelector('div.messages').appendChild(h1);
}


 document.forms[0].onsubmit = ()=>{

     let input = document.getElementById('message');

    WS.send(input.value);

 };