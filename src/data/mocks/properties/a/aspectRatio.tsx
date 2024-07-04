import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";

export default function AspectRatioTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = "3/2"
    return (
        <div className="flex flex-col justify-center gap-4 h-[440px]">
            <div className="w-full h-60 md:h-96">
                <img src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9" 
                    alt="T-shirt with title: make something awesome (Camisa com o título: faça algo íncrivel)" 
                    className="w-full h-full"
                    style={{aspectRatio: value}}
                />
            </div>
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
            <InheritTemplate 
                inheritValue={inheritValue}
                property={{name: name, value: value}}
            />
        </div>
    )
} 