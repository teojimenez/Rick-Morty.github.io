const url = 'https://rickandmortyapi.com/api/character'

const contenedor = document.querySelector('main')

const formulario = document.querySelector('.form')
const buscar = document.querySelector('.buscar')

verCharacter(url)

function verCharacter(url)
{

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos =>{
        console.log(datos.results)
        imprimirCharacter(datos.results)
    })
    .catch(error => console.log(error))
}

function imprimirCharacter(datos)
{
    contenedor.innerHTML = ''
    //quitar los ya hechos
    datos.forEach(character => {
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
        contenedor.appendChild(elemCharac)
    })
}


formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const busqueda = buscar.value

    if(busqueda)
    {
        verCharacter(url + '/?name=' + busqueda)
    }
})

