import { ArrowLongRight } from "../../assets/icons/ArrowLongRight"

export const WidgetCallToAction = () => {
    const { title, button } = makeWidgetCallToAction()
    return (
        <section className="w-full h-auto relative">
            <div className="absolute top-0 left-0 w-full h-[570px] lg:h-auto min-h-[300px] bg-primary -z-50"></div>
            <img src="/cta-bg.png" 
                    alt="Triangles with many colors" 
                    className="absolute top-0 left-0 w-full h-auto object-cover -z-40" />
            
            <div className="container mx-auto min-h-[290px] h-fit pt-9  z-10">
                <div className="flex flex-col items-center lg:flex-row lg:items-stretch gap-4 lg:gap-0 pb-4 lg:pb-0 h-full">
                    <div className="relative w-full sm:w-96 h-[256px] border-solid border-slate-800">
                        <img src="call-shape-action.svg" 
                            alt="Various geometric figures"
                            className="absolute bottom-0 left-0 w-full sm:w-[378px] h-[198px] -z-50" />
                        <div className="w-full h-auto -z-40 flex justify-center">
                                <img src="/call-action-img1.png"  
                                    alt="Girl Graduating (Garota se graduando)" 
                                    className=" w-fit h-[256px]" />
                        </div>
                    </div>
                    <div className="max-w-[550px] xl:max-w-[750px] flex items-center pb-4">
                        <h2 className="font-outfit text-3xl md:text-4xl font-semibold text-white leading-10 text-center lg:text-start capitalize">{title}</h2>
                    </div>
                    <div className="flex items-center pb-4">
                        <a href={button.url} target="_blank" className="">
                            <button className="font-outfit text-base font-medium text-primary hover:text-white bg-white hover:bg-secondary py-4 px-6 rounded-[50px] capitalize flex items-center gap-3 group">
                                {button.text} <ArrowLongRight classNames="w-6 h-6 text-primary" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

function makeWidgetCallToAction() {
    return {
        title: "glossário online com ínumeros termos do desenvolvimento web",
        button: {
            url: "/glossary",
            text: "Comece aprender hoje"
        }
    }
}