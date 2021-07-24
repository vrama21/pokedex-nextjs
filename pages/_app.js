import 'tailwindcss/tailwind.css'
import '../styles/global.scss';
import '../styles/types.scss';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
