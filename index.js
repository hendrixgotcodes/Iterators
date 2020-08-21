function newIterator(names){
    let currentName = 0;

    return{
        next: function(){
            return currentName <= names.length ? {value: names[currentName++], done: false} : {done: true};
        }
    }
}

let talkatives = ["John", "Louis", "DJ", "Samuel Agyei", "Wilson","Joel"];

const getTalkatives = newIterator(talkatives);

console.log(getTalkatives.next());
console.log(getTalkatives.next());
console.log(getTalkatives.next());
console.log(getTalkatives.next());

