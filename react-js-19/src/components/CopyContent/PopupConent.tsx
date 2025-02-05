import { createPortal } from "react-dom"
export const PopupContent = ({ copied }: any) => {
    const target=document.querySelector('#popup-content');
    if(!target) return null;
    return createPortal (

         <section>
            {copied && (
                <div style={{position:'absolute' , bottom:'2rem'}}>
                    Copied to clipboard
                </div>
            )}
         </section>,
         target
    )
}