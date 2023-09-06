//filter ka pollyFill


const numbers = [1,2,3,4,6];
numbers.myFilter = myFilter;

function myFilter(callback){
    let j=0;
    var arr =[];
    for(let i=0; i < this.length; i++){
        let res = callback(this[i],i,this);
        if(res)
        arr[j++] = this[i];
    }
    return arr;
}


const filterResult = numbers.myFilter((num)=>{
   return num % 2 === 0;
});

console.log(filterResult,'filtered array');


// happyyyyyy...