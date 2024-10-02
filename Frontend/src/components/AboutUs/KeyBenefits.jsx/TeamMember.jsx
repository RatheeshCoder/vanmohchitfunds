import React from "react";

const TeamMember = ({ member }) => {
  return (
    <div className="flex flex-col items-center p-4 text-center bg-white">
  <h1 className="mb-2 text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 transition duration-500 ease-in-out hover:text-indigo-600">
    {member.name}
  </h1>
  <p className="text-gray-600 text-sm">{member.role}</p>
  <p className="w-full mt-2 text-base md:text-lg lg:text-sm xl:text-xl text-gray-500">
  {member.description}
</p>


</div>
  );
};


export default TeamMember;