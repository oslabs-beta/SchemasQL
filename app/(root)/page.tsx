import { useRouter } from 'next/navigation';
import Link from 'next/link';
export default function Page() {
    return (
      <div>
        <h1>Welcome to the Root</h1>
        
        <Link href="/Main" >Main</Link>
  
      </div>
    )
  }
  