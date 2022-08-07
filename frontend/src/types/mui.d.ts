import '@mui/material/ListItem';
import '@mui/material/ListItemText';
import {
  CommonColors as MuiCommonColors,
  PaletteOptions as MuiPaletteOptions,
} from '@mui/material/styles/createPalette';
import '@mui/material/Typography';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    underline: true;
  }
}

declare module '@mui/material/ListItemText' {
  interface ListItemTextProps {
    variant?: 'card';
  }
}

declare module '@mui/material/ListItem' {
  interface ListItemBaseProps {
    variant?: 'card';
  }
}

declare module '@mui/material/styles/createPalette' {
  interface CommonColors extends MuiCommonColors {
    border: string;
  }
  interface PaletteOptions extends MuiPaletteOptions {
    black?: PaletteColorOptions;
    white?: PaletteColorOptions;
    blue?: PaletteColorOptions;
    green?: PaletteColorOptions;
    red?: PaletteColorOptions;
  }

  interface Palette {
    black: PaletteOptions['black'];
    red: PaletteOptions['red'];
    blue: PaletteOptions['blue'];
    white: PaletteOptions['white'];
  }
}
