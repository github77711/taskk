import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import NewsEventsPress from './components/NewsEventsPress/NewsEventsPress';
import Products from './components/Products/Products';
import GlobalSolution from './components/GlobalSolution/GlobalSolution';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <NewsEventsPress />
      <Products />
      <GlobalSolution />
      <Footer />
    </div>
  );
}

export default App;
