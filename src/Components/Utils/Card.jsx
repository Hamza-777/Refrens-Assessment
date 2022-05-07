import React from "react";
import { useDataProvider } from "../Providers/DataProvider";
import PropTypes from "prop-types";
import {
	DisplayCard,
	CardInfo,
	NameGender,
	Locations,
	FeaturedIn,
} from "../Styles/Card.styled";

const Card = ({
	character: {
		episode,
		gender,
		image,
		location,
		name,
		origin,
		species,
		status,
	},
}) => {
	const { episodes } = useDataProvider(); // Getting episode list from data prvider

	return (
		<DisplayCard>
			<section className='card-img'>
				<img src={image} alt={name} className='img'></img>
			</section>
			<CardInfo>
				<NameGender>
					<h2 className='name'>{name}</h2>
					<section className='other-detail'>
						<p
							style={{
								color:
									status === "Alive"
										? "#084594"
										: status === "Dead"
										? "#D82148"
										: "#361500",
								fontWeight: "600",
							}}
						>
							{/* Updating the color of the status text according to status of the character */}
							{status}
						</p>
						{"-"}
						<p>
							{species} {`(${gender})`}
						</p>
					</section>
				</NameGender>
				<Locations>
					<div className='origin'>
						<h3>Origin: </h3>
						<p>{origin.name}</p>
					</div>
					<div className='current'>
						<h3>Current: </h3>
						<p>{location.name}</p>
					</div>
				</Locations>
				<FeaturedIn>
					<div className='first'>
						<h3>First Appeared: </h3>
						<p>
							{episodes && episodes[parseInt(episode[0].split("/")[5] - 1)]}
							{/* Getting the name of the episode based on the episode url in 0th index of episode array */}
						</p>
					</div>
					<div className='last'>
						<h3>Last Appeared: </h3>
						<p>
							{episodes &&
								episodes[
									parseInt(episode[episode.length - 1].split("/")[5] - 1)
								]}
							{/* Getting the name of the episode based on the episode url in last index of episode array */}
						</p>
					</div>
				</FeaturedIn>
			</CardInfo>
		</DisplayCard>
	);
};

Card.propTypes = {
	character: PropTypes.object,
};

export default Card;
