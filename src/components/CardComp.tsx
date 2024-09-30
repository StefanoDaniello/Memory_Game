import { Card } from "../type/Card";
import { useContextApp } from "../store/context";

function CardComp(children: Card) {
    const { handleProva } = useContextApp();

    return (
        <div 
            className={`card ${children.success ? 'success' : 'incorrect'}`} 
            onClick={() => handleProva(children)} // Passa l'oggetto children al gestore di clic
        >
            <img src={children.img} alt={`Card ${children.id}`} />
        </div>
    );
}

export default CardComp;
