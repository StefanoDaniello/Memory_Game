import { Card } from "../type/Card";
import { useContextApp } from "../store/context";

function CardComp(children: Card) {
    const { handleProva } = useContextApp();

    return (
        // backColor
        <div 
            className={`card ${children.success ? 'success' : 'incorrect'}`} // Aggiungi 'success' se l'immagine è stata indovinata, altrimenti 'incorrect'
            onClick={() => handleProva(children)} // Passa l'oggetto children al gestore di clic
        >
            <img src={children.img} alt={`Card ${children.id}`} />
        </div>
    );
}

export default CardComp;
