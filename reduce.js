  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:

const nums = [0, 1, 2, 3, 4, 5];

let sum = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExp = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0); // since we're dealing with objects, we grab what we want to sum with dot notation
console.log(totalExp); // 16 years of experience!

// Grouping by a property, and totaling it too. Initial value is empty object
let expByProf = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});

console.log(expByProf);

/* Let's try to group all members by profession!
   We want an object which contains professions as
   the keys and an array with all names of those with
   that profession as the values. */
let namesByProf = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = [];
    acc[key].push(curr.name);
  } else {
    acc[key].push(curr.name);
  }
  return acc;
}, {});

// Glorious success!!!
console.log(namesByProf);