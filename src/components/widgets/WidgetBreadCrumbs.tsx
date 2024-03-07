import { BreadCrumbSymbolIcon } from "../../assets/icons/BreadCrumbSymbolIcon";
import { widgetBreadCrumb } from "../../types/widgetBreadCrumb";

export const WidgetBreadCrumbs = ({ actual, historic }: widgetBreadCrumb) => {

    return (
        <div className="w-auto bg-dark opacity-80 h-auto py-4 px-6 rounded-xl flex gap-4 items-center">
            {Array.isArray(historic) && 
            historic.length > 0 &&
            historic.map((historicItem) => (
                <div key={historicItem.text} className="flex items-center gap-4">
                    <span className="inline-block font-outfit text-xl text-white hover:text-primary font-normal capitalize leading-7 relative cursor-pointer group">
                        {historicItem.text}
                        <img
                            src="/active-bar.svg"
                            alt="Active bar"
                            className="absolute bottom-0 left-0 hidden group-hover:block"
                        />
                    </span>
                    <BreadCrumbSymbolIcon />
                </div>
            ))
            }
            <span className="inline-block font-outfit text-xl text-body-200 font-normal capitalize leading-7 relative cursor-none group">
                {actual.text}
                <img
                    src="/active-bar.svg"
                    alt="Active bar"
                    className="absolute bottom-0 left-0"
                />
            </span>
        </div>
    );
};
