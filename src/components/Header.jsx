import Footer from './Footer';

// Puedo crear mas de un componente en un archivo, en este caso no lo exporto como default sino como named (lo importo depues con las {})
export const Greet = () => {
	return (
		<h2 className='card'>Hola Rolling</h2>
	)
}

function Header(props) {
  return (
    <div className="card bg-color-lightskyblue">
      <h2>Header</h2>
      <p>{props.datos}</p>
      <Footer />
    </div>
  );
}

export default Header;
