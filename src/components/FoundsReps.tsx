import React from "react";
import { observer } from "mobx-react-lite";
import { Rep } from "../store/store";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store/store";

const FoundsReps: React.FC = () => {
	const store = useStore();
	const navigate = useNavigate();

	const handle = (repo: Rep) => {
		store.addFavorite(repo);
		store.setSelectRep(repo.full_name);
		navigate(`/rep/${encodeURIComponent(repo.full_name)}`);
	};

	return (
		<div className="">
			<p>Founds reps</p>
			{store.reps?.map((item) => {
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
								<button
									onClick={() => {
										handle(item);
									}}
								>
									Read more...
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default observer(FoundsReps);
