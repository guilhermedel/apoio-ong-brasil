
import { useState, useMemo } from "react";
import { ongsData } from "@/data/ongs";
import ONGCard from "@/components/ONGCard";
import SearchBar from "@/components/SearchBar";
import { Heart, Users, Globe } from "lucide-react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredONGs = useMemo(() => {
    if (!searchTerm) return ongsData;
    
    return ongsData.filter(ong => 
      ong.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ong.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ong.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-500 opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full">
              <Heart className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Conectando
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"> Corações</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Descubra organizações incríveis que estão transformando o mundo. 
            Encontre a causa que toca seu coração e faça a diferença.
          </p>
          
          <div className="mb-12">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <Users className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-800">50+</div>
              <div className="text-gray-600">ONGs Cadastradas</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <Heart className="h-8 w-8 text-red-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-800">1000+</div>
              <div className="text-gray-600">Vidas Impactadas</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <Globe className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-800">25</div>
              <div className="text-gray-600">Cidades Atendidas</div>
            </div>
          </div>
        </div>
      </section>

      {/* ONGs Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Organizações que Fazem a Diferença
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça as ONGs que estão transformando comunidades e criando um futuro melhor para todos.
            </p>
          </div>

          {/* Search Results Info */}
          {searchTerm && (
            <div className="mb-8 text-center">
              <p className="text-gray-600">
                {filteredONGs.length > 0 
                  ? `Encontradas ${filteredONGs.length} ONGs para "${searchTerm}"`
                  : `Nenhuma ONG encontrada para "${searchTerm}"`
                }
              </p>
            </div>
          )}

          {/* ONGs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredONGs.map((ong) => (
              <ONGCard key={ong.id} ong={ong} />
            ))}
          </div>

          {/* Empty State */}
          {filteredONGs.length === 0 && searchTerm && (
            <div className="text-center py-16">
              <div className="mb-4">
                <Heart className="h-16 w-16 text-gray-300 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Nenhuma ONG encontrada
              </h3>
              <p className="text-gray-500">
                Tente buscar por outros termos ou navegue por todas as ONGs disponíveis.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <Heart className="h-8 w-8 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Conectando Corações</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Unindo pessoas e organizações para criar um mundo melhor, uma ação de cada vez.
            </p>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">
              © 2024 Conectando Corações. Feito com ❤️ para transformar o mundo.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
