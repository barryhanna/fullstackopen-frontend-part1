import './App.css';

const Hello = (props) => {
	return (
		<div>
			<p>
				Hello, {props.name}, you are {props.age} years old
			</p>
		</div>
	);
};

function App() {
	const name = 'Peter';
	const age = 10;

	return (
		<div className="App">
			<Hello name="Maya" age={26 + 10} />
			<Hello name={name} age={age} />
		</div>
	);
}

export default App;
