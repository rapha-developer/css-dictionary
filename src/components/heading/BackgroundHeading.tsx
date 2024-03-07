

export const BackgroundHeading = () => {
    return (
        <>
            <img src="/hero-space.webp" 
                alt="space background with stars" 
                className="w-full h-[500px] absolute top-0 left-0 -z-50" />
            <img src="/waves-2.svg" 
                alt="White waves" 
                className="w-full absolute -bottom-1 left-0 -z-40" />
            <img src="/hero-books.png" 
                alt="Hero Books" 
                className="absolute bottom-20 md:bottom-40 right-16 w-36 md:w-56 -z-40" />
            <img src="/hero-img-4.svg" 
                alt="Hero" 
                className="absolute bottom-32 sm:bottom-20 md:bottom-40 left-10 sm:left-16 w-16 md:w-[114px] -z-40" />
        </>
    )
}