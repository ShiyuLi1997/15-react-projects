import React, { useState, useEffect } from "react";
import items from "./data";

function App() {
	console.log("items: ", items);
	let [Data, setData] = useState(items);
	let [arr, setArr] = useState([]);
	let [cate, setCate] = useState([]);
	// with set
	useEffect(() => {
		const categorySet = new Set(
			Data.map((e) => {
				return e.category;
			})
		);
		setCate(Array.from(categorySet));
	}, []);
	// with array
	useEffect(() => {
		const arr = [];
		Data.map((e) => {
			if (!arr.includes(e.category)) arr.push(e.category);
		});
		console.log(arr);
		setArr(arr);
	}, []);
	return (
		<div
			className="navbar"
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
				gap: "20px",
			}}
		>
			{cate.map((e) => {
				return (
					<p className="cate" key={e}>
						{e}
					</p>
				);
			})}
			{arr.map((e) => {
				return (
					<p className="cate" key={e}>
						{e}
					</p>
				);
			})}
		</div>
	);
}

export default App;
