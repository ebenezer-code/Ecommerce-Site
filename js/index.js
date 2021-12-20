const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav_list");
const links = document.querySelectorAll(".nav-links li");
const navItems = document.querySelectorAll(".nav-item");

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  navLinks.classList.toggle("open");
  navLinks.style.transition = `all 1s ease-in-out`
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
 
for(let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('mouseover', () => {
      navItems[i].classList.toggle('active');
  
  })
  navItems[i].addEventListener('mouseout', () => {
    console.log('hello');
      navItems[i].classList.remove('active');
  
  })

}

const person = [
  {name: 'sally', age: 24},
  {name: "vally", age: 26},
  {name: "rame", age: 26},
  {name: "jyle", age: 24}
]
const result = person.reduce((newAge, person) => {
   const age = person.age
   if(newAge[age] == null) newAge[age] = []
   newAge[age].push(person)
   return newAge

},{})
console.log(result);