import React from 'react'

const Dashboard = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [dashboardData, setDashboardData] = React.useState(null)

  React.useEffect(() => {
    async function fetchDashboardData(){
      
      const response  = await fetch('http://localhost:4000/dashboard')
      const data = await response.json()
      
      setDashboardData(data)
      setIsLoading(false)
    } 

    fetchDashboardData()

  }, [])

  if(isLoading){
    return <h2>Loading...</h2>
  }
  
  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {dashboardData.posts}</h2>
      <h2>Likes - {dashboardData.likes}</h2>
      <h2>Followers - {dashboardData.followers}</h2>
      <h2>Following - {dashboardData.following}</h2>
    </div>
  )
}

export default Dashboard