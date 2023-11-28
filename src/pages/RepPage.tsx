import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../store/store";

const RepPage: React.FC = () => {
	const store = useStore();
	const [readme, setReadme] = useState("");

	useEffect(() => {
		store.fetchSelectedRep(store.selectRep);
		setReadme(atob(store.selectRepDesc?.content));
	}, [store.selectRep, readme]);

	return (
		<div>
			<span>{readme}</span>
		</div>
	);
};

export default observer(RepPage);
