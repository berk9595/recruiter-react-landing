import { createTheme } from "@material-ui/core";

export default function customTheme(primaryColor, secondaryColor) {
  const customFontFamily = [];

  const customTypo = {
    body1: {
      color: "#262626",
      fontSize: 18,
      fontWeight: "normal",
    },
    body2: {
      color: "#727272",
      fontSize: 16,
      fontWeight: "normal",
    },
    caption: {
      color: "#444444",
      fontWeight: "normal",
    },
    chip: {
      color: "#262626",
      fontWeight: "normal",
    },
    date: {
      color: "#262626",
      fontWeight: "normal",
    },
    error: {
      color: "#FF0000",
      fontWeight: "normal",
    },
    h1: {
      color: "#262626",
      fontWeight: "normal",
    },
    h2: {
      color: "#262626",
      fontWeight: "normal",
    },
    h3: {
      color: "#262626",
      fontWeight: "normal",
    },
    h4: {
      color: "#262626",
      fontWeight: "normal",
    },
    h5: {
      color: "#262626",
      fontWeight: "600",
    },
    h6: {
      color: "#262626",
      fontWeight: "normal",
      lineHeight: 1.4,
      fontSize: 18,
    },
    label: {
      fontWeight: "normal",
    },
    link: {
      color: "#1B295B",
      textDecoration: "underline",
    },
    subtitle1: {
      color: "#262626",
      fontSize: 18,
      fontWeight: "normal",
      lineHeight: 1.43,
    },
    subtitle2: {
      color: "#1b2c2e",
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.43,
    },

    useNextVariants: true,
  };

  const options = {
    breakpoints: {
      values: {
        lg: 1280,
        md: 960,
        sm: 600,
        xl: 1905,
        xs: 0,
      },
    },
    palette: {
      background: {
        default: "#ffffff",
      },

      inboxText: {
        primary: "#1E1E1E",
      },
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
      text: {
        primary: "#6B6B6B",
      },
    },
    shape: {
      borderRadius: 10,
    },
    typography: customTypo,
  };

  let tempTheme = createTheme(options);

  tempTheme = {
    ...tempTheme,

    overrides: {
      MuiAutocomplete: {
        input: {
          "&::placeholder": {
            ...options.typography.subtitle2,
            opacity: 1,
          },
        },
        inputRoot: {
          '&[class*="MuiOutlinedInput-root"]': {
            alignContent: "center",
            display: "flex",
            flex: "1 1",
            maxWidth: "100%",
            minWidth: 120,
            padding: 4,
          },
        },
      },
      MuiAvatar: {
        root: {
          height: 70,
          width: 70,
        },
      },
      MuiToolbar: {
        regular: {
          [tempTheme.breakpoints.down("xs")]: {
            minHeight: 64,
            paddingLeft: 8,
            paddingRight: 8,
          },
        },
      },
      MuiBackdrop: {
        root: {
          backgroundColor: "unset",
        },
      },
      MuiButton: {
        text: {
          fontWeight: 600,
          color: "#1b2c2e",
        },
        contained: {
          boxShadow: "unset",
        },
        containedPrimary: {
          "&.Mui-disabled": {
            color: "#FFFFFF",
          },
          "&:active": {
            boxShadow: "unset",
          },
          "&:hover": {
            backgroundColor: tempTheme.palette.primary.main,
            boxShadow: "unset",
          },
          backgroundColor: tempTheme.palette.primary.main,
          borderRadius: tempTheme.shape.borderRadius,
          fontWeight: 600,
        },
        outlinedPrimary: {
          "&:hover": {
            border: `1px solid ${options.palette.primary.main}`,
            color: options.palette.primary.dark,
          },
          backgroundColor: "white",
          border: `1px solid ${options.palette.primary.main}`,
          minHeight: 40,
        },
        outlinedSizeLarge: {
          fontSize: 14,
        },
        root: {
          fontSize: 16,
          borderRadius: tempTheme.shape.borderRadius,
          boxShadow: "unset",
          padding: "10px 16px",
          textTransform: "initial",
        },
      },
      MuiChip: {
        root: {
          backgroundColor: "#f5f5f5",
          borderRadius: 6,
          fontSize: 11,
          fontWeight: 600,
          height: 28,
          margin: "0px 6px 6px 0px",
        },
      },
      MuiCssBaseline: {
        "@global": {
          "*::-webkit-scrollbar": {
            width: "4px",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#bdbdbd",
          },

          body: {
            backgroundColor: "#ffffff",
          },
        },
      },
      MuiFilledInput: {
        adornedStart: {
          paddingLeft: 16,
        },
        input: {
          "&::placeholder": {
            color: "#C8C8C8",
            fontSize: 14,
            opacity: 1,
          },
          borderRadius: tempTheme.shape.borderRadius,
          padding: "12px 12px 12px",
        },
        root: {
          "&$focused": {
            backgroundColor: "rgba(0, 0, 0, 0.06)",
            borderBottom: "unset",
          },
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.06)",
            borderBottom: "unset",
          },
          backgroundColor: "#F6F6F6",
          borderRadius: tempTheme.shape.borderRadius,
        },
        underline: {
          "&:after": {
            borderBottom: "unset",
          },
          "&:before": {
            borderBottom: "unset",
          },
          "&:hover": {
            "&:before": {
              borderBottom: "unset",
            },
          },
        },
      },
      MuiInputAdornment: {
        filled: {
          "&.MuiInputAdornment-positionStart:not(.MuiInputAdornment-hiddenLabel)":
            {
              marginTop: 0,
            },
        },
        positionStart: {
          marginRight: 16,
        },
      },
      MuiInputBase: {
        root: {
          fontSize: 14,
          [tempTheme.breakpoints.down("xs")]: {
            fontSize: 16,
          },
        },
      },

      MuiListItem: {
        button: {
          "&:focus": {
            "&$selected": {
              backgroundColor: [
                `${tempTheme.palette.primary.main}20`,
                "!important",
              ],
            },
            backgroundColor: "unset",
          },
          "&:hover": {
            backgroundColor: [
              `${tempTheme.palette.primary.main}20`,
              "!important",
            ],
            color: tempTheme.palette.primary.main,
          },
        },
        root: {
          "&$selected": {
            backgroundColor: `${tempTheme.palette.primary.main}20`,
            color: tempTheme.palette.primary.main,
          },
        },
      },
      MuiOutlinedInput: {
        input: {
          padding: "14.5px 14px",
        },
        notchedOutline: {
          borderColor: ["#EAEAEA", "!important"],
          borderWidth: ["1px", "!important"],
        },
      },
      MuiSelect: {
        select: {
          "&:focus": {
            backgroundColor: "white",
            borderRadius: tempTheme.shape.borderRadius,
          },
        },
      },
      MuiTab: {
        labelIcon: {
          minWidth: 130,
        },
        root: {
          maxWidth: "150px",
          minWidth: "unset",
          textTransform: "initial",
        },
        selected: {
          fontWeight: 600,
        },
        textColorPrimary: {
          "&$selected": {
            color: tempTheme.palette.primary.main,
          },
          color: tempTheme.palette.text.main,
        },
      },
      MuiToggleButton: {
        root: {
          "&$selected": {
            "&:hover": {
              backgroundColor: `${tempTheme.palette.primary.main}20`,
              color: tempTheme.palette.primary.main,
            },
            backgroundColor: `${tempTheme.palette.primary.main}20`,
            color: tempTheme.palette.primary.main,
          },
          "&:hover": {
            backgroundColor: `${tempTheme.palette.primary.main}20`,
            color: tempTheme.palette.primary.main,
          },
          color: "#7E7E7E",
          padding: 15,
        },
      },
      MuiTypography: {
        h1: {
          [tempTheme.breakpoints.down("xs")]: {
            fontSize: 42,
          },
        },
        h2: {
          [tempTheme.breakpoints.down("xs")]: {
            fontSize: 32,
          },
        },
      },
      PrivateTabIndicator: {
        colorPrimary: {
          backgroundColor: tempTheme.palette.primary.main,
        },
      },
    },
    props: {
      MuiInput: {
        disableUnderline: true,
      },
    },
  };
  return tempTheme;
}
