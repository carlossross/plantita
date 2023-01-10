import './ItemCard.css';

export function ItemCard({ item }) {
	console.log(item);
	return (
		<div className='card'>
			<img src={item.image} alt={item.name} />
			<label className='card__name'>{item.name}</label>
			<label className='card__price'>
				${(item.price_in_cents / 100).toFixed(2)}
			</label>
			<label className='card__brand'>{(item.brand.description).toUpperCase()}</label>
		</div>
	);
}
