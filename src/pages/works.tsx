import React from 'react';

import { GetStaticProps } from 'next';

import { Entry } from 'contentful';

import SectionTitle from '@/components/atoms/SectionTitle';
import { SEOProps } from '@/components/atoms/SEO';
import WorkCard from '@/components/atoms/WorkCard';
import Layout from '@/components/templates/Layout';

import contentfulApi from '@/services/contentful';

import { formatLocation } from '@/utils/location';
import { SECTIONS_IDS } from '@/utils/sections';

import { Work } from '@/interfaces/work';

import { Section } from '@/styles/pages/works';

interface WorksData {
  name: string;
  title: string;
}

interface WorksProps {
  SEO: SEOProps;
  title: string;
  works: Entry<Work>[];
}

const Works: React.FC<WorksProps> = ({ SEO, title, works }) => {
  return (
    <Layout seo={SEO}>
      <Section>
        <SectionTitle>{title}</SectionTitle>

        {works?.map((work) => (
          <WorkCard key={work.fields.name} work={work} />
        ))}
      </Section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const worksLayoutPromise = contentfulApi.getEntry<WorksData>(
    SECTIONS_IDS.works,
    {
      locale: formatLocation(context.locale),
    },
  );

  const workListPromise = contentfulApi.getEntries<Work>({
    locale: formatLocation(context.locale),
    content_type: 'work',
  });

  const [worksData, workList] = await Promise.all([
    worksLayoutPromise,
    workListPromise,
  ]);

  const { name, title } = worksData.fields;

  const SEO: SEOProps = {
    title: name,
  };

  return {
    props: {
      SEO,
      title,
      works: workList.items,
    },
  };
};

export default Works;
