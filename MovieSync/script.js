	
let btnAdd = document.querySelector('button');
let table = document.querySelector('table');
let user = document.querySelector('a');
let inputs = document.querySelectorAll('input');
 
let nameInput = document.querySelector('#name');
let cityInput = document.querySelector('#city');
let degreeInput = document.querySelector('#degree');
let id=0;
 
 
btnAdd.addEventListener('click', () => {
    let name = nameInput.value;
    let city = cityInput.value;
    let degree = degreeInput.value;
    let time = new Date();
    timestamp = time.toUTCString().slice(0,25);
    id=id+1;
  if(name==""){
    name="NA";
  }
   if(degree==""){
    degree="NA";
  }
    

 
    let template = `
                <tr>
                    <td>${name}</td>
                    <td>${id}</td>
                    <td>${city}</td>
                    <td>${degree}</td>
                    <td>${timestamp}</td>
                </tr>`;
 
document.querySelector("#popup").style.display="none";
    table.innerHTML += template;
    inputs.forEach(input => input.value = '');

});

user.addEventListener('click', () => {
    document.querySelector("#popup").style.display="flex";

});