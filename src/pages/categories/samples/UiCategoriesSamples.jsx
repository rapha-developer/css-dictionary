import { useLoaderData, useLocation, useParams } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import UiLoading from "../../../components/ui/loading/UiLoading";
import styles from "./style.module.css";
function UiCategoriesSamples() {
	const responseAllSamples = useLoaderData();
	const name = responseAllSamples.data[0].relationships.name
	const location = useLocation();
	const params = useParams();
	function importComponentByLazy(category, propertyName, propertyID) {
		const ImportedComponent = lazy(() =>
			import(
				`../../../library/${category}/a/${propertyName}/sample${propertyID}/thumbnail/SampleThumbnail.jsx`
			)
		);
		return ImportedComponent;
	}

	const snippet__list = responseAllSamples.data.map((snippetItem) => {
		const ComponentSample = importComponentByLazy(
			params.category,
			params.propertyName,
			snippetItem.id
		);
		const fullPath = `${location.pathname}/${snippetItem.id}`;
		const dateTime = `${snippetItem.attributes.created_at.date}, ${snippetItem.attributes.created_at.time}`
		return (
			<a
				href={fullPath}
				className={styles.snippetItem}
				key={snippetItem.id}
			>
				<div className={styles.snippetItem__thumbnail}>
					<Suspense fallback={<UiLoading />}>
						<ComponentSample />
					</Suspense>
				</div>
				<span className={`${styles.snippetItem__date}`}>
					{dateTime}
				</span>
				<h3 className={styles.snippetItem__title}>
					{snippetItem.attributes.title}
				</h3>
				<p className={styles.snippetItem__description}>
					{snippetItem.attributes.description}
				</p>
			</a>
		);
	});
	const headText = `${name} documentation`;
	return (
		<section className={styles.uiCategoriesSamples}>
			<div className={styles.uiCategoriesSamples__head}>
				<h2
					className={`${styles.uiCategoriesSamples__title} capitalize`}
				>
					{headText}
				</h2>
			</div>
			<div className={styles.__body}>{snippet__list}</div>
		</section>
	);
}
export async function loader({ params }) {

	const url = `https://rapha-developer-laravel.000webhostapp.com/properties/${params.propertyName}/allSamples`;
	const responseFromApi = await fetch(url);
	const responseInJson = await responseFromApi.json();	
	return responseInJson;
}

export default UiCategoriesSamples;
