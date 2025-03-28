import React, { useState, useEffect } from 'react';
import logo from './img/logo.png';
import './App.css';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [bgColor, setBgColor] = useState('white');
  const [selectedYear, setSelectedYear] = useState('2022'); // 현재 선택된 연도를 추적하는 상태

  const awards = { // 수상 목록
    '2022': ['Award 1', 'Award 2', 'Award 3'],
    '2024': ['국제과학기술경진대회(ISEF) 준우승', '해커톤 최종 준우승', '메이커톤 최종 3위', '2024 엔지니어링산업 경진대회 대상'],
    '2023': ['해커톤 최종 준우승', '2023 경기창고 최종 준우승','메이커톤 최종 준우승', '한국코드페어 대상 수상', '2023 SW 인재 페스티벌 해커톤 최종 우승, 준우승', '국제과학기술경진대회 국가대표발탁'],
    '2025': ['여러분의 차례입니다.'],
  };

  useEffect(() => {
    document.title = "REBOOT";
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = logo;
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      let currentPosition = window.pageYOffset;
      if (currentPosition > 50) {
        setOpacity(0);
        setBgColor('black');
      } else {
        setOpacity(1 - currentPosition / 50);
        setBgColor(`rgb(${255 - currentPosition * 5}, ${255 - currentPosition * 5}, ${255 - currentPosition * 5})`);
      }
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPosition]);

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
            opacity: opacity
          }}
        />
        <p className='logot'
          style={{
            position: 'absolute',
            top: '58%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
            opacity: opacity,
            color: '#000',
            fontWeight: '650',
            fontSize: '2.5rem',
          }}>
          REBOOT</p>
        <p style={{
          color: '#000',
          position: 'absolute',
          top: 'calc(50% + 200px)', // 로고의 높이의 절반(50%) + 로고의 높이의 절반(50%) + 여백(50px)
          transform: 'translate(-50%, -50%)',
          animation: 'bounce 2s infinite',
          fontSize: '1.5rem',
          fontWeight: '500',
          width: 'auto',
        }}>
          Scroll Slowly For More Information
        </p>
        <div style={{ height: '15000px' }}>
          <p className='logot'
            style={{
              fontWeight: '600',
              fontSize: '3rem',
              position: 'sticky',
              top: '45%',
              opacity: scrollPosition > 100 && scrollPosition < 1000 ? 1 : 0,
              transform: scrollPosition > 100 && scrollPosition < 700 ? 'translateY(0)' : 'translateY(100px)',
              transition: 'opacity 0.5s, transform 0.5s'
            }}>REBOOT?</p>
          <p style={{
            fontSize: '10vim',
            fontWeight: '600',
            position: 'sticky',
            top: '50%',
            opacity: scrollPosition > 1400 && scrollPosition < 2000 ? 1 : 0,
            transform: scrollPosition > 1400 && scrollPosition < 2000 ? 'scale(1)' : 'scale(0.5)', // scale 변경
            transition: 'opacity 0.5s, transform 0.5s' // transform 추가
          }}>
            <a className='logot'>REBOOT</a>에서 경험을 쌓아 실력으로 증명하리라.
          </p>
          <p style={{ fontSize: '16vim', fontWeight: '500', position: 'sticky', top: '50%', opacity: scrollPosition > 2300 && scrollPosition < 3200 ? 1 : 0, transition: 'opacity 0.5s' }}>이론적인 SW 보다는 <strong>직접</strong> 경험하는 SW를 추구하는 <a className='logot'>REBOOT</a>입니다.</p>
          <p style={{ fontSize: '16vim', fontWeight: '500', position: 'sticky', top: '50%', opacity: scrollPosition > 3600 && scrollPosition < 4400 ? 1 : 0, transition: 'opacity 0.5s' }}>지금까지 <a className='logot'>REBOOT</a>가 이뤄낸 성과입니다.</p>
          <div style={{
            position: 'sticky',
            top: '30%',
            opacity: scrollPosition > 4800 && scrollPosition < 5600 ? 1 : 0,
            transform: scrollPosition > 4800 && scrollPosition < 5600 ? 'translateY(0)' : 'translateY(100px)',
            transition: 'opacity 0.5s, transform 0.5s'
          }}>
            <h2>수상실적</h2>
            <div>
              {Object.keys(awards).map(year => (
                <button onClick={() => setSelectedYear(year)} className='bt'>{year}</button>
              ))}
            </div>
            <ul style={{fontSize: '1.8rem'}}>
              {awards[selectedYear].map(award => (
                <li>{award}</li>
              ))}
            </ul>
          </div>
          <p style={{
            fontSize: '10vim',
            fontWeight: '600',
            position: 'sticky',
            top: '50%',
            opacity: scrollPosition > 6000 && scrollPosition < 6700 ? 1 : 0,
            transform: scrollPosition > 6000 && scrollPosition < 6700 ? 'scale(1)' : 'scale(0.5)', // scale 변경
            transition: 'opacity 0.5s, transform 0.5s' // transform 추가
          }}>
            어때요? 실력으로 증명하고 싶지 않으신가요?
          </p>
          <p style={{
            fontSize: '10vim',
            fontWeight: '600',
            position: 'sticky',
            top: '50%',
            opacity: scrollPosition > 7000 && scrollPosition < 7700 ? 1 : 0,
            transform: scrollPosition > 7000 && scrollPosition < 7700 ? 'scale(1)' : 'scale(0.5)', // scale 변경
            transition: 'opacity 0.5s, transform 0.5s' // transform 추가
          }}>
            어려분의 AI/SW를 향한 열정을 <a className='logot'>REBOOT</a>에서 보여주세요!
          </p>
          <p style={{
            fontSize: '10vim',
            fontWeight: '600',
            position: 'sticky',
            top: '50%',
            opacity: scrollPosition > 8000 && scrollPosition < 8700 ? 1 : 0,
            transform: scrollPosition > 8000 && scrollPosition < 8700 ? 'scale(1)' : 'scale(0.5)', // scale 변경
            transition: 'opacity 0.5s, transform 0.5s' // transform 추가
          }}>
            <a className='logot'>We create skills for your future.</a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;