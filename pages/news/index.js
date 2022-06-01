import React from 'react'

const NewsArticleList = ({articles}) => {
  return (
    <>
      <h1>List of News Articles</h1>
      {
        articles.map(a => {
          return (
            <div key={a.id}>
              <h2>
                {a.id} {a.title} {a.category}
                <hr />
              </h2>
            </div>
          )
        })
      }
    </>
  )
}

export async function getServerSideProps(){
  const response  = await fetch('http://localhost:4000/news')
  const data = await response.json()
  console.log(`Pre-rendering news articles`);
  return {
    props: {
      articles: data
    }
  }
}

export default NewsArticleList
