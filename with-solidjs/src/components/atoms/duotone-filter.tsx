import { hexToRgb } from '~/utils/colors/hex-to-rgb';

type Props = {
  id: string;
  matrix?: string;
  light: string;
  dark: string;
};

function getTableValues(light: number, dark: number): string {
  return `${+light / 255} ${+dark / 255}`;
}

export function DuotoneFilter(props: Props) {
  const rValues = () =>
    getTableValues(hexToRgb(props.light).r, hexToRgb(props.dark).r);

  const gValues = () =>
    getTableValues(hexToRgb(props.light).g, hexToRgb(props.dark).r);

  const bValues = () =>
    getTableValues(hexToRgb(props.light).b, hexToRgb(props.dark).r);

  return (
    <div class="hidden">
      <svg xmlns="http://www.w3.org/2000/svg">
        <filter id={props.id}>
          {props.matrix && (
            <feColorMatrix
              type="matrix"
              result="grayscale"
              values={props.matrix}
            />
          )}

          <feComponentTransfer
            color-interpolation-filters="sRGB"
            result={props.id}
          >
            <feFuncR type="table" tableValues={rValues()} />
            <feFuncG type="table" tableValues={gValues()} />
            <feFuncB type="table" tableValues={bValues()} />
            <feFuncA type="table" tableValues="0 1" />
          </feComponentTransfer>
        </filter>
      </svg>
    </div>
  );
}
