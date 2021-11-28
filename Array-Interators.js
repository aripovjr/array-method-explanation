const myFriends = [
    {name: 'Murad', age: 21, profession: 'Dentist'},
    {name: 'Bilal', age: 21, profession: 'Business Manager'},
    {name: 'Talib', age: 20, profession: 'Enterpeneur'},
    {name: 'Jasur', age: 20, profession: 'IT Businessman'}
]
//display my friends with for loop
for(let i=0; i<myFriends.length; i++){
    console.log(`${myFriends[i].name} is ${myFriends[i].age} years old and he is ${myFriends[i].profession}`)
}
//but we have method which is more helpful
console.log('This is forEach')
//here person argument in arrow function gives us an access to our myFriend array
myFriends.forEach(person=>console.log(person.name.toUpperCase()))//by this we are accessing for each item in our array 
//we can do it with for loop as well but i think, forEach method is much better than loop
//however we have another way which is really one of the useful methods
console.log('This is map() method')
//map method creates a new array populated the result of calling a provided function on every element in the calling array
const newArrayforMapMethod = myFriends.map(friend=>{
    console.log(`${friend.name.toLowerCase()} is ${friend.age} years old, he is ${friend.profession}`)
})

//so lets take all names in our array and place it into a new array with the help of map method
const names = myFriends.map(person=>person.name)
console.log(names)
//so now we have all names in one new array which is 'names'
//let me explain 
//we create new array which is 'names'
//we accessed to prototype MAP method of our old array 'myFriends'
//we assigned it to our new array and in map method we have callback function
//to access to the array we have to pass it as an argument under any name in our case i chose 'person'
//so i could've coded as follows...
/*'myFriends.map(function (person){
    person.name
   })' 
but we can make it less and looks clear as well
by 'person => person.name'
see how beautiful it looks in one line, isn't it
*/
//by this we could take all names from our old array into new one by its prototype with MAP method
//
