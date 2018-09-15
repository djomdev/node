const axios = require('axios');
const username = 'djomdev'

axios.get('https://api.github.com/users/' + username).then((res)=>{

    console.log(res.data.blog);


}).catch((err)=>{
    console.log(err);
});
/**
 * make a request from github page
 * we're going to pul info from a user or a public info 
 * 
 * 
 */