import { Hero } from '../atoms/hero';
import { SocialIcon } from '../atoms/social-icon';

type Props = {
  heroURL: string;
};

export function IntroSection(props: Props) {
  return (
    <section class="flex flex-row items-center">
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

      <div class="flex flex-col items-end font-heading whitespace-nowrap mr-8">
        <h1 class="text-8xl font-thin mb-2">
          Henrique <strong>Miranda</strong>
        </h1>
        <h2 class="text-3xl tracking-wide">
          Full Stack Developer <strong>&</strong> Designer
        </h2>

        <ul class="flex space-x-6 mt-6">
          <SocialIcon name="github" />
          <SocialIcon name="linkedin" />
          <SocialIcon name="instagram" />
          <SocialIcon name="email" />
        </ul>
      </div>

      <Hero src={props.heroURL} />
    </section>
  );
}
