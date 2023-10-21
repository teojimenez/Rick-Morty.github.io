const url = 'https://rickandmortyapi.com/api/character'

const container = document.querySelector('main')

const form = document.querySelector('.form')
const searchIn = document.querySelector('.search')

showCharacter(url)

function showCharacter(url)
{

    fetch(url)
    .then(answer => answer.json())
    .then(data =>{
        console.log(data.results)
        printCharacter(data.results)
    })
    .catch(error => console.log(error))
}

function printCharacter(data)
{
    container.innerHTML = ''
    //quitar los ya hechos
    data.forEach(character => {
        const{name,status,species,type,gender,origin,location,image} = character
        const elemCharac = document.createElement('div')
        elemCharac.classList.add('card')
        elemCharac.innerHTML = 
        `<img class="img" src="${image}" alt="">
            <h2 class="name">${name}</h2>
            <div class="info">
                <h2 class="name2">${name}</h2>
                <ul>
                    <li class="status">Status: ${status}</li>
                    <li class="species"> Specie: ${species}.</li>
                    <li class="type">Type: ${type}</li>
                    <li class="gender">Gender: ${gender}</li>
                    <li class="origin">Origin: ${origin.name}</li>
                    <li class="location">Location: ${location.name}</li>

                </ul>
            </div>`
        container.appendChild(elemCharac)
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const search = searchIn.value

    if(search)
    {
        showCharacter(url + '/?name=' + search)
    }
})
