import React from 'react'

const ArticleListByCategory = ({articles, category}) => {
  return (
    <>
      <h1>Showing news for category <i>{category}</i></h1>
     {
       articles.map(a => {
         return <div key={a.id}>
           <h2>{a.id} {a.title}</h2>
           <p>{a.description}</p>
           <hr />
         </div>
       })
     }
    </>
  )
}

export async function getServerSideProps(context){
  const {params: {category}, req, res, query} = context
  console.log(query);
  // console.log(req.headers.cookie);
  res.setHeader('Set-Cookie', ['name=Michael'])

  const response  = await fetch(`http://localhost:4000/news?category=${category}`)
  const data = await response.json()
  console.log(`Pre-rendering news articles for category ${category}`);
  return {
    props: {
      articles: data,
      category
    }
  }
}

export default ArticleListByCategory