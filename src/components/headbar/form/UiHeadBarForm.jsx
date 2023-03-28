import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react';
import styles from './style.module.css'
function UiHeadBarForm() {
    function generateForm() {
        return {
            id: "head-bar-search-id",
            name: "head-bar-search",
            placeholder: "Search",
            type: "text",
            text: ""
        }
    }
    const [formData, setFormData] = useState(generateForm())

    function handleChange(event) {
        const { name, type, value } = event.target
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                text: value
            }
        })
    }
    console.log(formData)
    function handleSubmit() {}
    return (
        <div className={styles.UiHeadBarForm}>
            <form action=""
                className={styles.__form}
                onSubmit={handleSubmit}>
                <input
                    id={formData.id}
                    name={formData.name}
                    placeholder={formData.placeholder}
                    type={formData.type}
                    value={formData.text}
                    onChange={handleChange}
                    className={styles.__input}
                />
                <button 
                    type='submit'
                    className={styles.headBar__submit}
                    onClick={() => console.log('Clicou!!!')}
                >
                    <AiOutlineSearch 
                        className={styles.headBar__icon}
                    />
                </button>
            </form>
        </div>
    )
}
export default UiHeadBarForm