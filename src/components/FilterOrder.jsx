import { useState } from 'react';

export default function FilterOrder({sortDataDesc, sortDataAsc}) {

    const [buttonText, setButtonText] = useState("DESCENDENTE");

    const changeOrder = (text) => {
        if (buttonText == 'ASCENDENTE'){
            setButtonText("DESCENDENTE")
            sortDataAsc()
        } else {
            setButtonText("ASCENDENTE")
            sortDataDesc()
        }
        
    }
    
    return <>
    <button onClick={() => changeOrder()}> {buttonText} </button>
    </>

}
