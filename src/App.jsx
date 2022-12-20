import './App.css';
import { ItemListContainer } from './Pages';
import { NavBar } from './UI';

function App() {
	const name = 'Carlos';
	return (
		<div className='wrapper'>
			<NavBar />
			<main className='content'>
				<ItemListContainer name={name}/>
			</main>
		</div>
	);
}

export default App;
