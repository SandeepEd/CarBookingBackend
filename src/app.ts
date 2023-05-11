import express from 'express';
import { router } from './routes';
import cors from 'cors';
import session from 'express-session'
import { createClient } from 'redis';
import RedisStore from 'connect-redis';
import nocache from 'nocache';
import helmet from 'helmet';
import { v4 as uuid } from 'uuid';
import cookieParser from 'cookie-parser';

const app = express();
const redisClient = createClient()
redisClient.connect().catch(console.error)

const redisStore = new RedisStore({
    client: redisClient,
})
const expressSession = session({
    name: 'apiSession',
    store: redisStore,
    secret: 'my_secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        // maxAge: 1000 * 60 * 60 * 24,
        secure: false,
    },
})

app.use((req: any, res, next) => {
    req.reqId = uuid();
    next();
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    next();
});

app.use(
    expressSession,
    cors({ origin: true, credentials: true }),
    helmet(),
    nocache(),
    express.json(),
    express.urlencoded({ extended: false }),
    cookieParser(),
)

app.use((req, res, next) => {
    console.log(`session come-on :::`, req.session)
    next()
})

app.use(router)

app.listen(3000, () => {
    console.log('Server is running');
}
);
