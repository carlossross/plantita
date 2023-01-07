import { useState, useEffect } from 'react';

const stock = [
	{ producto: 1, price: 100 },
	{ producto: 2, price: 100 },
	{ producto: 3, price: 100 },
];

export const ItemListContainer = ({ name }) => {
	const [productos, setProductos] = useState([]);

	const pedirDatos = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(stock);
			}, 1500);
		});
	};

	useEffect(() => {
		pedirDatos()
			.then((res) => {
				setProductos(res);
			})
			.catch((err) => console.log(err));
	}, []);

	return <div>{productos.length && <div>{productos}</div>}</div>;
};
