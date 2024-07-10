import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/Portfolio';
import Resume from './pages/resume/Resume';
import MainPage from './shared/components/MainPage/MainPage';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import NavLinks from './shared/components/Navigation/NavLinks';
import PortfolioDetails from './pages/portfolioDetails/PortfolioDetails';

function App() {
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <NavLinks />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />}>
              <Route index element={<MainNavigation />}/>
              {/* <Route path="/about" element={<About />}/> */}
              <Route path="/resume" element={<Resume />}/>
              <Route path="/portfolio" element={<Portfolio />}/>
              <Route path="/portfolio/:name" element={<PortfolioDetails />}/>
              <Route path="/contact" element={<Contact />}/>
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
