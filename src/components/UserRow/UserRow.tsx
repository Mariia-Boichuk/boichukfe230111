import { Avatar } from "../Avatar/Avatar";
import { User } from "../../store/userSlice";

import "./UserRow.css";

type UserRowProps = {
  userData: User;
};

export const UserRow = ({ userData }: UserRowProps): JSX.Element => {
  const placeholderName = "User Name";
  const placeholderTitle = "Data Title";
  return (
    <div className="user-info">
      <Avatar avatarUrl={userData?.photo} data-testid="Avatar" />
      <div className="user-info__name-and-role">
        <p className="user-info__name">{userData?.name || placeholderName}</p>
        <p className="user-info__title">
          {userData?.nickname || placeholderTitle}
        </p>
      </div>

      <button className="user-info__view">View</button>
    </div>
  );
};
