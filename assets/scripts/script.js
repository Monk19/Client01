const fDiv = document.querySelector('.child1').lastElementChild.firstElementChild.firstElementChild
const Name = "Hey There i am Ravi and i am a WebDeveloper";
var c = 0;
const writeSpeed =100
console.log(fDiv)
function writeDeveloper() {
    if (c < Name.length) {
        fDiv.innerHTML += Name[c]
        c++;
        setTimeout(writeDeveloper,writeSpeed)
    }
}
window.onload(writeDeveloper())