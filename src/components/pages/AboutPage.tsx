import { Header } from "../header"
import { HeadingHero } from "../utils/HeadingHero"
import { WidgetSocialMedia } from "../utils/WidgetSocialMedia"

export const AboutPage = () => {
    const about = makeAboutInfo()
    return (
        <div className="">
            <Header />
            <img src="/hero-main.png" 
                className="w-full max-h-[540px] object-cover"
            />
            <section className="bg-gradient-to-b from-body-200 from-10% via-white via-30% to-white to-90% h-auto w-full mb-20">
                <div className="container mx-auto">
                    <HeadingHero 
                        subtitle="about me"
                        title="Sobre mim"
                        description={{
                            head: "",
                            body: "",
                        }}
                    />
                    <div className="flex flex-col gap-4 justify-center w-full -mt-4">
                        <img src={about.gravatar.url} 
                            alt={about.gravatar.alt} 
                            className="h-40 w-40 rounded-full mx-auto" />
                        <h3 className="font-outfit text-2xl font-semibold text-secondary text-center capitalize">{about.name}</h3>
                        <p className="font-outfit text-base font-normal text-body-100 leading-7 capitalize text-center">
                            {about.description.head}<br />
                            {about.description.body}
                        </p>
                    </div>
                    <div className="mt-20">
                        <HeadingHero 
                            subtitle="social media"
                            title="Minhas Redes Sociais"
                            description={{
                                head: "",
                                body: "",
                            }}
                        />
                        <div className="mt-16">
                            <WidgetSocialMedia />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

function makeAboutInfo() {
    return {
        description: {
            head: "Sou um front-end developer que busca implementar aplicações web elegantes, úteis e fáceis de realizar manutenção.",
            body: "Meu foco é em websites ou aplicativos construídos em pequenos componentes reutilizáveis, flexíveis e escaláveis.",
        },
        gravatar: {
            url: "https://avatars.githubusercontent.com/u/91702283?v=4",
            alt: "programmer in front of computer (programador na frente do computador)"
        },
        name: "raphael moreira"
    }
}