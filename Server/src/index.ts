
import express from 'express';
import cors from 'cors';
import asyncHandler from 'express-async-handler';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 4000;;
app.use(cors());


app.options('*', cors());


app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

app.get('/api', (req, res) => { 

});


app.get('/api', (req, res) => { 

});

app.get('/api', (req, res) => { 

});

app.get('/api', (req, res) => { 

});

app.get('/api', (req, res) => { 

});



app.listen(port, () => {
console.log(`Server is running at http://localhost:${port}`);

});