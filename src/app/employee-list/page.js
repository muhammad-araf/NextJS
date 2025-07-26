import GetButton from "../components/GetButton"
async function getData(){
    let response = await fetch('http://localhost:3000/api/employee/')
    response = await response.json()
    return response
}
const page = async () => {
    const data = await getData();
    console.log(data)
  return (
    <>
    {
        data.map((item,i)=>
            <div key={i}>
                <>
                <h2>{item.name}</h2>
                <GetButton id={item.id}/>
                </>
            </div>
        )
    }

    </>
  )
}

export default page