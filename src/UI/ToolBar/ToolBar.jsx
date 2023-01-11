import { Link } from 'react-router-dom';
import { CartWidget } from '../../components';
import './ToolBar.css';

export function ToolBar() {
	return (
		<div className='toolBar'>
			<Link to='/'>
				<h1>GameTienda</h1>
			</Link>
			<CartWidget />
		</div>
	);
}
