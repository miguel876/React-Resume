import './App.scss';
import Header from './structure/Header.js';
import Layout from './structure/Layout.js';
import Footer from './structure/Footer.js';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Layout />
      <Footer />
    </Provider>
   
  );
}


export default App;
