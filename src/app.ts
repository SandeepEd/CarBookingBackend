import express from 'express';
import { router } from './routes';
import cors from 'cors';

const app = express();

app.use(
    cors({ origin: `*` }),
    express.json(),
    express.urlencoded({ extended: false }),
)

app.use(router)

app.listen(3000, () => {
    console.log('Server is running');
}
);
