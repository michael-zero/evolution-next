function ProductList({products}){
  return (
    <>
      <h1>List of products</h1>
      {
        products.map(p => {
          return (
            <div key={p.id}>
              <h2>
                {p.id} {p.title} {p.price}
                <hr />
              </h2>
            </div>
          )
        })
      }
    </>
  )
}

export async function getStaticProps(){
  console.log('Gerando / Regerando o ProductList');
  const response  = await fetch('http://localhost:4000/products')
  const data = await response.json()

  return {
    props: {
      products: data
    },
    revalidate: 10
  }
}

export default ProductList