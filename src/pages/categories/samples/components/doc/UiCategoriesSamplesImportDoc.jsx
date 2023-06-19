import { lazy, Suspense } from "react";
import UiLoading from '../../../../../components/ui/loading/UiLoading'

function UiCategoriesSamplesImportDoc({params}) {
    const ComponentDoc = importComponentByLazy(
        params.category,
        params.propertyName,
    );
    return (
        <div>
            <Suspense fallback={<UiLoading />}>
                <ComponentDoc />
            </Suspense>
        </div>
    )
}
function importComponentByLazy(category, propertyName) {
    const firstLetter = propertyName.charAt(0)
    const ImportedComponent = lazy(() =>
        import(
            `../../../../../library/${category}/${firstLetter}/${propertyName}/documentation/PropertyDoc.jsx`
        )
    );
    return ImportedComponent;
}
export default UiCategoriesSamplesImportDoc