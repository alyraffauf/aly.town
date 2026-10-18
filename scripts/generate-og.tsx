import { Resvg } from '@resvg/resvg-js';
import { readFile, writeFile } from 'node:fs/promises';
import satori from 'satori';

const width = 1200;
const height = 630;
const font = await readFile(
  new URL('./assets/cascadia-code-regular.ttf', import.meta.url),
);
const cottage = await readFile(
  new URL('../public/cottage.svg', import.meta.url),
);
const cottageImage = new Resvg(cottage, {
  fitTo: { mode: 'width', value: 192 },
})
  .render()
  .asPng();

const svg = await satori(
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width,
      height,
      backgroundColor: '#1e1e2e',
      color: '#cba6f7',
      fontFamily: 'Cascadia Code',
    }}
  >
    <img
      src={`data:image/png;base64,${cottageImage.toString('base64')}`}
      width={192}
      height={192}
      alt=""
    />
    <div style={{ fontSize: 80, marginTop: 24 }}>aly.town</div>
  </div>,
  {
    width,
    height,
    fonts: [
      { name: 'Cascadia Code', data: font, weight: 400, style: 'normal' },
    ],
  },
);

const image = new Resvg(svg).render();
await writeFile(new URL('../public/og.png', import.meta.url), image.asPng());
console.log(`Generated public/og.png (${image.width}×${image.height})`);
