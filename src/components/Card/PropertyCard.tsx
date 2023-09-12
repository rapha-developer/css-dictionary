import { Link } from "react-router-dom";
import { Property } from "../../types/property";


export const PropertyCard = ({ attributes, id }: Property) => {
    const image = (attributes.category === "css-functions") ? "ManTouch3dOptions.png" : "WomanWithPhone.png"
	return (
		<div
			className="propertyCard elevation-card-1 flex flex-col rounded-s-2xl">
			<Link to={`/property/${id}`} preventScrollReset={true}>
			<img
				src={`/${image}`}
				alt="Woman with phone"
				className="w-4/5 h-auto top-20 absolute mx-auto -z-0"
			/>
			</Link>
			<header className="propertyCard-header z-0">
				<p className="propertyCard-date">
					{attributes.created_at}
				</p>
				<h2 className="propertyCard-name capitalize">
					{attributes.name}
				</h2>
			</header>
			<div className="propertyCard-content">
				<p className="propertyCard-description">
					{attributes.description}
				</p>
			</div>
		</div>
	);
};
