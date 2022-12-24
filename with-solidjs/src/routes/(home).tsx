import { Asset } from 'contentful';
import { Show } from 'solid-js';
import { isServer } from 'solid-js/web';
import { createRouteData, useRouteData } from 'solid-start';

import { IntroSection } from '~/components/organisms/intro';

import { contentfulApi } from '~/services/contentful/contentful-api';

import { SECTIONS_IDS } from '~/utils/sections';

type HomeEntry = {
  title: string;
  subTitle: string;
  actionText: string;
  description: string;
  heroImage: Asset;
};

export function routeData() {
  const locale = 'en-US';

  const home = createRouteData(async () => {
    const homeData = await contentfulApi.getEntry<HomeEntry>(
      SECTIONS_IDS.home,
      {
        locale,
      },
    );

    const { title, subTitle, heroImage, description } = homeData.fields;

    return {
      title,
      subTitle,
      heroImage,
      actionText: description,
    };
  });

  return { home };
}

export default function Home() {
  const data = useRouteData<typeof routeData>();

  return (
    <Show when={data.home()} fallback={<div>loading...</div>}>
      <main class="bg-shape-500 text-center mx-auto h-screen p-4 text-text-500 flex justify-center items-center">
        <IntroSection />
      </main>
    </Show>
  );
}
