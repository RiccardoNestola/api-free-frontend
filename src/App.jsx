import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { HomePage } from './Pages/HomePage';
import './App.css'

function App() {
  return (

    <BrowserRouter>
      <Header />

      <main>

        <Routes>
          <Route path="/" element={<HomePage />}> </Route>
          
        </Routes>

      </main>

      <footer>
        
      </footer>


    </BrowserRouter>

  )
}

export default App
