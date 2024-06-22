

export const Hero404 = () => {
    const messages = {
        main: "Erro 404 - Página não encontrada",
        description: "Você será redirecionado em 5 segundos"
    }
    return (
        <section className="w-full relative"> 
            <img src="/404-4.svg" 
                alt="Criança olhando na lupa - 404 Erro" 
                className="w-full -z-10"
            />
            <div className="absolute top-0 sm:top-16 md:top-24 lg:top-0 xl:-top-6 left-0 z-10 w-full">
                <div className="container mx-auto">
                    <div className="flex justify-center items-center w-full">
                        <h1 className="font-outfit text-2xl text-secondary text-center bg-borderLine px-4 py-2 rounded-md">{messages.main}</h1>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-5 sm:bottom-20 lg:top-32 xl:top-40 left-0 z-10 w-full">
                <div className="container mx-auto">
                    <div className="flex justify-center items-center w-full">
                        <img src="/loading.gif" alt="Loading gif" className="w-8 h-8 ml-4" />
                        <p className="font-outfit text-base font-semibold text-secondary text-center px-4 py-2 rounded-md">{messages.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}