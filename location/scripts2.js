const url = 'https://rickandmortyapi.com/api/location'

const contenedor = document.querySelector('main')

const formulario = document.querySelector('.form')
const buscar = document.querySelector('.buscar')

verLocation(url)

function verLocation(url)
{
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos =>{
        console.log(datos.results)
        imprimirLocation(datos.results)
    })
    .catch(error => console.log(error))
}

function imprimirLocation(datos) {
    contenedor.innerHTML = '';
  
    datos.forEach(location => {
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
  
      contenedor.appendChild(elemLoc);
    });
  }


formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const busqueda = buscar.value

    if(busqueda)
    {
        verLocation(url + '/?name=' + busqueda)
    }
})