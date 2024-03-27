import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import path from 'path';
import asyncHandler from 'express-async-handler';
config({ path: path.resolve(__dirname, 'protected.env') });
const port = process.env.PORT || 4000;
console.log(process.env.PORT);





const app = express();

app.use(cors());
app.options('*', cors());


app.get('/', (req, res) => {
res.send('Hello World');
});

app.get('/api/', asyncHandler(async(req, res) => { 

}));


app.get('/api', asyncHandler(async(req, res) => { 

}));

app.get('/api', asyncHandler(async (req, res) => { 

}));

app.get('/api', asyncHandler(async(req, res) => { 

}));

app.get('/api', asyncHandler(async (req, res) => { 

}));



app.listen(port, () => {
console.log(`Server is running at http://localhost:${port}`);

});