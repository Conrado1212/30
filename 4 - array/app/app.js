const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];


  //1. Filter list of inventors for those who were born in the 1500;

const yearCheck = inventors.filter(xd);
const yearCheck2 = inventors.filter(xd1 => (xd1.year >= 1500 && xd1.year < 1600 ));
function xd(age){
 return   age.year > 1500 && age.year < 1600;

}
console.table(yearCheck);
console.table(yearCheck2);

//2.Map() give us an array of the inventory first and last names


inventors.map(getFullName)

function getFullName(inv){
    return [inv.first,inv.last].join(" ");
}
console.log('Map', inventors.map(getFullName));

// Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest

   const sorted = inventors.sort((a,b)=> a.year-b.year);

   console.log('Sorted', sorted);



    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?


    const reducek = inventors.reduce((sum, inv)=> sum + (inv.passed - inv.year), 0);

    console.log('Reduce', reducek);



     // 5. Sort the inventors by years lived


     const yearsManiek = inventors.map(inv =>{
         return{
             name: inv.first,
             surname: inv.last,
             yearL: inv.passed - inv.year
         };
     })

    const sortable =  yearsManiek.sort((a,b)=> b.yearL - a.yearL);
     
     console.log('Test sortek', sortable);


     // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


     // 7. sort Exercise
    // Sort the people alphabetically by last name

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];