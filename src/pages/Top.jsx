import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/api/firebase';

import Title from '../layout/home/Title';
import Background from '../layout/home/Background';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../layout/loading';
import ErrorPage from '../layout/error/ErrorPage';

function Top() {
  // const navigate = useNavigate();

  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loading message={'読み込み中'} />;
  }

  if (error) {
    return <ErrorPage error={error.message} />;
  }

  // const handleRanking = () => {
  //   navigate('/ranking');
  //   console.log('ranking');
  // };

  // const handleMap = () => {
  //   navigate('/map');
  // };

  return (
    <>
      {user ? (
        <>
          <div>
            <Link to="/map" style={{ zIndex: 10 }} />
            <Link to="/map" style={{ zIndex: 10 }}>
              <div
                style={{
                  position: 'absolute',
                  top: '12rem',
                  right: 0,
                  left: 0,
                  margin: '0 auto',
                }}
              >
                <Title />
              </div>
              <Background />
            </Link>
          </div>
        </>
      ) : (
        <>
          <div>
            <Link to="/login" style={{ zIndex: 10 }} />

            {/* <button
              onClick={handleRanking}
              style={{
                zIndex: 30,
                position: 'absolute',
                left: '50px',
                width: '30%',
                top: '50%',
              }}
            >
              Ranking
            </button>
            <button
              onClick={handleMap}
              style={{
                zIndex: 30,
                position: 'absolute',
                right: '50px',
                width: '30%',
                top: '50%',
              }}
            >
              Map
            </button> */}

            <Link to="/login" style={{ zIndex: 10 }}>
              <div
                style={{
                  position: 'absolute',
                  top: '12rem',
                  right: 0,
                  left: 0,
                  margin: '0 auto',
                }}
              >
                <Title />
              </div>
              <Background />
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export default Top;
