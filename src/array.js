import Man from "./man.js";
import Woman from "./woman.js";

const people = [];
for (let i = 0; i < 15; i++) {
  const name = `Person ${i + 1}`;
  const age = Math.floor(Math.random() * 40) + 20;
  const weight = Math.floor(Math.random() * 80) + 30;

  if (!(i % 2)) people.push(new Man(name, age, weight));
  else people.push(new Woman(name, age, weight));
}
console.log(people)
export default people; 