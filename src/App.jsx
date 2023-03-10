import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Banner, NavBar, ToolBar } from './ui';
import { ItemDetailView, ItemListView } from './views';

function App() {
	return (
		<>
			<Router>
				<ToolBar />
				<div className='wrapper'>
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
							<Route path='/xbox' element={<ItemListView brand='xbox' />} />
							<Route path=':brand/detail/:id' element={<ItemDetailView />} />
						</Routes>
					</main>
				</div>
			</Router>
		</>
	);
}

export default App;
