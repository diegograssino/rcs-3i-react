import "../styles/globals.css"

const Footer = ({propFunction}) => {
	propFunction();
  return (
    <div className="card bg-color-lightcoral">
      <h2>Footer</h2>
      <p>
        Otro dev diferente se ocupa de este
        componente
      </p>
    </div>
  );
};

export default Footer;
