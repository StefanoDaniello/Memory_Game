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
}

const Context=createContext<ContextType | undefined>(undefined);

const ContextProvider = ({children} : {children : ReactNode}) =>{
    const [cardList, setcardList]=useState<Card[]>(shuffleArray([...CardList]));

    useEffect(()=>{
        console.log(cardList)    
    },[])

    const value ={cardList,setcardList};
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