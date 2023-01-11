import MOCK_DATA from '../../public/data/MOCK_DATA.json';

export function getData() {
	return fetch('./data/MOCK_DATA.json');
}

export function getItem(id) {
	const item = MOCK_DATA.find(item => item.id == id);
	return item;
}
