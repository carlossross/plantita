import './AddCartWidget.css';

export function AddCartWidget() {
	return (
		<>
			<div>
				<button className='addCart__input--decrement'>-</button>
				<input className='addCart__input' type='number' />
				<button className='addCart__input--increment'>+</button>
			</div>
			<button className='btn btn-primary addCart__button'>Agregar al carrito</button>
		</>
	);
}
