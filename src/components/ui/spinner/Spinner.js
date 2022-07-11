import React from 'react'

import Spinner from 'react-bootstrap/Spinner'

const SpinnerContainer = () => {
   return (
      <main className='spinner-container'>
         <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
      </main>
   )
}




export default SpinnerContainer