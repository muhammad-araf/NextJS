import Link from "next/link";
import getData from "../../../Services/getData";

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <h1>Hi It's Araf API</h1>
      {data.map((user) => (
        <h5 key={user.id}>
          <Link href={`/ssg/${user.id}`}>{user.name}</Link>
        </h5>
      ))}
    </div>
  );
}
