import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';


// pokeapi.co/api/v2/'
// `pokemon/${name}`
// business : https://newsapi.org/v2/top-headlines/sources?category=business&apiKey=78df58fec805459caf086c63cbe2b3a9`
// all articles: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=78df58fec805459caf086c63cbe2b3a9
// tech articles: find one that works on postman
// politics: https://newsapi.org/v2/top-headlines?q=politics&apiKey=78df58fec805459caf086c63cbe2b3a9'

export const apiSlice = createApi({
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000',timeout:5000}),
    
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name:string) => `pokeapi.co/api/v2/pokemon/${name}`
        }),
        GetBusinessArticles: builder.query({
            query: () => '/api/GetBusinessArticles',
        }),
        GetAllArticles: builder.query({
            query: () => '/api/GetAllArticles'
        }),
        GetPoliticsArticles: builder.query({
            query: () => '/api/GetPoliticsArticles'
        }),
        GetTechnologyArticles: builder.query({
            query: () => '/api/GetTechnologyArticles'
        }),
        getArticlesById: builder.query({
            query:() => '/api/getArticlesById'
        }),
        })
    })



export const { useGetPokemonByNameQuery, useGetBusinessArticlesQuery, useGetAllArticlesQuery,useGetPoliticsArticlesQuery, useGetTechnologyArticlesQuery, useGetArticlesByIdQuery } = apiSlice


