import React, { useState } from "react";

interface User {
  name: string;
  age: number;
}

const UserProfile: React.FC = () => {
  // const [user, setUser] = useState<User | null>();
  const [user, setUser] = useState<User>({ name: "", age: 0 });

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, name: e.target.value });
  };

  const updateAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, age: Number(e.target.value) });
  };
  return (
    <div>
      <h2>User Profile</h2>
      <label>
        Name:
        <input type="text" value={user.name} onChange={updateName} />
      </label><br/><br />

      <label>
        Age:
        <input type="number" value={user.age} onChange={updateAge} />
      </label>

      <p>{user.name ? `Hello, ${user.name}!` : "Enter ur name"} You are {" " } {user.age} years old.</p>
    </div>
  );
};

export default UserProfile;
