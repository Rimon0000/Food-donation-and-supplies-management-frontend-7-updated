/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'react-helmet' {
    import { Component, ReactNode } from 'react';
  
    interface HelmetProps {
      children?: ReactNode;  // Allow children inside Helmet
      base?: any;
      bodyAttributes?: any;
      defaultTitle?: string;
      defer?: boolean;
      encodeSpecialCharacters?: boolean;
      htmlAttributes?: any;
      link?: any[];
      meta?: any[];
      noscript?: any[];
      onChangeClientState?: (newState: any) => void;
      script?: any[];
      style?: any[];
      title?: string;
      titleAttributes?: any;
      titleTemplate?: string;
    }
  
    class Helmet extends Component<HelmetProps> {}
  
    export { Helmet };
  }
  