import React from 'react'
import Link from 'next/link'

const ListaProdutos = () => {
  return (
    <div>
      <Link href="produtos/1">
       <a><h2>Produto A</h2></a>
      </Link>
      <h2>Produto B</h2>
      <h2>Produto C</h2>
    </div>
  )
}

export default ListaProdutos