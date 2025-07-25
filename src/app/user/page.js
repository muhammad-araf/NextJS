async function getData(){
    const data = await fetch('https://mocki.io/v1/fdc8a28e-a83d-4047-814b-36320ff1db2a');
    const response = data.json()
    return response;
}
const page = async () => {
    const response = await getData();
  return (
    <>
    {

        response.map((e)=>{
        return <h3 key={e.id}>{e.name}</h3>
        })
    }
    </>
  )
}

export default page