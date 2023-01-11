import { useState, useEffect } from 'react';
import { NothingToSeeHere } from '../../../components';
import { getData } from '../../../services/getData';
import { ItemList } from '../ItemList/ItemList';

export const ItemListView = ({ brand }) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const dataFn = async () => {
			const data = await getData();
			let res = await data.json();
			if (brand) {
				res = res.filter((item) => item.brand.description == brand);
			}
			setData(res);
		};
		dataFn();
	}, [brand]);

	return <>{data ? <ItemList items={data} /> : <NothingToSeeHere />}</>;
};
