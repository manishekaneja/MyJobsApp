import React, { FC } from "react";

const Avatar: FC<AvatarProps> = ({ str }) => (
  <div className="mx-2 uppercase bg-blue-300 focus:outline-none rounded-full w-12 h-12 min-w-max flex items-center justify-center">
    {str[0]}
  </div>
);

export { Avatar };
