import ErrorPage from '../layout/error/ErrorPage';

const NotFound = () => {
  return <ErrorPage error={404} message={'ページが見つかりません'} />;
};
export default NotFound;
