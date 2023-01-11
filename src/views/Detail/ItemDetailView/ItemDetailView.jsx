import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../../../services/getData';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import './ItemDetailView.css';

export function ItemDetailView() {
	const [item, setItem] = useState({});
	const { id } = useParams();

	useEffect(() => {
		//getData
		const item = getItem(id);
		setItem(item);
	}, []);

	return (
		<div className='detail__view'>
			<ItemDetail {...item} />
		</div>
	);
}
