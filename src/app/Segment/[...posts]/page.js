'use client'
const page = ({params}) => {
  return (
    <>
        <h1>Blog : {params.posts[0]}</h1>
        <h1>posts : {params.posts[1]}</h1>
    </>
  )
}

export default page