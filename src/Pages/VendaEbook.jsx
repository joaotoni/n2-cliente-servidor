import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "../Components/Card/Card";
import List from "../products.json"


export default function VendaEbook(){
    return(
      <main >
        <h2 className="text-red-800 text-center text-[28px] font-bold">Conheça os nossos E-Books!!</h2>
        <section className="flex py-6">
          <div className="flex overflow-x-auto scrollbar scrollbar-track-[#1d1d1d] py-6">
            {List.map((card) =>(
              <Card info={card} key={card.id} />
            ))}
          </div>
        </section>
        <ToastContainer theme="dark" />
      </main>
    )
}