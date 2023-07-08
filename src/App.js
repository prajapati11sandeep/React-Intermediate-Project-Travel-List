import { useState } from "react";

import { Logo } from "./components/Logo";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";
import { Form } from "./components/Form";

const initialItems = [
	{ id: 1, description: "Passports", quantity: 2, packed: false },
	{ id: 2, description: "Charger", quantity: 1, packed: true },
	{ id: 3, description: "Socks", quantity: 12, packed: false },
	{ id: 4, description: "Hat", quantity: 2, packed: true },
];

function App() {
	const [items, setItems] = useState(initialItems);

	const handleAddItems = (item) => {
		setItems((items) => [...items, item]);
	};

	const handleDeleteItems = (itemId) => {
		setItems((items) => items.filter((item) => item.id !== itemId));
	};

	const handlePackedItems = (itemId) => {
		setItems((items) =>
			items.map((item) =>
				item.id === itemId ? { ...item, packed: !item.packed } : item
			)
		);
	};

	const clearListHandler = () => {
		const confirm = window.confirm(
			"Are you sure you want to delete all items ?"
		);
		if (confirm) setItems([]);
	};

	return (
		<div className="app">
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItems}
				onPackedItem={handlePackedItems}
				onClearItems={clearListHandler}
			/>
			<Stats items={items} />
		</div>
	);
}

export default App;
