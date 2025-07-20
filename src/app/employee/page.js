import Link from "next/link"


const Employees = () => {
  return (
    <>
    <h1>Hi</h1>
    <ul>
        <li>
            <Link href="/employee/araf">Araf</Link>
        </li>
        <li>
            <Link href="/employee/fasih">Fasih</Link>
        </li>
    </ul>
    </>
  )
}

export default Employees