import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#112342',
        },
        secondary: {
            main: '#a6d5ff',
        },
        error: {
            main: '#000000',
        },
    },
});

export default theme;
