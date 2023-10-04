
import { Alphabet } from "../../types/alphabet"

export const CategoriesCard = ({ title, letter }: Alphabet) => {
    const cardData = generateDataCategoriesCard(letter)
    return (
        <div className="categoriesCard sidebar-attributes p-4 w-full max-w-xs">
            <img src={cardData.image} 
                alt="Image" 
                className="w-full h-full rounded-xl mb-5" />
            <div className="categoriesCard-content flex flex-col gap-4">
                <h4 className="font-inter text-xl font-bold text-white capitalize">{title}</h4>
                <p className="font-inter text-base font-medium text-white">{cardData.description}</p>
                <button className="w-full px-6 py-4 btn-example font-inter font-bold text-base text-white rounded-xl text-center capitalize hover:opacity-60">{cardData.buttonText}</button>
            </div> 
        </div>
    )
}
function generateDataCategoriesCard(letter: string) {
    return {
        image: "https://templates.envytheme.com/coze/default/assets/images/services/services-2.jpg",
        description: `Todas as propriedades que começam com a letra ${letter}`,
        buttonText: "Ver aulas"
    }
}