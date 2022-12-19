
import styles from './style.module.css'
function UiHeading({text__primary, text__secondary}) {
    return (
        <div className={styles.heading}>
            <h3 className="ff-inter fs-h300 fw-bold text-color-200 capitalize">
                {text__primary}
            </h3>
            <p className="ff-inter fs-body-200 fw-medium text-color-400 line-height-35">{text__secondary}</p>
        </div>
    )
}
export default UiHeading