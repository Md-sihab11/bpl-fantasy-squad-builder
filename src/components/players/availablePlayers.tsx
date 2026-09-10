// import React from 'react';
// import type { Iplayer } from '../../Types/playerType';
// import { FaUser } from 'react-icons/fa';
// import { FaFlag } from "react-icons/fa6";
// import Players from './players';
import type { Iplayer } from '../../Types/playerType';
import PlayerCard from './playerCard';

interface Player {
    "PlayerName": string,
    "PlayerImg": string,
    "Origin": string,
    "PlayerType": string,
    "BowlingStyle": string,
    "BattingStyle": string,
    "Price": number;

}



const AvailablePlayers = ({
    players,
    coins,
    setCoins,
    selectedPlayers,
    setSelectedPlayers
}: {
    players: Player[];
    coins: number;
    setCoins: React.Dispatch<React.SetStateAction<number>>;
    selectedPlayers: Iplayer[];
    setSelectedPlayers: React.Dispatch<React.SetStateAction<Iplayer[]>>;
}) => {


    // console.log(players, "Players from available players")



    // akhane player card banaye then props kore pathay dise 
    return (
        <div className="grid grid-cols-3 gap-4 mt-4">
            {
                players.map((player: Player, index: number) => (
                    <PlayerCard
                        key={index}
                        players={[player]}
                        coins={coins}
                        setCoins={setCoins}
                        selectedPlayers={selectedPlayers}
                        setSelectedPlayers={setSelectedPlayers}
                    />
                ))
            }
        </div>
    );
};

export default AvailablePlayers;