'use client'
import Topbar from "../components/TopBar";
import { useRouter } from 'next/navigation'

import StatsPage from '../components/Pages/StatsPage';

export default function Stats() {

  // must make a router
  const router = useRouter();
  // then we can use a router where if we recieve working code, we can then..
  // well, move the user to a correct page!
  //

  return (
      <section>
          <div>

              <StatsPage />

          </div>  
      </section>
  );
}