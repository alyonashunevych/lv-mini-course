import { Main } from './components/Main';
import './App.scss';
import { Block2 } from './components/Block2';
import { Block3 } from './components/Block3';
import { Block4 } from './components/Block4';
import { Block5 } from './components/Block5';
import { Block6 } from './components/Block6';
import { Block7 } from './components/Block7';
import { Block8 } from './components/Block8';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';
import { Aside } from './components/Aside/Aside';

export const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app">
      <Aside isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Main onOpen={() => setIsMenuOpen(true)} />
      <Block2 />
      <Block3 />
      <Block4 />
      <Block5 />
      <Block6 />
      <Block7 />
      <Block8 />
      <Footer />
    </div>
  );
};
