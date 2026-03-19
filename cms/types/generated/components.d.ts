import type { Schema, Attribute } from '@strapi/strapi';

export interface CaseWebsiteDetails extends Schema.Component {
  collectionName: 'components_case_website_details';
  info: {
    displayName: 'websiteDetails';
    description: 'Details for website-type cases';
  };
  attributes: {
    liveUrl: Attribute.String & Attribute.Required;
    ctaLabel: Attribute.String &
      Attribute.DefaultTo<'\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442'>;
    openInNewTab: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface CaseDesignScreen extends Schema.Component {
  collectionName: 'components_case_design_screens';
  info: {
    displayName: 'designScreen';
    description: 'A single screen in a design case';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String;
    caption: Attribute.String;
    alt: Attribute.String;
    order: Attribute.Integer;
  };
}

export interface CaseDesignDetails extends Schema.Component {
  collectionName: 'components_case_design_details';
  info: {
    displayName: 'designDetails';
    description: 'Details for design-type cases';
  };
  attributes: {
    platform: Attribute.String & Attribute.Required;
    screensCount: Attribute.Integer;
    viewer: Attribute.Enumeration<['browser', 'phone', 'none']> &
      Attribute.DefaultTo<'browser'>;
    screens: Attribute.Component<'case.design-screen', true> &
      Attribute.Required;
    ctaLabel: Attribute.String &
      Attribute.DefaultTo<'\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043A\u0435\u0439\u0441'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'case.website-details': CaseWebsiteDetails;
      'case.design-screen': CaseDesignScreen;
      'case.design-details': CaseDesignDetails;
    }
  }
}
