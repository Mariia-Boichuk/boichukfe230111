import "./Avatar.css";

type AvatarProps = {
  avatarUrl?: string;
};

export const Avatar = ({ avatarUrl }: AvatarProps): JSX.Element => (
  <img
    className="avatar"
    alt="Avatar of the user."
    src={`/foto/${avatarUrl}`}
  />
);
