import React, { memo } from 'react';
import './contents.css';
import ContentsCategory from 'components/contentsCategory/contentsCategory';
import ContentsTitle from 'components/contentsTitle/contentsTitle';
import ContentsDate from 'components/contentsDate/contentsDate';
import ContentsText from 'components/contentsText/contentsText';
import ContentsImage from 'components/contentsImage/contentsImage';
import Toggle from './toggle';

const Contents = memo(() => {
  const text = 'JavaScript(JS)는 가벼운 인터프리터 또는 JIT 컴파일 프로그래밍 언어로, 일급 함수를 지원합니다.\n'
    + '웹 페이지의 스크립트 언어로서 제일 유명하지만 Node.js, Apache CouchDB, Adobe Acrobat\n'
    + '처럼 많은 비 브라우저 환경에서도 사용하고 있습니다.\n'
    + '\n'
    + 'JavaScript는 프로토타입 기반의 동적 다중 패러다임 스크립트 언어로, 객체지향형, 명령형, 선언형\n'
    + '(함수형 프로그래밍 등) 스타일을 지원합니다.\n'
    + '\n'
    + '자세한 내용은 JavaScript에 대하여를 참고하세요.';

  const handleToggleClick = () => {
    const toggleBtn = document.querySelector('.toggleBtn');
    toggleBtn.classList.toggle('active');
    console.log('hello');
  };

  return (
    <div className="ContentsContainer">
      <Toggle onClick={handleToggleClick} />
      <ContentsCategory name="javascript" icon="python" />
      <ContentsTitle text="Javascript Syntax" />
      <ContentsDate date="2020. 10. 31. (토)" />
      <ContentsText value={text} />
      <ContentsImage imageSrc="javascript.jpg" />
    </div>
  );
});

export default Contents;
