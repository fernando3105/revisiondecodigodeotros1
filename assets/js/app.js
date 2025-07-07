const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Aquí el error se encuentra en el querySelector, ya que name es una clase y no una etiqueta html
// Se cambia a '.name' para seleccionar una clase
const $n = document.querySelector('.name');
// Aqui blog no es un id, es una clase, por lo que se debe cambiar a '.blog'
const $b = document.querySelector('.blog');
// En el html no existe un elemento con la clase 'location', se procede a agregar un elemento con esa clase
const $l = document.querySelector('.location');

// Aquí originalmente la función no era asíncrona, pero se necesita para usar await
// Se debe agregar el async antes de la función para que sea asíncrona
// Además, se debe agregar un try-catch para manejar errores
async function displayUser(username) {
  try {
    $n.textContent = 'cargando...';
    //await es solo para funciones asíncronas, entonces acá está el primer error
    const response = await fetch(`${usersEndpoint}/${username}`);
    //Acá no se está obteniendo data, se agrega await para esperar la respuesta
    const data = await response.json();
    console.log(data);
    // Acá se deben usar bacticks para hacer el manejo de las variables, en vez de comillas simples
    // Se realiza el cambio de comillas simples a bacticks
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  // Aquí agrega $ antes de n.textContent para que se refiera al elemento del DOM
  $n.textContent = `Algo salió mal: ${err}`
}

// Se borra el catch ya que se maneja dentro de la función displayUser
displayUser('stolinski');