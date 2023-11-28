import React from "react";
import { observer } from "mobx-react-lite";
import "../App.css";
import { useStore } from "../store/store";

const FavoriteReps: React.FC = () => {
	const store = useStore();

	return (
		<div className="">
			<p>Favorite reps</p>
			{store.favoriteReps?.map((item) => {
				return (
					<div key={item.id} className="list-cards">
						<div className="card">
							<img
								src={item.owner.avatar_url}
								alt={`${item.owner.login}`}
								className="card-img"
							/>
							<div className="card-description">
								<a
									href={item.html_url}
									target="_blank"
									rel="noreferrer"
									className="repository-name"
								>
									{item.full_name}
								</a>
								<p>Stars: {item.stargazers_count}</p>
								<p>Forks: {item.forks_count}</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default observer(FavoriteReps);
