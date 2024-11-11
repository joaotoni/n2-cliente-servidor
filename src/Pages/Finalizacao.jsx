import { Link } from "react-router-dom";

export default function Done() {
  return (
    <main>
      <section className="flex justify-center text-center pt-16" >
        <div className="bg-opacity-50 bg-gradient-to-b from-orange-900 to-orange-400 w-[420px] p-6 rounded-[12px]">
          <h2 className="text-white font-bold text-[24px]">Pedido finalizado com sucesso</h2>
          <h3 className="text-[16px] font-bold my-4">Obrigado por comprar na GAMESROOM, volte sempre!!</h3>
          <Link to={"/"}>
            <p className="text-white bg-black p-2 rounded-xl text-[18px] mt-2 mx-8">Voltar as compras</p>
          </Link>
        </div>
      </section>
    </main>
  )
}