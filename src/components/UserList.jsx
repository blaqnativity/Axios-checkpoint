// src/UserList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
        User Profiles
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {listOfUser.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-100 text-blue-700 flex items-center justify-center rounded-full text-xl font-bold mb-4">
                {user.name[0]}
              </div>
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-gray-600 text-sm">{user.email}</p>
              <p className="text-gray-500 text-sm">{user.phone}</p>
              <p className="text-gray-400 text-xs text-center mt-2">
                {user.address.city}, {user.address.street}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
