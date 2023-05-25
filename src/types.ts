import { GraphQLObjectType, GraphQLInputObjectType } from 'graphql';

export type Languages = 'en' | 'ru';

export type DocumentationRickAndMorty = {
  type: string;
  selectedType: string;
  title: string;
};

export type GraphQLObject = GraphQLObjectType | GraphQLInputObjectType;

export type GrapQlLNestedNonNull = {
  name: string;
  args: {
    name: string;
    description: string;
    type: {
      kind: string;
      name: string;
      ofType: {
        kind: string;
        name: string;
        ofType: {
          kind: string;
          name: string;
          ofType: {
            kind: string;
            name: string;
            ofType: null;
          };
        };
      };
      defaultValue: null;
    };
  };
  type: {
    kind: string;
    name: string;
    ofType: {
      kind: string;
      name: string;
      ofType: {
        kind: string;
        name: string;
        ofType: {
          kind: string;
          name: string;
          ofType: null;
        };
      };
    };
    defaultValue: null;
  };
  description: string;
  isDeprecated: false;
  deprecationReason: null;
};

export type GraphQLNestedList = {
  name: string;
  args: [GrapQlLNestedNonNull];
  type: {
    kind: string;
    name: string;
    ofType: {
      kind: string;
      name: string;
      ofType: {
        kind: string;
        name: string;
        ofType: {
          kind: string;
          name: string;
          ofType: null;
        };
      };
    };
    defaultValue: null;
  };
  description: string;
  isDeprecated: false;
  deprecationReason: null;
};
