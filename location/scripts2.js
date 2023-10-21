const url = 'https://rickandmortyapi.com/api/location'

const container = document.querySelector('main')

const form = document.querySelector('.form')
const searchIn = document.querySelector('.search')

showLocation(url)

function showLocation(url)
{
    fetch(url)
    .then(answer => answer.json())
    .then(data =>{
        console.log(data.results)
        printLocation(data.results)
    })
    .catch(error => console.log(error))
}

function printLocation(data) {
    container.innerHTML = '';
  
    data.forEach(location => {
      const { name, type, dimension, residents } = location;
  
      const elemLoc = document.createElement('div');
      elemLoc.classList.add('card');
      elemLoc.innerHTML = `
        <h1>${name}</h1>
        <div class="info">
          <ul>
            <li><h2>${type}</h2></li>
            <li><h2>${dimension}</h2></li>
            <li><h2 class="residents">Residents:</h2></li>
          </ul>
          <div class="list"></div>
        </div>`;
  
      const list = elemLoc.querySelector('.list');
  
      residents.forEach(miniCharacter => {
        const img = document.createElement('img');
        img.src = miniCharacter.replace('/character/', '/character/avatar/') + '.jpeg';
        list.appendChild(img);
      });
  
      container.appendChild(elemLoc);
    });
  }


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const search = searchIn.value

    if(search)
    {
        showLocation(url + '/?name=' + search)
    }
})