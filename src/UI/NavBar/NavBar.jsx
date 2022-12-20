import { CartWidget } from '../../components';
import './NavBar.css';

export const NavBar = () => {
	return (
		<div className='navbar'>
			<div className='navbar__logo'>
				<span className='brand'>MiPlantita</span>
			</div>
			<div className='navbar__menu'>
				<ul>
					<li>Home</li>
					<li>Cart</li>
					<li>About</li>
				</ul>
			</div>
			<div className='navbar__tools'>
				<CartWidget />
			</div>
		</div>
	);
};
