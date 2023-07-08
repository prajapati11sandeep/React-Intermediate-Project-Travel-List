import React from "react";

export const Stats = ({ items }) => {
	if (!items.length) {
		return (
			<footer className="stats">
				<em>Please add some items to your list</em>
			</footer>
		);
	}

	const numItem = items.length;
	const numPacked = items.filter((item) => item.packed).length;
	const percentage = Math.round((numPacked / numItem) * 100);

	return (
		<footer className="stats">
			<em>
				{percentage === 100 ? (
					<span style={{ color: "green" }}>You are now ready to go ✈️</span>
				) : (
					<>
						💼 You have <span style={{ color: "#fff" }}>{numItem}</span> items
						in your list and you have packed{" "}
						<span style={{ color: "#fff" }}>{numPacked}</span>{" "}
						<span style={{ color: "#ff762c" }}>
							({percentage}
							%)
						</span>
					</>
				)}
			</em>
		</footer>
	);
};
