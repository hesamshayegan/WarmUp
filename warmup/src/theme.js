import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({

    palette: {
        primary: {
            main: '#473E3E'
        }
    },

    typography: {

        fontFamily: "\"Poppins\", \"Helvetica\", \"Arial\", sans-serif",

    },
    
    // transitions: {
    //     easing: {

    //       easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',

    //       easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',

    //       easeIn: 'cubic-bezier(0.4, 0, 1, 1)',

    //       sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    //     },
    //   }

})

theme = responsiveFontSizes(theme);

export default theme;