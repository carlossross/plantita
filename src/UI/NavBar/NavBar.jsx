import { CartWidget } from '../../components';
import './NavBar.css';

export const NavBar = () => {
	return (
		<div className='navbar'>
			<div className='navbar__menu'>
				<ul>
					<li>
						<a>Home</a>
					</li>
					<li>
						<a>Cart</a>
					</li>
					<li>
						<a>About</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
