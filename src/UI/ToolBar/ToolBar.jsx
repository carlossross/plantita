import { CartWidget } from '../../components';
import './ToolBar.css';
export function ToolBar() {
	return (
		<div className='toolBar'>
			<h1>GameTienda</h1>
			<CartWidget />
		</div>
	);
}
