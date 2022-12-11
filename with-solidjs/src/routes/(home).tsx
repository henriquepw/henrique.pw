import { Asset } from 'contentful';
import { Show } from 'solid-js';
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
  return createRouteData(async () => {
    const locale = 'en';

    const homePromise = contentfulApi.getEntry<HomeEntry>(SECTIONS_IDS.home, {
      locale,
    });

    const socialPromise = contentfulApi.getEntries({
      locale,
      content_type: 'socialMedia',
    });

    const [homeData, socialData] = await Promise.all([
      homePromise,
      socialPromise,
    ]);

    const { title, subTitle, heroImage, description } = homeData.fields;

    return {
      home: {
        title,
        subTitle,
        heroImage,
        socialData: socialData.items,
        actionText: description,
      },
    };
  });
}

export default function Home() {
  const data = useRouteData<typeof routeData>();

  return (
    <Show when={!data.loading} fallback={<div>loading...</div>}>
      <main class="bg-shape-500 text-center mx-auto h-screen p-4 text-text-500 flex justify-center items-center">
        <IntroSection />
      </main>
    </Show>
  );
}
