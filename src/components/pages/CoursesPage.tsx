import { Header } from "../header"


export const CoursesPage = () => {
    const routeData = {
        historic: {
            home: "home",
            actual: "courses"
        }   
    }
    return (
        <>
            <Header />
            <div className="bg-transparent w-full h-auto">
                <div className="background-hero absolute top-0 left-0 w-full h-[565px] -z-50"></div>
                <div className="bg-body-200 absolute top-24 left-0 w-full h-[300px] -z-50"></div>
                <div className="container mx-auto px-4 lg:px-8 flex justify-between pt-20 md:pt-56 ">
                    <div className="flex flex-col">
                        <div className="flex gap-2 items-center">
                            <span className="inline-block font-outfit text-base text-tertiary hover:text-primary font-normal leading-7">{routeData.historic.home}</span>
                            <span className="inline-block font-outfit text-base text-tertiary">{">"}</span>
                            <span className="inline-block font-outfit text-base text-tertiary font-normal leading-7">{routeData.historic.actual}</span>
                        </div>
                        <h1 className="font-outfit text-4xl text-secondary font-semibold capitalize">{routeData.historic.actual}</h1>
                    </div>
                    <img src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/themes/quiklearn/assets/img/banner-shape.png" alt="" />
                </div>
            </div>
            <div className="w-full h-[960px] bg-white"></div>
        </>
    )
}