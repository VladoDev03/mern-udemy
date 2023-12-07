import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Loki',
            image: 'https://www.slashfilm.com/img/gallery/marvels-loki-season-2-ending-explained-is-this-truly-glorious-purpose/the-god-of-stories-1699636943.jpg',
            places: 3
        }
    ];

    return (
        <UsersList items={USERS} />
    );
};

export default Users;
