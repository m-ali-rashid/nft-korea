import React from "react";
import { useHistory } from "react-router-dom";

const AvatarBadge = ({
  id,
  src,
  title,
  hasBorder = true,
  hasPadding = true,
  textClr = "#000",
}) => {
  let history = useHistory();
  return (
    // <NavLink to={`/artist/${id}`}>
    <div
      className="artist-badge"
      style={{
        cursor: "pointer",
        border: hasBorder ? "1px solid #e5e5e5" : "none",
        borderRadius: hasBorder ? 30 : 0,
        boxShadow: hasBorder ? "0px 10px 20px rgb(0 0 0 / 10%)" : "none",
        padding: hasPadding ? 10 : 0,
        paddingBottom: hasPadding ? 10 : 0,
        paddingLeft: hasPadding ? 10 : 0,
        paddingRight: hasPadding ? 35 : 0,
      }}
      onClick={() => history.push(`/artist/${id}`)}
    >
      <div
        className="avatar"
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: "center 0%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <p className="artist-title" style={{ color: textClr }}>
        {title}
      </p>
    </div>
    // </NavLink>
  );
};

export default AvatarBadge;
