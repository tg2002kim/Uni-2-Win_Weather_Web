import { FaGithub } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import './App.css';
import TopBar from './comps/topBar';
import RightBox from './comps/rightBox';
import LeftBox from './comps/leftBox';
import { useState } from 'react';
import WelcomeBox from './comps/welcomeBox';
import { handleFinalSearch } from './comps/apiBed'; // handleFinalSearch 함수 경로 수정 필요

const App = () => {
  const [dta, setDta] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const fetchWeatherByGPS = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    setLoading(true); // 로딩 상태 활성화

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          // handleFinalSearch를 통해 날씨 정보 가져오기
          const weatherData = await handleFinalSearch(latitude, longitude);
          setDta(weatherData); // 상태 업데이트
        } catch (error) {
          console.error('Failed to fetch weather data:', error);
          alert('Failed to fetch weather data. Please try again.');
        } finally {
          setLoading(false); // 로딩 상태 비활성화
        }
      },
      (error) => {
        console.error('Error fetching location:', error);
        alert('Failed to retrieve your location.');
        setLoading(false); // 로딩 상태 비활성화
      }
    );
  };

  return (
    <div className={isDarkMode ? 'app dark-mode' : 'app light-mode'}>
  {/* Main Row with TopBar and Toggle Button */}
  <div className="row align-items-center">
    <div className="col-8">
      {/* TopBar Component */}
      <TopBar changeData={(dd) => setDta(dd)} classDetails="d-block" />
    </div>

    <div className="col-4 text-end">
      <div className="d-inline-block me-2">
        {/* Dark/Light Mode Toggle Button */}
        <button onClick={toggleMode} className="toggle-btn">
          {isDarkMode ? <FaSun /> : <FaRegMoon />}
        </button>
      </div>

      <div className="d-inline-block me-2">
        {/* GPS Button */}
        <button onClick={fetchWeatherByGPS} className="toggle-btn" disabled={loading}>
          {loading ? 'Loading...' : <MdGpsFixed />}
        </button>
      </div>

      <div className="d-inline-block">
        {/* GitHub Button */}
        <button
          onClick={() => window.location.href = 'https://github.com/Minsu4302/OpenSource-Project'}
          className="toggle-btn"
        >
          <FaGithub /> OpenSource GitHub
        </button>
      </div>
    </div>


      </div>

      {dta ? (
        <div className="row">
          <div
            className="col-lg-9 left-box order-lg-first order-last"
            style={{ paddingRight: '0px' }}
          >
            <div className="left-bottom-box">
              <LeftBox wthrData={dta} />
            </div>
          </div>

          <div className="col-lg-3 right-box">
            <RightBox wthrData={dta} />
          </div>
        </div>
      ) : (
        <WelcomeBox changeData={(dd) => setDta(dd)} />
      )}
    </div>
  );
};

export default App;
