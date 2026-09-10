import { TbTrash } from 'react-icons/tb';
import type { Iplayer } from '../../Types/playerType';

interface SelectedPlayerCardProps {
    player: Iplayer;
    setSelectedPlayers: React.Dispatch<React.SetStateAction<Iplayer[]>>;
    setCoins: React.Dispatch<React.SetStateAction<number>>;
}

const SelectedPlayerCard = (
    {   player,
        setSelectedPlayers,
        setCoins }: SelectedPlayerCardProps) => {

    const handleRemovePlayer = () => {
        setSelectedPlayers(prev => prev.filter(p => p.PlayerName !== player.PlayerName));
        setCoins(prev => prev + player.Price);

    };

    return (
        <div className="flex gap-2 justify-between items-center border border-gray-200 rounded p-4">
            <div className="flex gap-4">
                <img src={player.PlayerImg} alt={player.PlayerName} className="w-[40px] h-[40px]" />
                <div>
                    <h2 className="font-bold">{player.PlayerName}</h2>
                    <p className="font-semibold">{player.PlayerType}</p>
                </div>
            </div>
            <button className="text-red-500 font-bold cursor-pointer" onClick={handleRemovePlayer}>
                <TbTrash />
            </button>
        </div>
    );
};

export default SelectedPlayerCard;