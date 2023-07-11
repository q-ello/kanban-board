import './App.scss';
import Layout from './components/layout/Layout';
import Header from './components/header/Header';
import Content from './components/content/Content';
import { BrowserRouter } from 'react-router-dom';
import { FormDataContextWrapper } from './context/form-data-context';
import Footer from './components/footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <FormDataContextWrapper>
        <div className="App">
          <Layout
            HeaderComponent={<Header />}
            ContentComponent={<Content />}
            FooterComponent={<Footer />}
          />
        </div>

      </FormDataContextWrapper>
    </BrowserRouter>

  );
}

export default App;
