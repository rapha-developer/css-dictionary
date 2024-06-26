import { FooterColumnUtilProps } from "../../core/utils/FooterUtil"

export const FooterColumn = ({ title, items }: FooterColumnUtilProps) => {
    
    return (
        <div className="footer-column w-48">
            <h3 className="font-outfit text-2xl text-white font-semibold leading-9 capitalize mb-6">
                {title}
            </h3>
            <ul className="flex flex-col gap-4">
                {Array.isArray(items) &&
                items.length > 0 &&
                items.map((footerItem, footerKey) => (
                    <li className="footer-menu-item" key={footerKey}>
                        <a href={footerItem.url} 
                        target="_blank"
                        className="font-outfit text-base text-tertiary leading-relaxed capitalize transition-colors hover:underline hover:text-white">{footerItem.text}</a>
                    </li>
                ))     
                }
            </ul>
        </div>
    )
}