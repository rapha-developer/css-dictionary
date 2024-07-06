import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate";
import { InheritTemplate } from "../../../../components/example/InheritTemplate";
import { PropertyTemplateProps } from "../../../../types/PropertyTemplateProps";

export default function BackdropFilterTemplate({ name, value }: PropertyTemplateProps['property']) {
    const inheritValue = `none`
    return (
        <div className="flex flex-col gap-4 px-4 w-full">
            <div className="w-full aspect-video relative">
                <img src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9" 
                    alt="T-shirt with title: make something awesome (Camisa com o título: faça algo íncrivel)" 
                    className="w-full h-full absolute top-0 left-0"
                />
                <div className="absolute top-0 left-0 z-10 h-full w-full">
                    <div className="w-full h-full flex items-center justify-center" style={{backdropFilter: inheritValue}}>
                        <div className="w-full h-40 bg-body-200/40 rounded-lg flex items-center justify-center" style={{backdropFilter: value}}>
                            <p className="font-outfit text-xl font-semibold text-secondary bg-yellow-500 p-2 rounded-md text-center">Título grande</p>
                        </div>
                    </div>
                </div>
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