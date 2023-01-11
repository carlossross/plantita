import { NavLink } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
	let activeStyle = {
		textDecoration: 'underline',
	};

	return (
		<div className='navbar'>
			<nav className='navbar__menu'>
				<ul>
					<li>
						<NavLink
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
							to='/nintendo'
						>
							Nintendo
						</NavLink>
					</li>
					<li>
						<NavLink
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
							to='playstation'
						>
							Play Station
						</NavLink>
					</li>
					<li>
						<NavLink
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
							to='xbox'
						>
							XBox
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};
