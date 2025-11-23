import React from 'react';

const Profile = () => {
    const {user} = use(AuthContext);
    return (
        <div>
            <p>{user?.email}</p>
        </div>
    );
};

export default Profile;