import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";

export default function FilterTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `none`
    return (
        <div className="flex flex-col gap-4 px-4 w-full" style={{ filter: inheritValue }}>
            <div className="w-full aspect-video relative">
                <img src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9" 
                    alt="T-shirt with title: make something awesome (Camisa com o título: faça algo íncrivel)" 
                    className="w-full h-full absolute top-0 left-0"
                    style={{filter: value}}
                />
            </div>
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