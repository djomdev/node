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
    
     console.log(payload.data);
 };

 WS.onopen = ()=>{

     displayTitle('CONNECTED TO SERVER');
 };

 WS.onclose = ()=>{
     displayTitle('CONNECTION CLOSED');
 };

 function displayTitle(title){
     document.querySelector('h1').innerHTML = title;
 }

 document.forms[0].onsubmit = ()=>{

     let input = document.getElementById('message');

    WS.send(input.value);

 };