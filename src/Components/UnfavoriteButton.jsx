import { Icons } from "../assets/icons";

export const UnfavoriteButton = ({ onClick }) => (
  <img
    src={Icons.Heart}
    alt=""
    className="unfavorite-button"
    style={{ width: 40, border: 0 }}
    onClick={() => {
      onClick();
    }}
  />
);
