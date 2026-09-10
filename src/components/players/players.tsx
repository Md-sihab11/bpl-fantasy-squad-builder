import AvailablePlayers from './availablePlayers'
import { use, useState } from 'react'
import type { Iplayer } from '../../Types/playerType';
import SelectedPlayers from './selectedPlayers';



interface playerProps {
    playersPromise: Promise<Iplayer[]>
    coins: number,
    setCoins: React.Dispatch<React.SetStateAction<number>>
    selectedPlayers: Iplayer[],
    setSelectedPlayers: React.Dispatch<React.SetStateAction<Iplayer[]>>
}


const Players = ({ playersPromise, coins, setCoins, selectedPlayers, setSelectedPlayers }: playerProps) => {


    const players = use(playersPromise)

    // console.log(players, "Players")

    const [buttonType, setButtonType] = useState<"available" | "selected">("available");

    // akhane akta error cilo
    // const [selectedPlayers, setSelectedPlayers] = useState<Iplayer[]>([])

    // console.log(buttonType)

    // const HandleButtonType=(type: "available" | "selected")=>{
    // logic 1   
    //  setButtonType(type)
    // }

    // const [count, set]=useState(0)


    return <div className="container mx-auto">

        {/* // availableplayers and duita button akhane */}
        <div className="flex justify-between items-center mt-8 mb-4">
            <h2 className={`text-xl font-bold`}>
                {buttonType === 'available' ? 'Available Players' : 'Selected Players'}
            </h2>

            <div className="flex">
                <button className={`btn ${buttonType === 'available' ? 'btn-success' : 'btn-soft'} rounded-l-full rounded-r-none`} onClick={() => setButtonType('available')}>
                    Available
                </button>

                <button className={`btn ${buttonType === 'selected' ? 'btn-success' : 'btn-soft'} rounded-r-full rounded-l-none`} onClick={() => setButtonType('selected')}>
                    Selected
                </button>
            </div>
        </div>





        {/* props kore data pathassi as a component */}

        {/* atake bole hosse conditional rendering. mane jodi buttonType available hoy tahole available players show korbe, na hole selected players show korbe. */}
        {
            buttonType === 'available' ?
                (<AvailablePlayers
                    players={players}
                    coins={coins}
                    setCoins={setCoins}
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers} />) :

                (<SelectedPlayers
                    // coins={coins}
                    setCoins={setCoins}
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                />)
        }

    </div>
};


export default Players;