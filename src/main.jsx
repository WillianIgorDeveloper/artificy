import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from'react-router-dom'

import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { CrieSuaFicha } from './pages/CrieSuaFicha'
import { Sobre } from './pages/Sobre'
import { Apoie } from './pages/Apoie'
import { NotFound } from './pages/NotFound'

import { Geral } from './components/CrieSuaFicha/Geral'
import { Raca } from './components/CrieSuaFicha/Raca'
import { Classe } from './components/CrieSuaFicha/Classe'
import { Atributos } from './components/CrieSuaFicha/Atributos'
import { Descricao } from './components/CrieSuaFicha/Descricao'
import { Equipamento } from './components/CrieSuaFicha/Equipamento'
import { Ficha } from './components/CrieSuaFicha/Ficha'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/crie-sua-ficha' element={<CrieSuaFicha />}>
          <Route index element={<Geral />} />
          <Route path='raca' element={<Raca />} />
          <Route path='classe' element={<Classe />} />
          <Route path='atributos' element={<Atributos />} />
          <Route path='descricao' element={<Descricao />} />
          <Route path='equipamento' element={<Equipamento />} />
          <Route path='ficha' element={<Ficha />} />
        </Route>
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/apoie' element={<Apoie />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)




// Anotações
// Salvar o local storage com uma key única, e usar ela para salvar o charactereSheet em um servidor
// Fazer verificação a cada 10 segundos se o objeto foi alterado para salvar
// Amostrar um toast sempre que os dados estiverem sendo salvos
// Salvar quando o usuário clicar em salvar ou quando o usuário apertar ctrl+s
// Sempre que a página for aberta, sincronizar os dados do local storage com o do servidor
// Informar a key da ficha e permitir que o usuário insira uma key para carregar tosdos os dados