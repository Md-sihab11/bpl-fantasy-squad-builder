import type { Iplayer } from '../../Types/playerType';
import SelectedPlayerCard from './selectedPlayerCard';

interface SelectedPlayersProps {
    selectedPlayers: Iplayer[];
    setSelectedPlayers: React.Dispatch<React.SetStateAction<Iplayer[]>>;
    setCoins: React.Dispatch<React.SetStateAction<number>>;
}

const SelectedPlayers = (
    { selectedPlayers,
        setSelectedPlayers,
        setCoins }: SelectedPlayersProps) => {

    return (
        <div className="grid grid-cols-1 gap-4 mt-4">
            {
                selectedPlayers.map((player) => (
                    <SelectedPlayerCard
                        key={player.PlayerName}
                        player={player}
                        setCoins={setCoins}
                        setSelectedPlayers={setSelectedPlayers}
                    />
                ))}
        </div>
    );
};

export default SelectedPlayers;