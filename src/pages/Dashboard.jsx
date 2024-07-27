import React from 'react'
import MyProject from '../components/MyProject'
import Profile from '../components/Profile'
import Header from '../components/Header'
// manage project button on home page leads to dashboard
function Dashboard() {
  return (
    <>
    <Header dash={true}/>
<div className="container container-fluid">
  <h3 className='mt-5 ms-3'>Welcome <span className='text-warning'>Dev</span></h3>
  <div className="row ">
    {/* My Project */}
    <div className="col-md-9">
      <MyProject/>
    </div>
    {/* Profile */}
    <div className="col-md-3">
      <Profile/>
    </div>
  </div>
</div>
    
    </>
  )
}

export default Dashboard