import './App.css';
import { ItemListContainer } from './Pages';
import { NavBar } from './UI';
import { Banner } from './UI/Banner/Banner';
import { ToolBar } from './UI/ToolBar/ToolBar';

function App() {
	const name = 'Carlos';
	return (
		<div className='wrapper'>
			<ToolBar/>
			<Banner/>
			<NavBar />
			<main className='content'>
				{/* <ItemListContainer name={name}/> */}
			</main>
		</div>
	);
}

export default App;
