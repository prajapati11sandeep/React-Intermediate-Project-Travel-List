import React from "react";
export const Items = ({ items, onDeleteItem, onPackedItem }) => {
	return (
		<li>
			<input
				type="checkbox"
				value={items.packed}
				checked={items.packed}
				onChange={() => onPackedItem(items.id)}
				id={items.id}
			/>
			<label
				style={items.packed ? { textDecoration: "line-through" } : {}}
				htmlFor={items.id}
			>
				{items.description} {items.quantity}
			</label>
			<button onClick={() => onDeleteItem(items.id)}>❌</button>
		</li>
	);
};
