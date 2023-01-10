import { useEffect, useState } from 'react';
import { getData } from '../../../services/getData';
import { ItemCard } from '../ItemCard/ItemCard';
import './ItemList.css';

export function ItemList({ items = [] }) {
	const cards = items.map((data) => <ItemCard key={data.id} item={data} />);

	return (
		<div className='list'>
			{cards}
		</div>
	);
}
