const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks

  // Array.prototype.some() // is at least one person 19 or older?

  const adult = people.some(function(person){
    const year = (new Date()).getFullYear();
    if(year - person.year >= 19){
      return true;
    }
  });


const isAdult2 = people.some(person =>((new Date()).getFullYear()) - person.yera >= 19);

  console.log(adult);
  console.log(isAdult2);

  // Array.prototype.every() // is everyone 19 or older?

  const everyPerson =  people.every(person =>((new Date()).getFullYear())- person.year >= 19);
  console.log(everyPerson);
  // Array.prototype.find()

const comment = comments.find(function(comment){
  if(comment.id === 823423){
    return true;
  }
});

const comment2 = comments.find(comment=> comment.id === 823423)
console.log(comment);
console.log(comment2);


  // Find is like filter, but instead returns just the one you are looking for

  // find the comment with the ID of 823423


  // Array.prototype.findIndex()

  // Find the comment with this ID
function findID(comments, id){
  const find = comments.find((obj)=>obj.id ===this.id);
  return find;

}
  // delete the comment with the ID of 823423
function removeWIhtID(comments, id){
    const objWIthID = comments.findIndex((obj)=>obj.id === id);
    if(objWIthID !==-1){
        comments.splice(objWIthID, 1);
    }
    return comments;
}

removeWIhtID(comments,823423);

console.log(comments);


const id = comments.findIndex(comment => comment.id === 823423);
comments.splice(id, 1);
console.log(id);
const newComments = [
  ...comments.slice(0,id),
 ...comments.slice(id+1)
];
console.log(newComments);