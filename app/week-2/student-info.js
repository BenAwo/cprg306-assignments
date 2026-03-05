import Link from 'next/link';
export default function Inform(){
    return (
        <div>
          <MyName />
          <Link href="https://github.com/BenAwo/cprg306-assignments">Repo</Link>
        </div>
    );
}

function MyName(){
    return <h1>Ben Awosika</h1>;
}

