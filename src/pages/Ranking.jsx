import { RankingCard } from './../components/ranking/RankingCard';
import { PageTitle } from './../layout/PageTitle';
import RouteButtons from './../layout/RouteButtons';
import { locationDataAtom } from './../atoms/locationDataAtom';
import { useAtomValue } from 'jotai';
import { motion } from 'framer-motion';

function Ranking() {
  const locationData = useAtomValue(locationDataAtom);

  const sortedLocationData = [...locationData].sort(
    (a, b) => b.likeCount - a.likeCount,
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F4F3F3',
      }}
    >
      <PageTitle pageName="ランキング">
        ランキングはリアルタイムで更新され、人気の変動もひと目で分かる。あなたのお気に入りの場所も、もしかしたらランクインしているかも？
        今、行くべきアツい場所を見つけよう！
      </PageTitle>
      <RouteButtons />
      <div
        style={{
          marginTop: '210px',
          marginBottom: '100px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {sortedLocationData.map((data, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            <RankingCard
              key={index}
              ranking={index + 1}
              location={data.name}
              heartsCount={data.likeCount}
              url={data.photo}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Ranking;
