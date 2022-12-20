import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CartWidget.css';

export const CartWidget = () => {
	return (
		<button className='notification__button'>
			<FontAwesomeIcon
				icon='fa-solid fa-cart-shopping'
				size='xl'
				color='white'
			/>
			<span className='notification__badge'>99</span>
		</button>
	);
};
