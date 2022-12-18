import express from 'express'
import * as Log4js from "log4js";

let logger = Log4js.getLogger();
logger.level = process.env.MYLOGLEVEL || 'trace'
// logger.level = 'debug'
// logger.level = 'info'
// logger.level = 'warn'
// logger.level = 'error'
// logger.level = 'fatal'

const app: express.Express = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

type User = {
    id: number
    name: string
    email: string
};

const users: User[] = [
    { id: 1, name: "User1", email: "user1@test.local" },
    { id: 2, name: "User2", email: "user2@test.local" },
    { id: 3, name: "User3", email: "user3@test.local" }
]

app.get('/', (req: express.Request, res: express.Response) => {
    logger.trace('this is trace message');    
    logger.debug('this is debug message');
    logger.info('this is info message');
    logger.warn('this is warn message');
    logger.error('this is error message');
    logger.fatal('this is fatal message');
    console.log('hi, im working... from console.log');
    res.send('hi, im working...')
})

app.get('/exception', (req: express.Request, res: express.Response) => {
    throw new Error("キャッチされない例外発生(これはErrorのメッセージ)");
})

app.get('/exception2', (req: express.Request, res: express.Response) => {
    try{
        throw new Error("例外発生です(これはErrorのメッセージ)");
    } catch(e) {
        logger.warn(`例外発生 ${e}`);
    } finally {
        res.send('内部でキャッチされた例外が発生しています')
    }
})

app.get('/users', (req: express.Request, res: express.Response) => {
    res.send(JSON.stringify(users))
})

app.listen(port, () => {
    console.log("Start on port 3000.")

    logger.trace('trace message');    
    logger.debug('debug message');
    logger.info('info message');
    logger.warn('warn message');
    logger.error('error message');
    logger.fatal('fatal message');
})