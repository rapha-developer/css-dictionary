
import styles from './style.module.css'
function UiHomeTeamDeveloper({avatar_url, name, bio}) {
    return (
        <div className={styles.UiHomeTeamDeveloper}>
            <div className={styles.UiHomeTeamDeveloper__head}>
                <img src={avatar_url} 
                    alt="My Github Avatar Photo" 
                    className={styles.UiHomeTeamDeveloper__avatar}    
                />
            </div>
            <div className={styles.UiHomeTeamDeveloper__body}>
                <h5 className={styles.UiHomeTeamDeveloper__name}>
                    {name}
                </h5>
                <p className={styles.UiHomeTeamDeveloper__bio}>
                    {bio}
                </p>
            </div>
        </div>
    )
}
export default UiHomeTeamDeveloper