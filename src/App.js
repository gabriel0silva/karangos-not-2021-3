import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppHeader from './ui/AppHeader';
import AppFooter from './ui/AppFooter';
import { createTheme, ThemeProvider } from '@mui/material';
import { yellow, pink } from '@mui/material/colors';
import Box from '@mui/material/Box';

import ClientesList from './rounted/ClientesList';
import ClientesForm from './rounted/ClientesForm';

const customTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: yellow[500]
    },
    secondary: {
      main: pink[500]
    }
  }
})

function App() {
  return (
    <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <Box sx={{ 
            minHeight: '100vh',
            backgroundColor: customTheme.palette.background.default,
            color: customTheme.palette.text.primary
          }}>

            <AppHeader />
              <Box component='main' sx={{
                  margin: '20px 20px 60px 20px'
                }}>
                <Switch>
                

                  <Route path="/clientes" exact>
                    <ClientesList />
                  </Route>

                  <Route path="/clientes/new">
                    <ClientesForm />
                  </Route>

                  <Route path="/clientes/:id">
                    <ClientesForm />
                  </Route>
                </Switch>
            </Box>
            <AppFooter />
          </Box>
        </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
