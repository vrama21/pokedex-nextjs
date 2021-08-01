import 'tailwindcss/tailwind.css';
import '../styles/global.scss';
import '../styles/types.scss';
import SearchBar from '../components/SearchBar/SearchBar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <SearchBar />
      <Component {...pageProps} />
    </>
  );
}
