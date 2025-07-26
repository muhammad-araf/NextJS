import getData from "../../../../Services/GetData"

const page = async (props) => {
    const id = await props.params.id;
    const data = await getData();
  return (
    <>
    <h1>Hi, {data[id].name}</h1>
    
    </>
  )
}

export default page