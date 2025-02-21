import { GradationIconButton } from "./../layout/GradationIconButton";
import { Icon } from "@iconify/react";
import { useNavigate, useLocation } from "react-router-dom";

function RouteButtons() {
  const navigate = useNavigate();
  const pathName = useLocation().pathname;

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#ffffff",
        height: "fit-content",
        borderRadius: "50px",
        padding: "8px 16px",
        position: "fixed",
        zIndex: 10,
        bottom: "24px",
        left: "18px",
      }}
    >
      {/* 火のアイコンボタン */}
      {pathName === "/map" ? (
        <GradationIconButton color="red">
          <Icon
            icon="heroicons:fire"
            style={{
              fontSize: "24px",
              color: "#ffffff",
            }}
          />
        </GradationIconButton>
      ) : (
        <GradationIconButton
          color="gray"
          onClick={() => {
            navigate("/map");
          }}
        >
          <Icon
            icon="heroicons:fire"
            style={{
              fontSize: "24px",
              color: "#1b2838",
            }}
          />
        </GradationIconButton>
      )}

      {/* アルバムのアイコンボタン */}
      {pathName === "map" ? (
        <GradationIconButton color="red">
          <Icon
            icon="material-symbols:photo-album-outline-rounded"
            style={{
              fontSize: "24px",
              color: "#ffffff",
            }}
          />
        </GradationIconButton>
      ) : (
        <GradationIconButton
          color="gray"
          onClick={() => {
            navigate("/ranking");
          }}
        >
          <Icon
            icon="material-symbols:photo-album-outline-rounded"
            style={{
              fontSize: "24px",
              color: "#1b2838",
            }}
          />
        </GradationIconButton>
      )}

      {/* ランキングのアイコンボタン */}
      {pathName === "/ranking" ? (
        <GradationIconButton color="red">
          <Icon
            icon="icon-park-outline:ranking"
            style={{
              fontSize: "24px",
              color: "#ffffff",
            }}
          />
        </GradationIconButton>
      ) : (
        <GradationIconButton
          color="gray"
          onClick={() => {
            navigate("/ranking");
          }}
        >
          <Icon
            icon="icon-park-outline:ranking"
            style={{
              fontSize: "24px",
              color: "#1b2838",
            }}
          />
        </GradationIconButton>
      )}
    </div>
  );
}

export default RouteButtons;
