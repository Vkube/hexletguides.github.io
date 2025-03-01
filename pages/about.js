import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import DefaultLayout from '../components/DefaultLayout.jsx';
import LanguageMarkup from '../components/LanguageMarkup.jsx';

const About = ({ languageMarkup }) => {
  const { t } = useTranslation('about');

  return (
    <DefaultLayout title={t('page.title')} >
      <LanguageMarkup languageMarkup={languageMarkup} />
      <div className="col-lg-8 mx-auto">
        <div className="mainheading">
          <h1 className="posttitle">{t('page.title')}</h1>
        </div>
        <div className="article-post">
          <p>{t('page.text')}</p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export const getStaticProps = async ({ locale, locales, defaultLocale }) => ({
  props: {
    languageMarkup: {
      awailableLocales: locales,
      defaultLocale,
    },
    ...(await serverSideTranslations(locale, ['common', 'about'])),
  },
});

export default About;
