
import UiHeading from '../../../../components/ui/heading/UiHeading'
import UiHeadingCollection from './components/headings/UiHeadingCollection'
function StyleTypography() {
    return (
        <section className="styleTypography">
            <div className="container">
                <UiHeading 
                    text__primary="headings"
                    text__secondary="Typography - Inter"
                />
                <UiHeadingCollection />
            </div>
        </section>
    )
}
export default StyleTypography