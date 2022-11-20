import { createTheme, ThemeProvider } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline'

import Home from './pages/Home'
import { IFoodThemeProvider, OrdersProvider } from './hooks'

const mainTheme = createTheme({
  palette: {
    primary: {
      main: red[500]
    }
  }
})

const App = () => (
  <ThemeProvider theme={mainTheme}>
    <CssBaseline />
    <IFoodThemeProvider>
      <OrdersProvider>
        <Home />
      </OrdersProvider>
    </IFoodThemeProvider>
  </ThemeProvider>
)

export default App
