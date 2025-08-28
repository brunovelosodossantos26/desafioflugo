import { Avatar } from "@mui/material";
import userP from "../assets/userP.png";

interface AvatarTopProps {
  name?: string;
  email?: string;
}

export default function AvatarTop({ name, email }: AvatarTopProps) {
  // sempre usa a imagem local
  const avatarUrl = userP;

  return (
    <div className="flex justify-end items-center">
      <Avatar alt={name} src={avatarUrl} className="w-10 h-10 rounded-full" />
      <div className="flex flex-col">
        <span className="text-[#212B36] font-semibold text-sm">{name}</span>
        <span className="text-[#637381] text-xs">{email}</span>
      </div>
    </div>
  );
}
