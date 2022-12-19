
import styles from './style.module.css'
function UiPaletteItem({colorName, rgbColor}) {
    return (
        <div className={`${styles.palette__item} box-shadow-1`}>
            <div className={styles.palette__head} style={{background: rgbColor}}></div>
            <div className={`${styles.palette__body} bg-primary-400`}>
                <p className="palette__name ff-inter fs-h900 fw-semi-bold text-color-100 capitalize">
                    {colorName}
                </p>
                <p className="palette__rgb ff-inter fs-small-100 fw-semi-bold text-color-400">{rgbColor}</p>
            </div>
        </div>
    )
}
export default UiPaletteItem