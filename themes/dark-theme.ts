import { createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors'

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
        //   default: grey[300]
        },
        secondary: {
          main: '#19874b'
        },
        error: {
          main: red.A400
        }
      },
  
      components: {
          MuiAppBar: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    backgroundColor: '#4a148c',
                }
            }
          }
      }
  });
  