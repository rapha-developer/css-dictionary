import { lazy, Suspense, useState } from "react";
import UiLoading from '../../../../../components/ui/loading/UiLoading'
import styles from './style.module.css'
function UiCategoriesSamplesImport({params, libraryID, snippetUrl, snippetItem}) {
    const ComponentSample = importComponentByLazy(
        params.category,
        params.propertyName,
        libraryID
    );
    const dateTime = makeDateTime(snippetItem.attributes.created_at);

    return (
        <a
            href={snippetUrl}
            className={styles.snippetItem}
        >
            <div className={styles.snippetItem__thumbnail}>
                <Suspense fallback={<UiLoading />}>
                    <ComponentSample />
                </Suspense>
            </div>
            <span className={`${styles.snippetItem__date} uppercase`}>
                {dateTime}
            </span>
            <h3 className={styles.snippetItem__title}>
                {snippetItem.attributes.title}
            </h3>
            <p className={styles.snippetItem__description}>
                {snippetItem.attributes.description}
            </p>
        </a>
    )
}

function importComponentByLazy(category, propertyName, propertyID) {
    const firstLetter = propertyName.charAt(0)
    const ImportedComponent = lazy(() =>
        import(
            `../../../../../library/${category}/${firstLetter}/${propertyName}/sample${propertyID}/thumbnail/SampleThumbnail.jsx`
        )
    );
    return ImportedComponent;
}
function makeDateTime(created_at)
{
    return `${created_at.date}, ${created_at.time}`
}
export default UiCategoriesSamplesImport