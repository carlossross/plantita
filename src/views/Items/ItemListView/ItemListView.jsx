import { useState, useEffect } from 'react';
import { getData } from '../../../services/getData';
import { ItemList } from '../ItemList/ItemList';

export const ItemListView = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const dataFn = async () => {
			const data = await getData();
			const res = await data.json();
			setData(res);
		};
		dataFn();
	}, []);

	return <ItemList items={data} />;
};
