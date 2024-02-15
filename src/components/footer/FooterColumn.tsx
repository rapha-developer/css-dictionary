import { FooterMenu } from "../../types/footerMenu"


export const FooterColumn = ({ title, menu }: FooterMenu) => {
    
    return (
        <div className="footer-column w-48">
            <h3 className="font-outfit text-2xl text-white font-semibold leading-9 capitalize mb-6">
                {title}
            </h3>
            <ul className="flex flex-col gap-4">
                {Array.isArray(menu) &&
                menu.length > 0 &&
                menu.map((footerItem, footerKey) => (
                    <li className="footer-menu-item" key={footerKey}>
                        <a href={footerItem.url} 
                        className="font-outfit text-base text-tertiary leading-relaxed capitalize transition-colors hover:underline hover:text-white">{footerItem.text}</a>
                    </li>
                ))     
                }
            </ul>
        </div>
    )
}