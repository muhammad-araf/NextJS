'use client'

const Employees = ({params}) => {
  const string = decodeURIComponent(params.details);


  return (
    <>
    <h1>Hi {string}</h1>
    
    </>
  )
}

export default Employees