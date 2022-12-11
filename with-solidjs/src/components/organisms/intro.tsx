import { SocialIcon } from '../atoms/social-icon';

export function IntroSection() {
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
        <h1 class="text-7xl font-thin uppercase mb-2">
          Henrique <strong>Miranda</strong>
        </h1>
        <h2 class="text-3xl tracking-wide">
          Full Stack Developer <strong>&</strong> Designer
        </h2>

        <ul class="flex space-x-4 mt-6">
          <li>
            <SocialIcon name="github" />
          </li>
          <li>
            <SocialIcon name="linkedin" />
          </li>
          <li>
            <SocialIcon name="instagram" />
          </li>
          <li>
            <SocialIcon name="twitter" />
          </li>
          <li>
            <SocialIcon name="email" />
          </li>
        </ul>
      </div>

      <div class="relative ml-8">
        <div class="p-6">
          <img
            class="relative z-10 profile hover:filter-none"
            src="avatar.png"
          />
        </div>
        <span class="absolute h-44 w-44 bg-primary-500 top-0 left-0" />
        <span class="absolute h-1/2 w-1/4 bg-secondary-500 bottom-0 right-0" />
      </div>
    </section>
  );
}
