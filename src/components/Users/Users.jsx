import React from "react";
import styles from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers ([
                {
                    id: 1,
                    followed: false,
                    photoUrl: 'https://www.kino-teatr.ru/acter/foto/ros/4589.jpg',
                    fullName: 'Dmitry',
                    status: 'I am a boss',
                    location: {city: 'Tallinn', country: 'Estonia'}
                },
                {
                    id: 2,
                    followed: true,
                    photoUrl: 'https://www.kino-teatr.ru/acter/foto/ros/4589.jpg',
                    fullName: 'Vlad',
                    status: 'I am a boss too',
                    location: {city: 'Turku', country: 'Finland'}
                },
                {
                    id: 3,
                    followed: true,
                    photoUrl: 'https://www.kino-teatr.ru/acter/foto/ros/4589.jpg',
                    fullName: 'Roman',
                    status: 'I am a boss too',
                    location: {city: 'Berlin', country: 'Germany'}
                }
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} alt='avatar'/>

                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}> Unfollow </button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}> Follow </button>}

                    </div>

                </span>

                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status} </div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>


            </div>)


        }


    </div>
}

export default Users;