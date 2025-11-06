import './App.css'
import {SearchCepCard} from "@/features/cep-feature/components/search-cep.card.tsx";
import {SearchedCepCard} from "@/features/cep-feature/components/searched-cep.card.tsx";
import {useState} from "react";


// Defining the type for CEP data
export type cepDataType = {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    erro?: boolean;
}

function App() {
    const [cep, setCep] = useState("");
    const [showSearchedCard, setShowSearchedCard] = useState(true);
    const [data, setData] = useState<cepDataType | null>(null);
    const [loading, setLoading] = useState(false);

    // Handle input change on CEP field
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCep(e.target.value);
    }

    // Toggle between search card and result card
    const changeCards = () => {
        return showSearchedCard ? setShowSearchedCard(false) : setShowSearchedCard(true);
    }

    // Fetch CEP data from API
    const requestCepData = async () => {
        setLoading(true);
        try{
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const value = await response.json();
            if(value.erro) {
                handleError();
                return;
            }
            setData(value);
            changeCards();
        }catch (error) {
            console.error("Erro ao buscar o CEP:", error);
        }finally {
            setLoading(false);
        }
    }

    // Handle error when CEP is not found
    const handleError = () => {
        alert("CEP não encontrado. Por favor, verifique o CEP digitado.");
        setLoading(false);
    }

    // Handle click event on search button
    const handleClick = () => {
       event?.preventDefault()
        if(cep.trim() === "") {
            return;
        }else{
            requestCepData();
        }
        console.log("Buscar CEP:", cep);
    }


  return (
     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

         {
             showSearchedCard ?(
                 <SearchCepCard requestingApi={loading} onChange={onChangeInput} inputValue={cep} onSubmit={handleClick} />
             ): (  data && <SearchedCepCard changeCards={changeCards} cepData={data}/>
             )}
     </div>
  )
}

export default App
