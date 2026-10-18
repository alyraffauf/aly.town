import { Footer } from './components/Footer';
import { ServiceLinks } from './components/ServiceLinks';

export function App() {
  return (
    <>
      <main>
        <img
          src="/cottage.svg"
          alt=""
          width="48"
          height="48"
          className="mb-3 [image-rendering:pixelated]"
        />
        <h1 className="text-ctp-mauve">aly.town</h1>
        <p className="text-ctp-subtext0">atmosphere apps & services.</p>
        <ServiceLinks />
      </main>
      <Footer />
    </>
  );
}
