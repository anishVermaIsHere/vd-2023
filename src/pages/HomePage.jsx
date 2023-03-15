import React from 'react'
import Login from '../components/user/Login'
import CardBox from '../components/CardBox'

const HomePage = () => {
  return (
    <div className='container-fluid' style={{maxWidth:'1920px'}}>
      <main className="row">
        <div className="col-xxl-5 col-lg-5 col-md-6 col-sm-12">
          <Login />
        </div>
        <div className="cardbox-col col-xxl-7 col-lg-7 col-md-6 col-sm-12">
          <CardBox />
        </div>
      </main>
    </div>
  )
}

export default HomePage