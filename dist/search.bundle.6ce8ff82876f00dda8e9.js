(()=>{"use strict";const e=class{constructor(e,t,n,o){this.name=e,this.age=t,this.weight=n,this.gender=o}getInfo(e){return null==e?this:this[e]}greeting(){return"Hi!"}},t=class extends e{constructor(e,t,n){super(e,t,n,"male")}greeting(){return`${super.greeting()} My name ${this.name}. I'm ${this.age} years old.`}},n=class extends e{constructor(e,t,n){super(e,t,n,"female")}greeting(){return`${super.greeting()} My name ${this.name}.`}},o=[];for(let e=0;e<15;e++){const r=`Person ${e+1}`,s=Math.floor(40*Math.random())+20,c=Math.floor(80*Math.random())+30;e%2?o.push(new n(r,s,c)):o.push(new t(r,s,c))}console.log(o);const r=o;function s(e,t,n){return new Promise(((o,r)=>{setTimeout((()=>{const s=e.filter((e=>e[t]==n));s.length>0?o(s):r(`За пошуком за умовою "${t}: ${n}" не знайдено.`)}),2e3)}))}s(r,"age",45).then((e=>{console.log("Результати пошуку:",e)})).catch((e=>{console.error("Помилка:",e)}));const c=s;let g=document.getElementById("search");g&&(g.onclick=()=>(()=>{const e=document.getElementById("searchField").value,t=document.getElementById("searchValue").value,n=document.getElementById("searchResult");e&&t?c(r,e,t).then((e=>{n.innerHTML=`Результати пошуку:<br>${e.map((e=>JSON.stringify(e))).join(" ")}`})).catch((e=>{n.textContent=`Помилка: ${e}`})):n.textContent="Заповніть обидва поля"})()),c(r,"name","Person 5").then((e=>(console.log("Результати пошуку:",e),e))).then((e=>e.forEach((e=>{console.log(e.greeting(),e.getInfo("gender"))})))).catch((e=>console.error("Помилка:",e))),c(r,"age",35).then((e=>(console.log("Результати пошуку:",e),e))).then((e=>e.forEach((e=>{console.log(e.greeting(),e.getInfo("gender"))})))).catch((e=>console.error("Помилка:",e))),c(r,"weight",55).then((e=>(console.log("Результати пошуку:",e),e))).then((e=>e.forEach((e=>{console.log(e.greeting(),e.getInfo("gender"))})))).catch((e=>console.error("Помилка:",e)))})();