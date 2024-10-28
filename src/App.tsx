import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './pages/contact/Contact';
import HomePage from './pages/homepage/HomePage';
import Portfolio from './pages/portfolio/Portfolio';
import PortfolioDetails from './pages/portfolioDetails/PortfolioDetails';
import Resume from './pages/resume/Resume';
import MainPage from './shared/components/MainPage/MainPage';
import MainNavigation from './shared/components/Navigation/MainNavigation';
// import Blog from './pages/blog/Blog';

function App() {
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
      <MainNavigation />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />}>
              <Route index element={<HomePage />}/>
              <Route path="/resume" element={<Resume />}/>
              {/* <Route path="/blogs" element={<Blog />}/> */}
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
