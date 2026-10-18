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
      <footer className="fixed inset-x-0 bottom-0 z-30 border-t border-ctp-surface0 bg-ctp-base px-6 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] text-center text-xs text-ctp-subtext0">
        Made by{' '}
        <a
          href="https://aly.codes"
          className="rounded-sm text-ctp-mauve underline decoration-ctp-surface2 underline-offset-4 hover:text-ctp-lavender focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ctp-mauve"
        >
          Aly Raffauf
        </a>
      </footer>
    </>
  );
}
