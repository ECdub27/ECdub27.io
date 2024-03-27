import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import path from 'path';
import asyncHandler from 'express-async-handler';
config({ path: path.resolve(__dirname, 'protected.env') });
const port = process.env.PORT || 4000;
const api = process.env.API_KEY;


console.log(`newsapi.org/v2/top-headlines/sources?category=business&apiKey=${api}`)

const app = express();

app.use(cors());
app.options('*', cors());

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
res.send('Hello World');
});

app.get('/api/GetBusinessArticles', cors(), asyncHandler(async(req, res) => { 

  try{
    const response  = await fetch(`https://newsapi.org/v2/top-headlines/sources?category=business&apiKey=${api}`)
    .then((response) => {
      if(response.ok){
        return response.json();
      }
      }).then((data) => {
        console.log(data);
       
      });
      return response;
    } catch(error){
    if(error instanceof Error){
      console.log(error)
    res.status(500).send('Internal Server Error');
    }
  }

}));


app.get('/api/GetAllArticles', asyncHandler(async(req, res) => { 
  try{
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api}`).then((response) =>{
        if(response.ok){
          return response.json();
        }
        }).then((data) => {
          console.log(data);
          res.json(data);
        });
       
return response;
  } catch(error){
    if(error instanceof Error){
    res.status(500).send('Internal Server Error');
    }
  }

}));

app.get('/api/GetPoliticsArticles', asyncHandler(async (req, res) => { 
  try{
        const response = await fetch(`https://newsapi.org/v2/top-headlines?q=politics&pageSize=20&apiKey=${api}`).then((response) => {
          if(response.ok){
            return response.json();
          }
          }).then((data) => {
            console.log(data);
            res.json(data);
          })
          return response;
  } catch(error){
    if(error instanceof Error){
    res.status(500).send('Internal Server Error');
    }
  }

}));

app.get('/api/GetTechnologyArticles', cors(), asyncHandler(async(req, res) => { 
  try{
      const response = await fetch(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&pageSize=20&apiKey=${api}`)
      .then((response) =>{
        if(response.ok){
          return response.json();
        }
      }).then((data) => {
        console.log(data);
      });
      return response;
  } catch(error){
    if(error instanceof Error){
    res.status(500).send('Internal Server Error');
    }
  }

}));

app.get('/api/getArticlesById', asyncHandler(async (req, res) => { 
  try{
    const response = await fetch(`https://newsapi.org/v2/everything?domains=google.com,nytimes.com&apiKey=${api}`).then((response) =>{
      if(response.ok){
        return response.json();
      }
    }).then((data)=>{
      console.log(data);
    })
return response;
  } catch(error){
    if(error instanceof Error){
    res.status(500).send('Internal Server Error');
    }
  }

}));



app.listen(port, () => {
console.log(`Server is running at http://localhost:${port}`);

});