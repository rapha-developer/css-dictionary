
import UiPaletteItem from '../item/UiPaletteItem';
import styles from './style.module.css'
function UiPaletteCollection() {
    const palette__colors = [
        {
            name: "primary 1",
            rgb: "#5B7FFF"
        },
        {
            name: "primary 2",
            rgb: "#38CB89"
        },
        {
            name: "primary 3",
            rgb: "#FFAB00"
        },
        {
            name: "primary 4",
            rgb: "#FF5630"
        }
    ];
    const palette__collection = palette__colors.map((paletteItem) => {
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