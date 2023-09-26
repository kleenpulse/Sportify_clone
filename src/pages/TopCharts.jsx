
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components'
import { useGetTopChartsQuery } from '../redux/services/shazamCore';


const TopCharts = () => {
    const { activeSong, isPlaying } = useSelector((state) => state.player)
    const { data, isFetching, error } = useGetTopChartsQuery()


    if (isFetching) return <Loader title='Loading songs around you' />
    if (error) return <Error />


    return (
        <div className='flex flex-col'>
            <h2 className="font-bold text-3xl text-white mt-4 mb-10 text-left">
                Dicover Top Charts
                
            </h2>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data?.map((song, i) => (
                    <SongCard
                        key={song.key}
                        data={data}
                        song={song}
                        i={i}
                        activeSong={activeSong}
                        isPlaying={isPlaying}
                    />
                ))}
            </div>
        </div>
    )
};


export default TopCharts;
