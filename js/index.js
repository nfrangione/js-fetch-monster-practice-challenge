const monsterURL = 'http://localhost:3000/monsters/?_limit=50&_page=1';

document.addEventListener('DOMContentLoaded', () => {
    getThoseMonsters(monsterURL);
})

function getThoseMonsters (url) {
    fetch(url)
    .then(res => res.json())
    .then(monsters => {
        //build container for monster & add monster info to it
        //append container to DOM
        monsters.forEach(monster => {
            const newMon = addMonsterToContainer(monster, buildMonster())
            document.getElementById('monster-container').append(newMon);
        })
    })
}

function addMonsterToContainer(mons, cont) {
    cont.id = mons.id;
    cont.querySelector('h2').textContent = mons.name;
    cont.querySelector('h4').textContent = mons.age;
    cont.querySelector('p').textContent = mons.description;
    return cont;
}

function buildMonster () {
    const div = document.createElement('div');
    const name = document.createElement('h2');
    const age = document.createElement('h4');
    const description = document.createElement('p');
    div.append(name, age, description);
    return div;
}