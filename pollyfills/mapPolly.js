// map ka pollyfill


const numbers = [1,2,3,4,5,6];
numbers.myMap = myMap;
function myMap(callback){
    var arr = [];
    for(let i=0; i < this.length; i++){
        arr[i] = callback(this[i],i,this);
    } 
    return arr;
}

const myMapResult = numbers.myMap((num)=>{
    return num*2; 
})

console.log(myMapResult,'mymap');



