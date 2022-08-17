import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: {
      mainBackground: string;
      primaryText: string;
      secondaryText: string;
      disable: string;
      border: string;
      divider: string;
      background: string;
      tableHeader: string;
      themeIcon: string;
      // button-color
      defaultButtonColor: string;
      defaultButtonBackground: string;
      // point-color
      hover: string;
      blue1: string;
      blue2: string;
      blue3: string;
      green: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      black: string;
      red: string;
      white: string;
      lightImg: string;
      darkImg: string;
      [key: string]: any;
      // TODO: 객체에 string 으로 접근 시 에러 방지를 위한 조치
    };
    fontSizes: {
      xsm: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      [key: string]: any;
    };
    fontWeights: {
      extraBold: number;
      bold: number;
      semiBold: number;
      regular: number;
      [key: string]: any;
    };

  }
}
