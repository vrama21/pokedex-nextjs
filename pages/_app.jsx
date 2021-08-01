import 'tailwindcss/tailwind.css';
import '../styles/global.scss';
import '../styles/types.scss';
import SearchBar from '../components/SearchBar/SearchBar';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <SearchBar />
      <Component {...pageProps} />
    </>
  );
};

export default App;
