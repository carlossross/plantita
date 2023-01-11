import { useLocation } from 'react-router-dom';
import './Banner.css';
export function Banner() {
	const { pathname } = useLocation();
	console.log(pathname);
	return (
		<div className='banner'>
			{/* <img className='banner__img' src='/assets/xbox-logo.jpeg' alt='Banner' /> */}
			{/* <img className='banner__img' src='/assets/nintendo-logo.jpeg' alt='Banner' /> */}
			{/* <img className='banner__img' src='/assets/ps-logo.jpeg' alt='Banner' /> */}
			<img className='banner__img' src='/assets/3Brands.jpeg' alt='Banner' />
		</div>
	);
}
