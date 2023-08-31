import React from "react";
import { Button, UnorderedList, ListItems } from "./index.styles";

function App() {
	const [fruits, setFruits] = React.useState([
		{ id: "1", name: "Apple", isFavorite: false },
		{ id: "2", name: "Peach", isFavorite: true },
		{ id: "3", name: "Strawberry", isFavorite: false },
	]);

	function handleClick(item) {
		const newFruits = fruits.map((fruit) => {
			if (fruit.id === item.id) {
				return {
					id: fruit.id,
					name: fruit.name,
					isFavorite: !fruit.isFavorite,
				};
			} else {
				return fruit;
			}
		});

		setFruits(newFruits);
	}

	return (
		<div>
			<h3>css in js: styled components</h3>

			<Basket items={fruits} onClick={handleClick} />
		</div>
	);
}

function Basket({ items, onClick }) {
	return (
		<UnorderedList>
			{items.map((item) => (
				<ListItems key={item.id}>
					{item.name}
					<Button type="button" onClick={() => onClick(item)}>
						{item.isFavorite ? "Unlike" : "Like"}
					</Button>
				</ListItems>
			))}
		</UnorderedList>
	);
}

export default App;
