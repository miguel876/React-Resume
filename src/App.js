import './App.scss';
import Header from './structure/Header.js';
import Layout from './structure/Layout.js';
import Footer from './structure/Footer.js';
import SmoothScroll from './smoothScrolling.js';

function App() {
  new SmoothScroll(document,120,12);

  return (
    <div className="App">
      <Header />
      <Layout />
      <Footer />
    </div>
  );
}


export default App;
