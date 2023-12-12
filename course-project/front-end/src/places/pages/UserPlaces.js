import { useParams } from 'react-router-dom';

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Asgard',
        description: 'Scandinavian gods\' home',
        imageUrl: 'https://eskipaper.com/images/asgard-1.jpg',
        address: 'Rua Farani, Botafogo, Rio de Janeiro - RJ, 22250-150, Brazil',
        location: {
            lat: -22.9424648,
            lng: -43.1828978
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Asgard on Earth (AE)',
        description: 'Scandinavian gods\' home',
        imageUrl: 'https://eskipaper.com/images/asgard-1.jpg',
        address: 'Rua Farani, Botafogo, Rio de Janeiro - RJ, 22250-150, Brazil',
        location: {
            lat: -22.9424648,
            lng: -43.1828978
        },
        creator: 'u2'
    }
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => {
        // console.log(place.creator);
        console.log(userId);
        return place.creator === userId;
    });

    return (
        <PlaceList items={loadedPlaces} />
    );
};

export default UserPlaces;
