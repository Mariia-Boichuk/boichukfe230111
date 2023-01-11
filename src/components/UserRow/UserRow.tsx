import { Avatar } from "../Avatar/Avatar";
import { User } from "../../store/userSlice";

import "./UserRow.css";
import { useState } from "react";
import { Widget } from "../Widget/Widget";

type UserRowProps = {
  userData: User;
};

export const UserRow = ({ userData }: UserRowProps): JSX.Element => {
  const [widgetShown, setWidgetShown] = useState(false);

  const placeholderName = "User Name";
  const placeholderTitle = "Data Title";
  return (
    <>
      <div className="user-info" data-testid="userInfoRow">
        <Avatar avatarUrl={userData?.photo} data-testid="Avatar" />
        <div className="user-info__name-and-role">
          <p className="user-info__name">{userData?.name || placeholderName}</p>
          <p className="user-info__title">
            {userData?.nickname || placeholderTitle}
          </p>
        </div>

        <button
          className="user-info__view"
          onClick={() => setWidgetShown(true)}
        >
          View
        </button>
      </div>
      {widgetShown && (
        <Widget setWidgetShown={setWidgetShown} userData={userData} />
      )}
    </>
  );
};
