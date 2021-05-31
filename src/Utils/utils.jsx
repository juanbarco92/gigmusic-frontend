// ----- Verifica si el diccionario esta vacio
export const isEmpty = (obj) => {
	return Object.keys(obj).length === 0
}

// ----- getter y setter de token a local
export const setToken = (userToken) => {
  localStorage.setItem('token', JSON.stringify(userToken))
}
export const getToken = () => {
  const tokenString = localStorage.getItem('token')
  const userToken = JSON.parse(tokenString)
  return userToken
}
export const delToken = () => {
  localStorage.removeItem('token')
}

// ----- tipos modificables desde navmusic
// Color Acorde
export const ColAc = [{'value':'inherit', 'name': 'Default'}, 
{'value':'blue', 'name': 'Azul'}, 
{'value':'green', 'name': 'Verde'}, 
{'value':'red', 'name': 'Rojo'}]

// Color Fuente
export const ColFu = [{'value':'inherit', 'name': 'Default'}, 
{'value':'blue', 'name': 'Azul'}, 
{'value':'green', 'name': 'Verde'}, 
{'value':'red', 'name': 'Rojo'}]

// Tipografia
export const SelTi = [{'value':'inherit', 'name': 'Default'}, 
{'value':'Verdana', 'name': 'Verdana'}]

// Lista de instrumentos
export const lInstrumentos = [
	{'nombre': 'Guitarra Acustica', 'img': 'https://http2.mlstatic.com/D_NQ_NP_653834-MCO31121764137_062019-O.webp'},
  {'nombre': 'Guitarra', 'img': 'https://http2.mlstatic.com/D_NQ_NP_653834-MCO31121764137_062019-O.webp'}
]