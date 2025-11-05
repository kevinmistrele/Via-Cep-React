import './App.css'
import {SearchCepCard} from "@/features/cep-feature/components/search-cep.card.tsx";
import {SearchedCepCard} from "@/features/cep-feature/components/searched-cep.card.tsx";

function App() {

  return (
   <>
     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
         <SearchCepCard/>
         <SearchedCepCard/>
     </div>
   </>
  )
}

export default App
