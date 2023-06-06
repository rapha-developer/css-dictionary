
import { IoIosSearch } from 'react-icons/io' 
import { useEffect, useState } from 'react'
import { generateInputData } from '../../../data/autocompleteBar.js'
import styles from './style.module.css'
import UiHeadBarAutocomplete from '../autocomplete/UiHeadBarAutocomplete'
function UiHeadBarForm() {

    const [formData, setFormData] = useState(generateInputData())     
    function onChangeInput(event) {
        const { id, name, type, value } = event.target
        setFormData((prevFromData) => {
            return {
                ...prevFromData,
                value: value.toLowerCase()
            }
        });
    }
    const [itemsFounded, setItemsFounded] = useState([])
    async function filterPropertiesBySearchInput() {
        const url = `https://rapha-developer-laravel.000webhostapp.com/properties/autocomplete/${formData.value}`
        await fetch(url)
        .then(res => res.json())
        .then(response => setItemsFounded(response.data));
    }
    useEffect(() => {
        if (formData.value.length === 0) return;
        filterPropertiesBySearchInput()
    }, [formData.value])

    const autocompleteIsVisible = (formData.value.length > 0) ? true : false

    return (
        <form action="#" 
            autoComplete='off'
            className={styles.UiHeadBarForm}>
            <div className={styles.UiHeadBarForm__group}>
                <input 
                    id={formData.id}
                    name={formData.name}
                    placeholder={formData.placeholder}
                    type={"text"}
                    value={formData.value}
                    onChange={(event) => onChangeInput(event)}
                    className={styles.UiHeadBarForm__input}
                />
                <IoIosSearch className={styles.uiHeadBarForm__icon} />
            {autocompleteIsVisible && <UiHeadBarAutocomplete 
                items={itemsFounded}
            />}
            </div>
        </form>
    )
}
export default UiHeadBarForm