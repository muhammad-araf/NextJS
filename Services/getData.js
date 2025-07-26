const getData = async () =>{
    const data = await fetch('https://mocki.io/v1/fdc8a28e-a83d-4047-814b-36320ff1db2a');
    const response = await data.json();
    return response
}
export default getData;