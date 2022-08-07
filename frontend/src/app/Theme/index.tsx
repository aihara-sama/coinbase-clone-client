import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: (palette) => ({
    fontFamily: ['Roboto', 'Noto Serif', 'serif'].join(','),
    body1: {
      color: palette.black[700],
    },
  }),
  palette: {
    primary: {
      main: '#0052ff',
      dark: '#050f19',
    },
    black: {
      100: '#868c99',
      300: '#5B616E',
      400: '#11335399',
      600: '#0a0b01',
      700: '#050f19',
      800: '#0A0B0D',
      900: '#000',
    },
    green: {
      100: '#129961',
      200: '#098551',
      900: '#133355',
    },
    white: {
      100: '#fff',
      900: '#32353d05',
    },

    blue: {
      700: '#1652f0cc',
      800: '#0052ff',
      900: '#0a46e4',
    },
    red: {
      100: '#cf202f',
    },
    common: {
      border: '#0000003b',
    },
    text: {
      primary: '#000',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedSizeLarge: ({ ownerState, theme }) => ({
          padding: theme.spacing(2.5, 6),
        }),
        contained: ({ theme }) => ({
          color: '#fff',
          backgroundColor: theme.palette.primary.main,
          '&:hover, &:focus': {
            backgroundColor: theme.palette.primary.dark,
          },
        }),
        text: ({ theme }) => ({
          color: '#050f19',
          background: 'transparent !important',
          '&:hover': {
            color: theme.palette.primary.main,
          },
        }),
        root: {
          boxShadow: 'none !important',
          fontWeight: 'bold',
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiOutlinedInput-root:hover': {
            '& fieldset': {
              borderColor: theme.palette.common.border,
            },
          },
          '& .MuiOutlinedInput-root.Mui-focused': {
            '& fieldset': {
              borderColor: '#000',
            },
          },
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow:
            '0px 2px 1px -1px rgb(0 0 0 / 0%), 0px 1px 1px 0px rgb(0 0 0 / 0%), 0px 1px 3px 0px rgb(0 0 0 / 11%)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#fff',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiList: {
      defaultProps: {
        disablePadding: true,
      },
    },
    MuiListItem: {
      variants: [
        {
          props: {
            variant: 'card',
          },
          style: ({ theme }) => ({
            '&:hover': {
              '& .MuiListItemText-primary': {
                color: theme.palette.primary.main,
              },
              '& .MuiListItemText-secondary': {
                color: theme.palette.black[700],
              },
            },
            '& .MuiListItemText-primary': {
              fontWeight: 500,
              fontSize: theme.spacing(2),
            },
            '& .MuiListItemText-secondary': {
              fontSize: theme.spacing(2),
              color: theme.palette.black[400],
            },
          }),
        },
      ],
    },
  },
  zIndex: {
    appBar: 1600,
  },
});

export default theme;
