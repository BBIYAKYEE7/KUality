import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [bgColor, setBgColor] = useState('white');
  const [selectedYear, setSelectedYear] = useState('박현'); // 현재 선택된 연도를 추적하는 상태

  const team = { // 운영진 소개
    '박현': ['System Hacking (Pwnable) / Cryptography 교육담당', '핵테온 / 암호분석경진대회 / 사이버공격방어대회 / 화이트햇 콘테스트 / 코드게이트 / WACON 등 다수의 해킹대회 수상 및 본선 진출', '현 Theori 드림핵 팀 재직중', 'TeamH4C'],
    '황동현': ['Reverse Engineering / Blockchain 교육', 'Ethereum Foundation karalabe/ssz fuzzer development', '현재 Ethereum Foundation과 프로젝트 합의 중'],
    '김민욱': ['Web Hacking 교육', 'LG U+ 해킹대회, 코드게이트, WACON, 화이트햇 콘테스트, KOSPO, 한국연구재단 등 다수의 연구 참여 및 해킹대회 수상 및 본선 진출', 'BusinessH4C AI, Web2 Research 팀 재직 중']
  };
  useEffect(() => {
    document.title = "KUality";
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
          KUality</p>
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
        <div style={{ height: '9600px' }}>
          <p className='logot'
            style={{
              fontWeight: '600',
              fontSize: '3rem',
              position: 'sticky',
              top: '45%',
              opacity: scrollPosition > 100 && scrollPosition < 1000 ? 1 : 0,
              transform: scrollPosition > 100 && scrollPosition < 700 ? 'translateY(0)' : 'translateY(100px)',
              transition: 'opacity 0.5s, transform 0.5s'
            }}>KUality?</p>
          <p style={{
            fontSize: '10vim',
            fontWeight: '600',
            position: 'sticky',
            top: '50%',
            opacity: scrollPosition > 1400 && scrollPosition < 2000 ? 1 : 0,
            transform: scrollPosition > 1400 && scrollPosition < 2000 ? 'scale(1)' : 'scale(0.5)', // scale 변경
            transition: 'opacity 0.5s, transform 0.5s' // transform 추가
          }}>
            <a className='logot'>KUality</a>, 고려대학교 세종캠퍼스 유일 해킹 <strong>연구</strong> 동아리
          </p>
          <p style={{ fontSize: '16vim', fontWeight: '500', position: 'sticky', top: '50%', opacity: scrollPosition > 2300 && scrollPosition < 3200 ? 1 : 0, transition: 'opacity 0.5s' }}>컴퓨터를 잘 몰라도 한 학년이 끝날 때 <strong>전문가로</strong> 성장시키는</p>
          <p style={{ fontSize: '16vim', fontWeight: '500', position: 'sticky', top: '50%', opacity: scrollPosition > 3600 && scrollPosition < 4400 ? 1 : 0, transition: 'opacity 0.5s' }}>동아리원을 교육하는 운영진을 소개합니다.</p>
          <div style={{
            position: 'sticky',
            top: '30%',
            opacity: scrollPosition > 4800 && scrollPosition < 5600 ? 1 : 0,
            transform: scrollPosition > 4800 && scrollPosition < 5600 ? 'translateY(0)' : 'translateY(100px)',
            transition: 'opacity 0.5s, transform 0.5s'
          }}>
            <h2 style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)' }}>운영진(교육팀)</h2>
            <div>
              {Object.keys(team).map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className='bt'
                  style={{ fontSize: 'clamp(0.75rem, 2vw, 1.5rem)' }}
                >
                  {year}
                </button>
              ))}
            </div>
            <ul style={{ fontSize: 'clamp(1rem, 2vw, 2rem)' }}>
              {team[selectedYear].map((award, idx) => (
                <li key={idx}>{award}</li>
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
            어때요. 자신감을 가질만 하죠?
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
            고려대학교 세종캠퍼스 유일의 해킹 연구 동아리.
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
            <a className='logot'>Create your skills form KUality.</a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;