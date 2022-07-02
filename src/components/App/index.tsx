import { Box } from '@mui/material';
import { Layout } from 'Layout';
import { BrowserRouter } from 'react-router-dom';
import { RoutersComponent } from 'routes';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Box>
          <RoutersComponent />
        </Box>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
