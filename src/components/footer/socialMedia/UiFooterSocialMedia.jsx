
import { RiCodepenFill, RiBehanceFill, RiGithubFill } from 'react-icons/ri'
import { createUiFooterSocialMedia } from '../../../data/footer'
import styles from './style.module.css'
function UiFooterSocialMedia() {
    return (
        <div className={styles.uiFooterSocialMedia__list}>
            <a href={createUiFooterSocialMedia.codepen} 
                target='_blank'
                aria-label='Read more about my codepen profile'
                className={styles.socialMedia__link}>
                <RiCodepenFill className={styles.socialIcon__item} />
            </a>
            <a href={createUiFooterSocialMedia.behance} 
                target='_blank'
                aria-label='Read more about my behance profile'
                className={styles.socialMedia__link}>
                <RiBehanceFill className={styles.socialIcon__item} />
            </a>
            <a href={createUiFooterSocialMedia.github} 
                target='_blank'
                aria-label='Read more about my github profile'
                className={styles.socialMedia__link}>
                <RiGithubFill className={styles.socialIcon__item} />
            </a>
        </div>
    )
}
export default UiFooterSocialMedia