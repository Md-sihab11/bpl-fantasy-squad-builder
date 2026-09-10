import Navbar from "./components/navbar"
import Banner from "./components/banner"
import Players from "./components/players/players"
import { Suspense, useState } from 'react'
import type { Iplayer } from './Types/playerType'
import Footer from "./components/footer"
import Newsletter from "./components/newsletter"

const playersFetch = async (): Promise<Iplayer[]> => {
  const response = await fetch("/data.json")
  const data = await response.json()
  return data
}

function App() {

  // const playersPromise = playersFetch()
    const [playersPromise] = useState(() => playersFetch());


  const [coins, setCoins] = useState(55555555)


  const [selectedPlayers, setSelectedPlayers] = useState<Iplayer[]>([])

  return (
    <>
      <Navbar coins={coins} />
      <Banner />

      <Suspense fallback={<h2>loading....</h2>}>
        <Players
          playersPromise={playersPromise}
          coins={coins}
          setCoins={setCoins}

          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      </Suspense>

      <Newsletter />
      <Footer />
    </>
  )
}

export default App
