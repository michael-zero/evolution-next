import React from 'react'
import { useRouter } from 'next/router'
const DetalhesProduto = () => {
  const router = useRouter()
  const {produtoId} = router.query
  return (
    <div>
      <h1>Detalhesdo Produto {produtoId}</h1>
    </div>
  )
}

export default DetalhesProduto