import { useI18n } from 'vue-i18n';

const useMail = () => {
  const { t } = useI18n({ inheritLocale: true });

  const mail = {
    to: 'felix.staud@gmail.com',
    subject: `${t('contact')} via felix-staud.com`,
  };

  return {
    mail,
  };
};

export default useMail;
