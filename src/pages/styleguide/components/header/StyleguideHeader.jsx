
import styles from './style.module.css'
function StyleguideHeader(props) {
    const headerData = {
        subtitle: "style guide",
        title: "color styles",
        description: "Welcome to the style guide. This page is the focal point for stylistic changes to this product. If you have any questions regarding this product , write to us at our mail hello@unisense.agency"
    }
    return (
        <div className={`${styles.header} bg-primary-300`}>
            <div className="container">
                <h5 className={`${styles.text__secondary} ff-inter fs-small-100 fw-semi-bold text-color-400 uppercase letter-spacing-1`}>
                    {headerData.subtitle}
                </h5>
                <h1 className={`${styles.text__primary} ff-inter fs-h200 fw-bold text-color-100 capitalize`}>
                    {headerData.title}
                </h1>
                <p className={`${styles.text__tertiary} ff-inter fs-body-200 fw-medium text-color-400 line-height-35`}>
                    {headerData.description}
                </p>
            </div>
        </div>
    )
}
export default StyleguideHeader