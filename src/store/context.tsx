import { useContext,createContext,useState, ReactNode, useEffect} from "react"
import { Card } from "../type/Card";
import { CardList } from "./Array/CardList";

// serve a mescolare l'array
const shuffleArray = (array: Card[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        //Math.floor arrotonda il numero generato tra 0 e i 
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

interface ContextType{
    cardList : Card[]
    setcardList : (cardList : Card[]) => void
    handleProva: (item:Card)=>void
}

const Context=createContext<ContextType | undefined>(undefined);

const ContextProvider = ({children} : {children : ReactNode}) =>{
    const [cardList, setcardList]=useState<Card[]>(shuffleArray([...CardList]));
    const [verifica,setVerifica]=useState<Card[]>([])


const handleProva = (item: Card) => {
    if (isChecking || verifica.length >= 2) {
        // Non eseguire nulla se già in verifica o se ci sono più di 2 carte selezionate
        return;
    }

    // Aggiungi l'elemento selezionato all'array di verifica
    setVerifica((prev) => [...prev, item]);

    // Aggiorna il cardList per riflettere se l'elemento è stato selezionato
    setcardList((prevList) =>
        prevList.map((card) =>
            card.id === item.id ? { ...card, success: true } : card
        )
    );

    // Controlla se ci sono 2 elementi nell'array verifica per gestire gli indovinati
    if (verifica.length === 1) {
        // Verifica se la coppia è corretta
        const arePairs = verifica[0].code === item.code; // Controlla se i codici corrispondono

        // Imposta lo stato per bloccare ulteriori clic
        setIsChecking(true);

        if (!arePairs) {
            // Se non sono una coppia, resetta success a false dopo un breve ritardo
            setTimeout(() => {
                setcardList((prevList) =>
                    prevList.map((card) =>
                        card.id === item.id || card.id === verifica[0].id
                            ? { ...card, success: false } // Reset per entrambe le carte se non corrispondono
                            : card
                    )
                );
                // Resetta l'array di verifica e sblocca i clic
                setVerifica([]);
                setIsChecking(false);
            }, 500); // Ritardo di 1 secondo
        } else {
            // Se sono una coppia, resetta l'array di verifica senza timeout
            setVerifica([]);
            setIsChecking(false);
        }
    }
};

// Assicurati di dichiarare il nuovo stato nel tuo componente
const [isChecking, setIsChecking] = useState(false);

    
    
    
    
    

    useEffect(()=>{
        console.log(cardList)    
    },[])

    const value ={cardList,setcardList,handleProva};
    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

const useContextApp = ()=>{
    const context = useContext(Context);
    if(!context){
        throw new Error("Problem in Context!")
    }
    return context;
};

export {ContextProvider,useContextApp};