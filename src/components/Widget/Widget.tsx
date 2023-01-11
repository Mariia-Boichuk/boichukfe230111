import React, { Dispatch, SetStateAction } from "react";
import { Avatar } from "../Avatar/Avatar";
import { User } from "../../store/userSlice";
import "./Widget.css";

type UserRowProps = {
  userData: User;
  setWidgetShown: Dispatch<SetStateAction<boolean>>;
};

export const Widget = ({
  userData,
  setWidgetShown,
}: UserRowProps): JSX.Element => {
  const placeholderName = "User Name";
  const placeholderTitle = "Data Title";
  return (
    <div className="overlay">
      <div className="widget">
        <button onClick={() => setWidgetShown(false)}>close</button>
        <Avatar avatarUrl={userData?.photo} data-testid="Avatar" />
        <div className="user-info__name-and-role">
          <p className="user-info__name">{userData?.name || placeholderName}</p>
          <p className="user-info__title">
            {userData?.nickname || placeholderTitle}
          </p>
        </div>
        <button>send message</button>
      </div>
    </div>
  );
};
