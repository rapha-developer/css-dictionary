
import UiHomeTeamDeveloper from './developer/UiHomeTeamDeveloper';
import styles from './style.module.css'
import { createTeamHome } from '../../../data/home/createTeamHome'
function UiHomeTeam() {
    
    const developersTeam = createTeamHome.developers.map((developer, key) => {
        return (
            <UiHomeTeamDeveloper 
                key={key}
                avatar_url={developer.avatar_url}
                name={developer.name}
                bio={developer.bio}
            />
        )
    });

    return (
        <div className={styles.uiHomeTeam}>
            <h5 className={styles.uiHomeTeam__headline}>
                {createTeamHome.headline}
            </h5>
            <p className={styles.uiHomeTeam__subtitle}>
                {createTeamHome.subtitle}
            </p>
            <div className={styles.uiHomeTeam__team}>
                {developersTeam}
            </div>
        </div>
    )
}
export default UiHomeTeam