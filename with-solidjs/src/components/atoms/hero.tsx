import { Motion, Variant } from '@motionone/solid';
import { animate, spring } from 'motion';
import { createSignal, onMount } from 'solid-js';

type Animations = Record<'left' | 'right', Variant>;

type Props = {
  src: string;
};

const defaultAnimation = {
  opacity: 1,
  y: 0,
  x: 0,
} as const;

const springTransition = {
  duration: 1,
  easing: spring({ mass: 2 }),
} as const;

const linearTransition = {
  duration: 4,
  repeat: Infinity,
  easing: 'linear',
} as const;

export function Hero(props: Props) {
  let containerRef: HTMLDivElement | undefined;

  const [animations, setAnimations] = createSignal<Animations>();

  function handleMouseMove({ offsetX, offsetY }: MouseEvent) {
    const centerX = (containerRef?.clientWidth ?? 0) / 2;
    const centerY = (containerRef?.clientHeight ?? 0) / 2;

    const x = Math.floor(((centerX - offsetX) / centerX) * 10);
    const y = Math.floor(((centerY - offsetY) / centerY) * 10);

    setAnimations((state) => ({
      ...state,
      left: {
        x,
        y,
        opacity: 1,
        transition: springTransition,
      },
      right: {
        x: -x,
        y: -y,
        opacity: 1,
        transition: springTransition,
      },
    }));
  }

  function handleMouseLeave() {
    setAnimations((state) => ({
      ...state,
      left: {
        opacity: 1,
        x: [0, 0, -5, 0, 5, 0, 0],
        y: [0, 5, 0, -5, 0, 5, 0],
        transition: linearTransition,
      },
      right: {
        opacity: 1,
        x: [0, 5, 0, -5, 0, 5, 0],
        y: [0, 0, -5, 0, 5, 0, 0],
        transition: linearTransition,
      },
    }));
  }

  onMount(() => {
    animate('#left-shape', defaultAnimation, springTransition).finished.then(
      () => {
        animate(
          '#left-shape',
          {
            x: [0, 0, -5, 0, 5, 0, 0],
            y: [0, 5, 0, -5, 0, 5, 0],
          },
          linearTransition,
        );
      },
    );

    animate('#right-shape', defaultAnimation, springTransition).finished.then(
      () => {
        animate(
          '#right-shape',
          {
            x: [0, 5, 0, -5, 0, 5, 0],
            y: [0, 0, -5, 0, 5, 0, 0],
          },
          linearTransition,
        );
      },
    );
  });

  return (
    <div
      ref={containerRef}
      class="relative ml-8"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div class="hidden">
        <svg xmlns="http://www.w3.org/2000/svg">
          <filter id="duotone">
            <feComponentTransfer
              color-interpolation-filters="sRGB"
              result="duotone"
            >
              <feFuncR type="table" tableValues="0.0078431373 0.0823529412" />
              <feFuncG type="table" tableValues="0.0039215686 0.6705882353" />
              <feFuncB type="table" tableValues="0.2392156863 0.8196078431" />
              <feFuncA type="table" tableValues="0 1" />
            </feComponentTransfer>
          </filter>
        </svg>
      </div>

      <div class="p-6">
        {/* hover:filter-none */}
        <img class="relative z-10 profile" src={props.src} />
      </div>

      <Motion.span
        id="left-shape"
        initial={{ opacity: 0, y: -25, x: -25 }}
        animate={animations()?.left}
        class="absolute opacity-100 h-44 w-44 bg-primary-500 top-0 left-0"
      />
      <Motion.span
        id="right-shape"
        initial={{ opacity: 0, y: 25, x: 25 }}
        animate={animations()?.right}
        class="absolute h-1/2 w-1/4 bg-secondary-500 bottom-0 right-0"
      />
    </div>
  );
}
