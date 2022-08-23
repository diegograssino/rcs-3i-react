const Main = (props) => {
	const variableInterna = "Variable Interna del componente"

  return (
    <div className="card bg-color-lightseagreen">
      <h2>Main</h2>
      <p>
				{props.otraProp}
      </p>
			<p>{ variableInterna }</p>
    </div>
  );
};

export default Main;
