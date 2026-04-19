import './App.css'

import logoGta from './assets/images.png'
import { Search, Home, Bookmark, User, Grid3x3 } from 'lucide-react'

export default function App() {
  return (
    <main className="app">

 
      <header className="top">
        <div className="top-row">
          <h1>Descobrir</h1>
          <img src={logoGta} alt="Logo Rockstar" className="profile" />
        </div>

        <p className="subtitle">
          Notícias recentes sobre a Rockstar Games e seus acontecimentos
        </p>

        <div className="search">
          <input placeholder="Buscar..." />
          <button>
            <Search size={18} />
          </button>
        </div>
      </header>

      <div className="tabs">
        <span className="active">Tendências</span>
        <span>Rockstar</span>
        <span>Jogos</span>
        <span>Empresa</span>
      </div>

      <section className="cards">

        <div className="card main">
          <div className="tag">Breaking news</div>
          <h2>Rockstar Games sofre ataque hacker em 2026</h2>
          <p>
            Um grupo conhecido como ShinyHunters teria explorado falhas em serviços externos da empresa.
          </p>
          <div className="rating">Impacto: ⭐ 4.5 / 5</div>
        </div>

        <div className="card">
          <h3>Vazamento de dados internos</h3>
          <p>Informações sobre projetos em desenvolvimento foram expostas.</p>
        </div>

        <div className="card">
          <h3>Segurança reforçada</h3>
          <p>Rockstar anuncia novas medidas após o incidente.</p>
        </div>

      </section>

  
      <h3 className="section-title">MAIS CATEGORIAS</h3>

      <div className="categories">
        <div className="cat">desenvolvedores</div>
        <div className="cat">Próximo jogo</div>
        <div className="cat">Vazamentos</div>
      </div>

      <footer className="bottom">
        <Home />
        <Grid3x3 />
        <Bookmark />
        <User />
      </footer>

    </main>
  )
}