import { 
	useLoaderData, 
	useLocation, 
	useParams } from "react-router-dom";
import { makeHistoricPaths } from './utils/makeHistoricPaths'
import UiCategoriesSamplesImport from "./components/import/UiCategoriesSamplesImport";
import UiHistoricPath from './../../../components/ui/historicPath/UiHistoricPath';
import UiCategoriesSamplesHeadline from "./components/headline/UiCategoriesSamplesHeadline";
import UiCategoriesSamplesLabels from "./components/labels/UiCategoriesSamplesLabels";
import UiCategoriesSamplesImportDoc from "./components/doc/UiCategoriesSamplesImportDoc";
import styles from "./style.module.css";

function UiCategoriesSamples() {
	const responseAllSamples = useLoaderData();
	const location = useLocation();
	const params = useParams();

	const snippet__list = responseAllSamples.samples.data.map((snippetItem, snippetOrder) => {
		const one = 1;
		const libraryID = snippetOrder + one;
		const snippetUrl = `${location.pathname}/${libraryID}`;
		return (
			<UiCategoriesSamplesImport 
				params={params}
				libraryID={libraryID}
				snippetUrl={snippetUrl}
				snippetItem={snippetItem}
				key={libraryID}
			/>
		)
	});

	const historicPaths = makeHistoricPaths(params.category, params.propertyName)
	return (
		<section className={styles.uiCategoriesSamples}>
			<UiHistoricPath 
					paths={historicPaths}
			/>
			<div className={styles.uiCategoriesSamples__head}>
				<UiCategoriesSamplesHeadline 
					title={responseAllSamples.doc.data.attributes.name}
					description={responseAllSamples.doc.data.attributes.description}
				/>
				<UiCategoriesSamplesLabels 
					category={responseAllSamples.doc.data.group.category}
					created_at={responseAllSamples.doc.data.group.created_at}
				/>
				<hr className={styles.hr} />
				<UiCategoriesSamplesImportDoc 
					params={params}
				/>
			</div>
			<div className={styles.uiCategoriesSamples__body}>
				<h5 className={styles.uiCategoriesSamples__bodyTitle}>Samples</h5>
				<div className={styles.uiCategoriesSamples__bodyCollection}>
					{snippet__list}
				</div>
			</div>
		</section>
	);
}

export async function loader({ params }) {
	const url = `https://rapha-developer-laravel.000webhostapp.com/properties/${params.propertyName}/allSamples`;
	const responseFromApi = await fetch(url);
	const responseInJson = await responseFromApi.json();	

	const propertyDoc = await loaderDoc(responseInJson.data[0].relationships.id);
	return {
		"samples": responseInJson,
		"doc": propertyDoc
	}
}

async function loaderDoc(id) {
	const url = `https://rapha-developer-laravel.000webhostapp.com/properties/${id}/doc`
	const responseFromApi = await fetch(url);
	const responseInJson = await responseFromApi.json();
	return responseInJson
}
export default UiCategoriesSamples;
