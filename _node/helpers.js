// module.exports.title = 'NODE';

// module.exports.title2 = 'NODE3';

//module.exports  is available in any file without actually including anyone doing anything

// module.exports.cal = function(){
//     console.log('hellow');

    //this is one of the ways we export data
// };

module.exports = {

    cal: function (val1, val2){
        return val1 + val2
    }
}