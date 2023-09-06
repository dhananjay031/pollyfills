//polyfills for foreach 

function forEach(callback){
    for(var i = 0; i < this.length; i++){
        callback(this[i], i, this);
    }
}

Array.prototype.forEach = forEach;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

numbers.forEach(function(value, index, array){
    console.log(value, index, array);
});


// happy 