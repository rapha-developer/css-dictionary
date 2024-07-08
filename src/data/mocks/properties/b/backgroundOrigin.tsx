import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";

export default function BackgroundOriginTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `border-box`
    return (
        <div className="w-full h-full flex flex-col gap-4 py-6 px-2 md:px-4 justify-center" style={{backgroundOrigin: inheritValue}}>
            <div className="w-full min-h-96 border-[6px] border-dashed border-primary p-6"
            style={{
                backgroundOrigin: value,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundImage: 'url("https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9")'}}></div>
            
            <InheritTemplate 
                inheritValue={inheritValue}
                property={{name: name, value: value}}
            />
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
        </div>
    )
}