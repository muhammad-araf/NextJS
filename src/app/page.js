import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={'/manipulatedata/send'}>Send Data</Link><br/>

      <Link href={'/manipulatedata/get'}>Get Data</Link>
    </div>
  );
}
