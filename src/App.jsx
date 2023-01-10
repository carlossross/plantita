import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Banner, NavBar, ToolBar } from './ui';
import { ItemListView } from './views';

function App() {
	return (
		<>
			<ToolBar />
			<div className='wrapper'>
				<Router>
					<Banner />
					<NavBar />
					<main className='content'>
						<Routes>
							<Route path='/' element={<ItemListView />} />
							<Route
								path='/nintendo'
								element={<ItemListView brand='nintendo' />}
							/>
							<Route
								path='/playstation'
								element={<ItemListView brand='playstation' />}
							/>
							<Route
								path='/xbox'
								element={<ItemListView brand='xbox' />}
							/>
						</Routes>
					</main>
				</Router>
			</div>
		</>
	);
}

export default App;
