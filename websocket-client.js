/**
 * Create a connection. Once the connection is made, the browser or the application
 * 
 */

 const WS = new WebSocket('ws://localhost:3232');

 document.forms[0].onsubmit = ()=>{

     let input = document.getElementById('message');

    WS.send(input.value);
    
 };