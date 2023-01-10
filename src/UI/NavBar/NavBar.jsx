import './NavBar.css';

export const NavBar = () => {
	return (
		<div className='navbar'>
			<nav className='navbar__menu'>
				<ul>
					<li>
						<a>Nintendo</a>
					</li>
					<li>
						<a>Play Station</a>
					</li>
					<li>
						<a>XBox</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};
