import { useRouteError } from 'react-router-dom'
import { TbArrowBackUp } from 'react-icons/tb'
import designersSvg from '../../../assets/designers.svg'
import backgroundWithBlobsTwoSvg from '../../../assets/error-page-blobs-two4.svg'
import { createErrorDetailsPage } from '../../../data/error'
import styles from './style.module.css'
function UiErrorDetailsPage() {
    const errorDataPage = createErrorDetailsPage
    return (
        <div className={styles.uiErrorDetailsPage}>
            <img src={backgroundWithBlobsTwoSvg} 
                alt="Background white with blobs in each side" 
                className={styles.uiErrorDetailsPage__background}
            />
            <div className={styles.uiErrorDetailsPage__body}>
                <h2 className={styles.uiErrorDetailsPage__title}>{errorDataPage.title}</h2>
                <p className={styles.uiErrorDetailsPage__text}>{errorDataPage.description.pt}</p>
                <img src={designersSvg} 
                    alt="Two people fix part of website" 
                    className={styles.uiErrorDetailsPage__image}
                />
                <button className={`${styles.uiErrorDetailsPage__btnHome} capitalize`}>
                    <a href='/' className={styles.uiErrorDetailsPage__btnLink}>
                        <TbArrowBackUp className={styles.uiErrorDetailsPage__btnIcon} />{errorDataPage.button}
                    </a>
                </button>
            </div>
        </div>
    )
}
export default UiErrorDetailsPage