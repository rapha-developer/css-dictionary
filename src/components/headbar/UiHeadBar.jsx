
import { AiOutlinePlus } from 'react-icons/ai'
import UiHeadBarForm from './form/UiHeadBarForm';
import styles from './style.module.css'

function UiHeadBar() {
    const data = {
        title: "Categories Details"
    }
    return (
        <div className={styles.headBar}>
            <div className={styles.__row}>
                <div className={styles.__head}>
                    <h1 className={styles.__headline}>{data.title}</h1>
                    <UiHeadBarForm />
                </div>
                <div className={styles.__body}>
                    <a href="#" 
                    className={styles.__button}><AiOutlinePlus  className={styles.__ButtonIcon} /> Create</a>
                    <a href="#" 
                        className={styles.__gravatar}>
                            <img src="https://avatars.githubusercontent.com/u/91702283?v=4" 
                                alt="Raphael Moreira photo gravatar" 
                                className=''
                            />
                        </a>
                </div>
            </div>
        </div>
    )
}
export default UiHeadBar