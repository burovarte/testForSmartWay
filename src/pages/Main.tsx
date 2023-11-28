import React from "react";
import { SetStateAction, useEffect, useState } from "react";
import "../App.css";
import { useStore } from "../store/store";
import { observer } from "mobx-react-lite";
import FoundsReps from "../components/FoundsReps";
import FavoriteReps from "../components/FavoriteReps";

const Main = observer(() => {
	const [inputValue, setInputValue] = useState("");
	const store = useStore();

	const onChangeHandler = (event: {
		target: { value: SetStateAction<string> };
	}) => {
		setInputValue(event.target.value);
	};

	useEffect(() => {
		setTimeout(() => {
			store.fetchData(inputValue);
		}, 1000);
	}, [inputValue]);

	return (
		<>
			<p>Search rep here</p>
			<input
				type="text"
				name="name"
				onChange={onChangeHandler}
				value={inputValue}
			/>
			<div className="main">
				<FoundsReps />
				<FavoriteReps />
			</div>
		</>
	);
});

export default Main;
