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

  return (
    <div className="overlay">
      <div className="widget" data-testid="widget">
        <button onClick={() => setWidgetShown(false)} className="close">
          X
        </button>
        <Avatar avatarUrl={userData?.photo} data-testid="Avatar" />
        <div className="user-info__name-and-role">
          <p className="user-info__name">{userData?.name || placeholderName}</p>
          <p className="user-info__name">{userData?.position}</p>

          <p className="user-info__name">phone: {userData?.phone}</p>
          <p className="user-info__title">Email: {userData?.email}</p>
          <p className="user-info__title">URL: {userData?.nickname}</p>
        </div>
        <button className="send_message">send message</button>
      </div>
    </div>
  );
};
