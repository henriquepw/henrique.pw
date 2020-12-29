import React from 'react';
import ReactMarkdown from 'react-markdown';

import { GetStaticProps } from 'next';

import { SEOProps } from '@/components/atoms/SEO';
import SocialList, { SocialMedia } from '@/components/molecules/SocialList';

import contentfulApi from '@/services/contentful';

import { formatLocation } from '@/utils/location';
import { SECTIONS_IDS } from '@/utils/sections';

import { Container } from '@/styles/pages/contact';

interface ContactData {
  name: string;
  title: string;
  description: string;
}

interface ContactProps {
  SEO: SEOProps;
  title: string;
  description: string;
  socialData: SocialMedia[];
}

const Contact: React.FC<ContactProps> = ({
  SEO,
  title,
  description,
  socialData,
}) => {
  return (
    <Container seo={SEO}>
      <ReactMarkdown>{title}</ReactMarkdown>

      <section>
        <form action="" />

        <aside>
          <ReactMarkdown>{description}</ReactMarkdown>
          <SocialList items={socialData} isSecondary />
        </aside>
      </section>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const contactPromise = contentfulApi.getEntry<ContactData>(
    SECTIONS_IDS.contact,
    { locale: formatLocation(context.locale) },
  );

  const socialPromise = contentfulApi.getEntries({
    locale: formatLocation(context.locale),
    content_type: 'socialMedia',
  });

  const [contactData, socialData] = await Promise.all([
    contactPromise,
    socialPromise,
  ]);

  const { title, name, description } = contactData.fields;

  const SEO: SEOProps = {
    title: name,
  };

  return {
    props: {
      SEO,
      title,
      description,
      socialData: socialData.items,
    },
  };
};

export default Contact;
