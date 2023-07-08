import React from "react";
import { Items } from "./Items";
import { useState } from "react";

export const PackingList = ({
	items,
	onDeleteItem,
	onPackedItem,
	onClearItems,
}) => {
	const [sortBy, setSortBy] = useState("input");

	let sortedItems;

	if (sortBy === "input") {
		sortedItems = items;
	} else if (sortBy === "description") {
		sortedItems = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));
	} else if (sortBy === "packed") {
		sortedItems = items
			.slice()
			.sort((a, b) => Number(a.packed) - Number(b.packed));
	}

	return (
		<div className="list">
			<div className="list-inner">
				{items.length ? <h6>click on item to mark as packed !</h6> : ""}
				<ul>
					{sortedItems.map((items) => (
						<Items
							key={items.id}
							items={items}
							onDeleteItem={onDeleteItem}
							onPackedItem={onPackedItem}
						/>
					))}
				</ul>
			</div>
			<div className="actions">
				<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
					<option value="input">Sort by input order</option>
					<option value="description">Sort by description</option>
					<option value="packed">Sort by packed items</option>
				</select>
				<button onClick={onClearItems}>Clear List</button>
			</div>
		</div>
	);
};
