import RatingAnimation from '../components/animation/LoadingAnimation';

export const Loading = ({ message }) => {
  return (
    <div>
      <RatingAnimation message={message} />
    </div>
  );
};
