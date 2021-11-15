import { getEvents } from "./getdata.js";
import { getSports } from "./getdata.js";


export function sportsMenuGen(sportsApi) {
    sportsApi.forEach(element => {
        if (element['group'] !== testElement && element['active']) {
            testElement = element['group'];
            const menuLi = document.createElement('li');
            menuLi.textContent = element['group'];
            menuLi.setAttribute('name', element['group']);
            let subMenu = document.createElement('div');
            subMenu.setAttribute('id', `${element['group'].replace(' ', '')}`)
            subMenu.setAttribute('name', element['group']);
            subMenu.className = 'sub_menu';
            menuUl.appendChild(menuLi);
            menuUl.appendChild(subMenu);
        }
    });
    subMenuGen(sportsApi);
} 

function subMenuGen(sportsApi) {
    sportsApi.forEach(element => {
        if (element['active']) {
            const subMenu = document.getElementById(`${element['group'].replace(' ', '')}`);
            const subMenuA = document.createElement('a');
            subMenuA.textContent = element['title'];
            subMenuA.setAttribute('key', element['key']);
            subMenuA.setAttribute('group', element['group']);
            subMenuA.setAttribute('title', element['title']);
            subMenu.appendChild(subMenuA);
        }
    })
    subMenuOpen()
}

function subMenuOpen() {
    const lis = menuUl.querySelectorAll('li');
    for (let li of lis) {
        li.addEventListener('click', (event) => {
            let subDiv = document.getElementById(`${event.target.attributes.name.value.replace(' ', '')}`);
            subDiv.classList.toggle('open')
        })
    }
    sportsLink()
}

function sportsLink() {
    const aBtn = menuUl.querySelectorAll('a');
    for (let aSingle of aBtn) {
        aSingle.addEventListener('click', (event) => {
            getEvents(event.target.attributes[0].value)
            console.log(event.target.attributes[0].value)
        })
    }
}

let testElement;
const menuUl = document.querySelector('.menu');
