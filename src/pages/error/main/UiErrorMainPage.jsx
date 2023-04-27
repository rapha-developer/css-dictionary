
import { useRouteError } from 'react-router-dom'
import { TbArrowBackUp } from 'react-icons/tb'
import error404Svg from '../../../assets/error-404.svg'
import { createErrorMainPage } from '../../../data/error'

import styles from './style.module.css'
function UiErrorMainPage() {
    const errorDataPage = createErrorMainPage
    return (
        <div className={styles.uiErrorMain}>
            <img src={error404Svg} 
                alt="" 
                className={styles.uiErrorMain__background}
            />
            <div className={styles.uiErrorMain__body}>
                <h2 className={styles.uiErrorMain__title}>{errorDataPage.title}</h2>
                <p className={styles.uiErrorMain__text}>{errorDataPage.description.pt}</p>
                
                <button className={`${styles.uiErrorMain__btnHome} capitalize`}>
                    <a href='/' className={styles.uiErrorMain__btnLink}>
                        <TbArrowBackUp className={styles.uiErrorMain__btnIcon} />{errorDataPage.button}
                    </a>
                </button>
            </div>
        </div>
    )
}
export default UiErrorMainPage