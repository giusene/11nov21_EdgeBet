export function sportsMenuGen(sportsApi) {
    sportsApi.forEach(element => {
        if (element['group'] !== testElement && element['active']) {
            testElement = element['group'];
            const menuLi = document.createElement('li');
            menuLi.textContent = element['group'];
            let subMenu = document.createElement('div');
            subMenu.setAttribute('id', `${element['group'].replace(' ', '')}`)
            subMenu.className = 'sub_menu';
            menuUl.appendChild(menuLi);
            menuLi.appendChild(subMenu);
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
            let subDiv = event.target.children[0]
            subDiv.classList.toggle('open')
        })
    }
}

let testElement;
const menuUl = document.querySelector('.menu');
