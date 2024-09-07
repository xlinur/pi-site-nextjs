import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedAdvantage extends Schema.Component {
  collectionName: 'components_shared_advantages';
  info: {
    displayName: 'advantage';
  };
  attributes: {
    text: Attribute.RichText;
  };
}

export interface SharedButtonLink extends Schema.Component {
  collectionName: 'components_shared_button_links';
  info: {
    displayName: 'ButtonLink';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface SharedCompaniesLogos extends Schema.Component {
  collectionName: 'components_shared_companies_logos';
  info: {
    displayName: 'CompaniesLogos';
  };
  attributes: {
    addLogoBtn: Attribute.Component<'shared.button-link'>;
    logos: Attribute.Component<'shared.media', true>;
  };
}

export interface SharedContactLabelItem extends Schema.Component {
  collectionName: 'components_shared_contact_label_items';
  info: {
    displayName: 'contactLabelItem';
  };
  attributes: {
    typeLabel: Attribute.String;
    valueLabel: Attribute.String;
  };
}

export interface SharedFooter extends Schema.Component {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    socialMediaTitle: Attribute.RichText;
    supportTitle: Attribute.String;
    ContactsTitle: Attribute.String;
    copywritig: Attribute.String;
    privacyAndPolicy: Attribute.String;
  };
}

export interface SharedHeroMain extends Schema.Component {
  collectionName: 'components_shared_hero_mains';
  info: {
    displayName: 'HeroMain';
    description: '';
  };
  attributes: {
    title: Attribute.RichText;
    description: Attribute.RichText;
    hereNowBtn: Attribute.Component<'shared.button-link'>;
    candidateBtn: Attribute.Component<'shared.button-link'>;
    recorWord: Attribute.String;
    advantages: Attribute.Component<'shared.advantage', true>;
  };
}

export interface SharedHeroSection extends Schema.Component {
  collectionName: 'components_shared_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.RichText;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

export interface SharedStartConversationForm extends Schema.Component {
  collectionName: 'components_shared_start_conversation_forms';
  info: {
    displayName: 'StartConversationForm';
    description: '';
  };
  attributes: {
    servicesLabel: Attribute.String;
    subTitle: Attribute.String;
    info: Attribute.String;
    nameLabel: Attribute.String;
    companyLabel: Attribute.String;
    contacts: Attribute.Component<'shared.contact-label-item', true>;
    descriptionLabel: Attribute.String;
    legalCheckboxText: Attribute.String;
    submitBtn: Attribute.Component<'shared.button'>;
  };
}

export interface SharedTestShared extends Schema.Component {
  collectionName: 'components_shared_test_shareds';
  info: {
    displayName: 'test shared';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SharedText extends Schema.Component {
  collectionName: 'components_shared_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {};
}

export interface SharedTrustedMap extends Schema.Component {
  collectionName: 'components_shared_trusted_maps';
  info: {
    displayName: 'TrustedMap';
  };
  attributes: {
    title: Attribute.String;
    variant: Attribute.Enumeration<['bigMap', 'smallMap']>;
    connectBtn: Attribute.Component<'shared.button-link'>;
  };
}

export interface SharedWhyPersonalInvestItem extends Schema.Component {
  collectionName: 'components_shared_why_personal_invest_items';
  info: {
    displayName: 'Why Personal Invest Item';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.Text;
  };
}

export interface SharedWhyPersonalInvest extends Schema.Component {
  collectionName: 'components_shared_why_personal_invests';
  info: {
    displayName: 'Why Personal Invest';
  };
  attributes: {
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.advantage': SharedAdvantage;
      'shared.button-link': SharedButtonLink;
      'shared.button': SharedButton;
      'shared.companies-logos': SharedCompaniesLogos;
      'shared.contact-label-item': SharedContactLabelItem;
      'shared.footer': SharedFooter;
      'shared.hero-main': SharedHeroMain;
      'shared.hero-section': SharedHeroSection;
      'shared.media': SharedMedia;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.start-conversation-form': SharedStartConversationForm;
      'shared.test-shared': SharedTestShared;
      'shared.text': SharedText;
      'shared.trusted-map': SharedTrustedMap;
      'shared.why-personal-invest-item': SharedWhyPersonalInvestItem;
      'shared.why-personal-invest': SharedWhyPersonalInvest;
    }
  }
}
