const personTemplate = document.querySelector("#person");
const peopleContainer = document.querySelector("#show-data");

async function getApi() {
    
  const req = await fetch("https://randomuser.me/api?results=4");
  const resp = await req.json();
    

  for (const person of resp.results) {
    let clone = document.importNode(personTemplate.content, true);
    clone.querySelector(".image").src = person.picture.large;
    clone.querySelector(".email").textContent = person.email;
    clone.querySelector(".dob").textContent = person.dob.date;
    clone.querySelector(".address").textContent = person.location.country;
    clone.querySelector(".phone").textContent = person.phone;
    clone.querySelector(".password").textContent = person.login.password;
    peopleContainer.appendChild(clone);
  }
}
getApi();

