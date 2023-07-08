import React, { useState } from "react";

export const Form = ({ onAddItems }) => {
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(1);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!description) {
			alert("Please add a Item");
			return;
		}

		const newItems = { id: Date.now(), description, quantity, packed: false };

		onAddItems(newItems);

		setDescription("");
		setQuantity(1);
	};

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your trip? 😍</h3>
			<select
				value={quantity}
				onChange={(e) => setQuantity(Number(e.target.value))}
			>
				{Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
					<option key={num} value={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="Items.."
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button>Add</button>
		</form>
	);
};
