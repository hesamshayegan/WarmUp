import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({

    palette: {
        primary: {
            main: '#51B52D'
        }
    },

    typography: {

        fontFamily: "\"Poppins\", \"Helvetica\", \"Arial\", sans-serif",

    },

})

theme = responsiveFontSizes(theme);

export default theme;