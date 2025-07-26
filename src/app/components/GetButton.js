"use client"

const GetButton = ({id}) => {
    console.log(id)
    const deleteData = async () => {
      let data = await fetch(`http://localhost:3000/api/employee/${id}`,{
        method : 'DELETE'
      });
      data = await data.json();
      if(data.success){
        alert("Data has been deleted")
      }else{
        alert("Error Found")
      }
    }
  return (
    <>
    <button onClick={deleteData}>Delete</button>
    </>
  )
}

export default GetButton