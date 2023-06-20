import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';
import { calculateRisk } from '../src/controllers/riskController';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Swagger API documentationd
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Calculate risk API endpoint
app.post('/calculate-risk', calculateRisk);

// Default route
app.get('/', (req: Request, res: Response) => {
  res.send('Insurance Risk API is running');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
