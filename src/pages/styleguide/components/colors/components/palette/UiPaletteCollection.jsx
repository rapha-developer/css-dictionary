
import UiPaletteItem from '../item/UiPaletteItem';
import styles from './style.module.css'
function UiPaletteCollection({palette}) {

    const palette__collection = palette.map((paletteItem) => {
        return (
            <UiPaletteItem 
                key={paletteItem.rgb}
                colorName={paletteItem.name}
                rgbColor={paletteItem.rgb}
            />
        )
    });
    return (
        <div className={`${styles.palette__collection} bg-primary-300`}>
            {palette__collection}
        </div>
    )
}
export default UiPaletteCollection