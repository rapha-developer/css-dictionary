import { useLocation, useNavigate } from "react-router-dom"
import { Header } from "../header";
import { PropertyProps } from "../../types/PropertyProps";
import { useEffect, useState } from "react";
import { PropertyBody } from "../sections/PropertyBody";
import { Hero404 } from "../utils/Hero404";
import { Footer } from "../footer/Footer";

export const ModulePage = () => {
    const navigate = useNavigate()
    const { state } = useLocation()
    const [propertyState] = useState<PropertyProps>(state?.property)
    const propertyExist = (propertyState) ? true : false

    useEffect(() => {
        window.scrollTo(0, 0)
        setTimeout(() => {
            if(!propertyState) {
                return navigate("/")
            }
        }, 5000);
    }, [propertyState, navigate])

    return (
        <div className="">
            <Header />
            <img src="/hero-main.png" 
                className="w-full max-h-[540px] object-cover"
            />
            {propertyExist &&
            <PropertyBody 
                name={propertyState.name}
                definition={propertyState.definition}
                category={propertyState.category}
                values={propertyState.values}
                examples={propertyState.examples}
            />
            }
            {!propertyExist &&
            <Hero404 />
            }
            <Footer />
        </div>
    )
}