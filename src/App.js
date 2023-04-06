import './App.css';
import ComponentDidMount from './components/ComponentDidMount';
import ComponentDidUpdate from './components/ComponentDidUpdate';
import Container from './components/Container';

function App() {
	return (
		<div className="App">
			<Container />
			<ComponentDidMount />
			<ComponentDidUpdate />
		</div>
	);
}

export default App;
