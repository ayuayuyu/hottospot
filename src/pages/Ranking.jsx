import { RankingCard } from "./../components/ranking/RankingCard";
import { PageTitle } from "./../layout/PageTitle";
import RouteButtons from "./../layout/RouteButtons";

function Ranking() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <PageTitle pageName="ランキング">
        ランキングはリアルタイムで更新され、人気の変動もひと目で分かる。あなたのお気に入りの場所も、もしかしたらランクインしているかも？
        今、行くべきアツい場所を見つけよう！
      </PageTitle>
      <RouteButtons />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {[...Array(20)].map((_, i) => (
          <RankingCard
            key={i}
            ranking={i + 1}
            location="愛知県 名古屋城"
            heartsCount={120}
            url="/vite.svg"
          />
        ))}
      </div>
    </div>
  );
}

export default Ranking;
