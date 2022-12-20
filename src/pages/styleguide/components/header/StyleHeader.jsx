
import styles from './style.module.css'
function StyleHeader({text__primary, text__secondary, text__tertiary}) {

    return (
        <div className={`${styles.header} bg-primary-300`}>
            <div className="container">
                <h5 className={`${styles.text__secondary} ff-inter fs-small-100 fw-semi-bold text-color-400 uppercase letter-spacing-1`}>
                    {text__secondary}
                </h5>
                <h1 className={`${styles.text__primary} ff-inter fs-h200 fw-bold text-color-100 capitalize`}>
                    {text__primary}
                </h1>
                <p className={`${styles.text__tertiary} ff-inter fs-body-200 fw-medium text-color-400 line-height-35`}>
                    {text__tertiary}
                </p>
            </div>
        </div>
    )
}
export default StyleHeader