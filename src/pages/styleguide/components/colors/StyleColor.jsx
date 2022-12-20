import UiHeading from "../../../../components/ui/heading/UiHeading"
import UiPaletteCollection from "./components/palette/UiPaletteCollection"

import styles from './style.module.css'
function StyleColor({text__primary, text__secondary, palette}) {
    return (
        <section className={styles.styleColor}>
            <div className="container">
                <UiHeading 
                    text__primary={text__primary}
                    text__secondary={text__secondary}
                />
                <UiPaletteCollection 
                    palette={palette}
                />
            </div>
        </section>
    )
}
export default StyleColor