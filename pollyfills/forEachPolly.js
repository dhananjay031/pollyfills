//polyfills for foreach 

function forEach(callback){
    for(var i = 0; i < this.length; i++){
        callback(this[i], i, this);
    }
}

Array.prototype.forEach = forEach;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

numbers.forEach(function(value, index, array){
    // console.log(value, index, array);
});

console.log('abcd');


// will write the polyfills for map, filter and reduce functions

// but lets see first how all functions works



// all three methods runs on an array
//map first

const mapResult= numbers.map((num,ind,arr)=>{
   return num*2;
});

console.log(mapResult,'mapresult');


// flter function
 
const filterResult = numbers.filter((num,ind,arr)=>{
    return num%2 === 0;
})

console.log(filterResult,'filterres');


// reduce functin


const reduceResult = numbers.reduce((acc,num,ind,arr)=>{
     return acc + num;
},0)

console.log(reduceResult,'reduce');


