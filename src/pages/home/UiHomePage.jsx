import { TfiArrowCircleDown } from 'react-icons/tfi'
import knowledgeSvg from '../../assets/knowledge.svg'
import UiHomeFeatures from './features/UiHomeFeatures'
import UiHomeTeam from './team/UiHomeTeam'
import { createUiHome } from '../../data/home/createMainHome'
import styles from './style.module.css'

function UiHomePage() {
    const uiHomeHeadID = "uiHomeHeadID"
    function scrollDown() {
        const featuresID  = document.getElementById(uiHomeHeadID).scrollHeight
        const headBarID  = document.getElementById("uiHeadBarID").scrollHeight
        const allHeightNecessaryToScroll = featuresID + headBarID
        window.scroll({
            top: allHeightNecessaryToScroll,
            left: 0,
            behavior: 'smooth'
        });
    }
    return (
        <section className={styles.uiHome}>
            <div className={styles.uiHome__head} id={uiHomeHeadID}>
                <img src={knowledgeSvg} 
                    alt="Person build knowledge in a website" 
                    className={styles.uiHome__image}
                />
                <h2 className={styles.uiHome__headline}>{createUiHome.headline}</h2>
                <p className={styles.uiHome__description}>{createUiHome.description}</p>
                <TfiArrowCircleDown 
                    className={styles.uiHome__iconDown} 
                    onClick={scrollDown}
                />
            </div>
            <UiHomeFeatures />
            <UiHomeTeam />
        </section>
    )
}
export default UiHomePage