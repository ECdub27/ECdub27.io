import express,  { Request, Response } from  'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
const port  = process.env.PORT;

app.get('/', (req:Request, res:Response) => {
res.send('hello on ts and express ')
});


app.listen(port, () => {    
console.log('listening on port ' + port);
});