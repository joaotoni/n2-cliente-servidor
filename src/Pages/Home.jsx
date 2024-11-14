import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <section className="flex flex-col items-center justify-center py-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Bem-vindo ao GamesRoom</h1>
                <p className="text-lg md:text-2xl mb-6 max-w-2xl text-center">
                    Explore nosso acervo de e-books e fique por dentro das últimas notícias do mundo dos games e literatura digital!
                </p>
                <Link
                    to="/venda-ebook"
                    className="bg-blue-600 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-700 transition-all"
                >
                    Confira nossos E-books
                </Link>
            </section>

            <section className="py-12">
                <h2 className="text-2xl font-bold text-center mb-8">E-books em Destaque</h2>
            </section>
        </div>
    );
}
