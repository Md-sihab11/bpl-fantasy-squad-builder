import React from 'react';
import type { Iplayer } from '../../Types/playerType';
import { FaFlag, FaUser } from 'react-icons/fa6';
import { toast } from 'react-toastify';

interface PlayerCardProps {
    players: Iplayer[];
    coins: number;
    setCoins: React.Dispatch<React.SetStateAction<number>>;
    selectedPlayers: Iplayer[];
    setSelectedPlayers: React.Dispatch<React.SetStateAction<Iplayer[]>>;
}

const PlayerCard = ({
    players,
    coins,
    setCoins,
    selectedPlayers,
    setSelectedPlayers
}: PlayerCardProps) => {

    const handleSelectPlayer = (player: Iplayer) => {

        // Check whether player is already selected
        const alreadySelected = selectedPlayers.some(
            selectedPlayer => selectedPlayer.PlayerName === player.PlayerName
        );

        if (alreadySelected) {
            return;
        }

        const newCoinPrice = coins - player.Price;

        if (newCoinPrice < 0) {
            toast.error("You don't have enough coins to select this player.");
            return;
        }

        // Deduct coins
        setCoins(prevCoins => prevCoins - player.Price);

        // Add player
        setSelectedPlayers(prevPlayers => [
            ...prevPlayers,
            player
        ]);

        toast.success(
            `You have selected ${player.PlayerName}. Remaining coins: ${newCoinPrice}`
        );
    };

    return (
        <div className="grid grid-cols-3 gap-4 mt-4 ml-15">
            {players.map((player: Iplayer) => {

                const isSelected = selectedPlayers.some(
                    selectedPlayer =>
                        selectedPlayer.PlayerName === player.PlayerName
                );

                return (
                    <div
                        key={player.PlayerName}
                        className="card bg-base-100 w-96 shadow-sm"
                    >
                        <figure>
                            <img
                                src={player.PlayerImg}
                                alt={player.PlayerName}
                            />
                        </figure>

                        <div className="card-body space-y-3">

                            <h2 className="card-title">
                                <FaUser />
                                {player.PlayerName}
                            </h2>

                            <div className="flex justify-between items-center gap-4">
                                <p className="font-semibold flex items-center gap-4">
                                    <FaFlag />
                                    {player.Origin}
                                </p>

                                <p className="btn btn-sm rounded-2xl">
                                    {player.PlayerType}
                                </p>
                            </div>

                            <div className="divider" />

                            <p className="font-bold">Rating</p>

                            <div className="flex flex-row justify-between items-center gap-35">
                                <p className="font-semibold">
                                    Batting Style:
                                </p>
                                <p>{player.BattingStyle}</p>
                            </div>

                            <div className="flex justify-between items-center gap-4">
                                <p className="font-semibold mt-3">
                                    Price: ${player.Price.toLocaleString()}
                                </p>

                                <button
                                    className="btn btn-sm rounded"
                                    disabled={isSelected}
                                    onClick={() => handleSelectPlayer(player)}
                                >
                                    {isSelected
                                        ? 'Selected'
                                        : 'Select Player'}
                                </button>
                            </div>

                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PlayerCard;