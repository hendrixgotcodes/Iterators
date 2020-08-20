function newIterator(names){
    let nextName = 0;

    return{
        next: function(){

            return nextName <= names.length ? {value: names[nextName++], done:false} : {done: true};
        }
    }

}


let talkatives = ["John", "Louis", "DJ", "Samuel Agyei", "Wilson","Joel"];

const getTalkatives = newIterator(talkatives);

console.log(getTalkatives.next());
console.log(getTalkatives.next());
console.log(getTalkatives.next());
console.log(getTalkatives.next());
console.log(getTalkatives.next());
console.log(getTalkatives.next());
console.log(getTalkatives.next());
console.log(getTalkatives.next());
