import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components'
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';


const AroundYou = () => {
    const [country, setCountry] = useState('')
    const [loading, setLoading] = useState(true)
    const { activeSong, isPlaying } = useSelector((state) => state.player)
    const { data, isFetching, error } = useGetSongsByCountryQuery(country)

    useEffect(() => {
        axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_02SZdeCArTWKqjKeO60K1Xot6RjkS')
            .then((res) => setCountry(res?.data?.location?.country))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))

    }, [country])

    if (isFetching && loading) return <Loader title='Loading songs around you' />
    if (error && country) return <Error />


    return (
        <div className='flex flex-col'>
            <h2 className="font-bold text-3xl text-white mt-4 mb-10 text-left">
                Around You
                <span className='font-black'> {country}</span>
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

export default AroundYou;
