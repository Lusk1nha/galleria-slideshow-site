

interface ITheme {
  [name: string]: {
    color: {
      BG_COLOR: string,
      HEADER_TITLE_COLOR: string,
      HEADER_TEXT_COLOR: string,
      HEADER_BORDER_COLOR: string, 
    }
  }
}

const defaultTheme = {
  fontSize: {

  }
}

const lightTheme = {
  BG_COLOR: '#FFFFFF',
  HEADER_TITLE_COLOR: '#000000',
  HEADER_TEXT_COLOR: '#7D7D7D',
  HEADER_BORDER_COLOR: '#E5E5E5', 
}

const theme: ITheme = {
  light: {
    color: lightTheme,
    ...defaultTheme
  }
}

export default theme;