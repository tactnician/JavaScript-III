/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is the default behavour where this references the window or global/console
* 2. Implicit binding occors within the constructor function and where this references the proporties of the constructor function. 
* 3. Explicit binding is used to bind a function to a constructor and uses fuction methods call, apply, and bind. 
        It occurs inside of the function when referencing a parent object and outside when refrerecning a constructor. 
* 4. The new keyword binds a newly constructed object to the function constructor from which it inherits it's properties. 
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this); 
// code example for Window Binding


// Principle 2
function Ninja(rank, weapon, element){  
    this.rank = rank,
    this.weapon = weapon,
    this.element = element
}
// code example for Implicit Binding


// Principle 3
const shinobi = new Ninja('jonin', 'staff', 'wood');
// code example for New Binding


// Principle 4
const skillz = ['vanish ', 'fight ', 'spy'];

function listSkillz(skillSet){
    console.log(`your skillz are ${skillSet}`);
};

listSkillz.call(shinobi, skillz);
// code example for Explicit Binding

console.log(shinobi.listSkillz);