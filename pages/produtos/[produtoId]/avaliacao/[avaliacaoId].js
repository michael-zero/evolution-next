import React from 'react'
import { useRouter } from 'next/dist/client/router'

const Avaliacao = () => {
  const router = useRouter()
  const {avaliacaoId, produtoId} = router.query
  return (
    <div><h1>Avaliacao {avaliacaoId} do produto {produtoId}</h1></div>
  )
}

export default Avaliacao