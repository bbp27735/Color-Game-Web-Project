import Link from 'next/link'
import './globals.css'

export default function Error() {

  
    return (
      <section>
  
           <h1>404: Page Not Found</h1>
           <Link href='/game'>Return to Game</Link>

      </section>
    );
  }