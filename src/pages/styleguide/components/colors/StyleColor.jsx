import UiHeading from "../../../../components/ui/heading/UiHeading"
import UiPaletteCollection from "./components/palette/UiPaletteCollection"

import styles from './style.module.css'
function StyleColor() {
    return (
        <section className={styles.styleColor}>
            <div className="container">
                <UiHeading 
                    text__primary="primary colors"
                    text__secondary="These are the main colors of the product that are used in various Ui
                    elements."
                />
                <UiPaletteCollection />
            </div>
        </section>
    )
}
export default StyleColor