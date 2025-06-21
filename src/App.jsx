import { useRef } from 'react';
import moon from './moon.png';
import land from './land.png';
import cat from './cat.gif';
import oma from './altere-frau.jpg';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={8} ref={ref}>

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={5}
          speed={1}
          factor={7}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 6.9, end: 7 }}
          style={{ textAlign: 'center' }}
        >
          <img src={oma} />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1, end: 4.5 }}
          style={{ textAlign: 'center' }}
        >
          <img src={cat} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
        >
          <h2>Welcome to my website. Follow the cat and scroll</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={1}
        >
          <h2>Noch ein Stück</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={1}
        >
          <h2>Noch ein Stück</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
          speed={1}
        >
          <h2>Noch ein Stück</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={6}
          speed={1}
        >
          <h2>Noch ein Stück</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={7}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>Du hast graue Haare xD</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
