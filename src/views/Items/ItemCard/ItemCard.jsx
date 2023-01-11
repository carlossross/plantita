import { Link } from 'react-router-dom';
import './ItemCard.css';

export function ItemCard({ item }) {
	return (
		<Link to={`/${item.brand.description}/detail/${item.id}`}>
			<div className='card'>
				<div className='card__image__container'>
					<img src={item.image} alt={item.name} />
				</div>
				<label className='card__name'>{item.name}</label>
				<label className='card__price'>
					${(item.price_in_cents / 100).toFixed(2)}
				</label>
				<label className='card__brand'>
					{item.brand.description.toUpperCase()}
				</label>
			</div>
		</Link>
	);
}
