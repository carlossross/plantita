import { AddCartWidget } from '../../../components';
import './ItemDetail.css';

export function ItemDetail({
	image,
	name,
	brand,
	price_in_cents,
	detail,
}) {
	return (
		<div className='detail__container'>
			<div className='detail__image__container'>
				<img src={image} alt={name} />
			</div>
			<div className='detail__description'>
				<div className='detail__main'>
					<h1>{name}</h1>
					<label className='detail__label detail__brand'>
						Plataforma: <span>{brand ? brand.description : ''}</span>
					</label>
				</div>
				<label className='detail__label detail__price'>
					${price_in_cents / 100}
				</label>
				<p>{detail}</p>
				<AddCartWidget />
			</div>
		</div>
	);
}
