import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// import named (no default), importo con las {}
// import {Greet} from './components/Header'
import "./styles/globals.css"

function App() {

	// console.log(Greet)
	const propConst = "Esta es una prop definida como constante."

	const propFunction = () => {
		console.log("Esta es una prop función o callback")
	}

	function
	 propFunction2() {
		console.log("Hola")
	}

	const objeto = {
		nombre:"nombre",
		apellido: "apellido"
	}

	const {nombre, apellido}= objeto;

	const nombre2 = objeto.nombre;
	const apellido2 = objeto.apellido;

	// console.log(nombre)
	// 	console.log(nombre2)


	// console.log(objeto)

	// propFunction()

  return (
    // Los componentes de React solo pueden tener UN padre, deben estar encerrados en un solo tag, adentro pueden tener lo que se necesite pero encerrado siempre en UN padre.
    // El tag HTML <></> se llama Fragment o fragmento, no tiene valor a nivel HTML pero si es un nodo del DOM.
    <div className='card bg-color-lightpink'>
			<article>
				<h2>App</h2>
			</article>
      <Header datos={propConst} />
			<Main elNombreQueYoQuiera="Esta es una prop directa" otraProp="Esta es OTRA prop directa" />
      <Footer propFunction={propFunction2} />
    </div>
  );
}

export default App;
