import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MatchingButton, MatchingWrapper } from './style';

export default function Main() {
    const [userName, setUserName] = useState("");

    // 유저여부에 따라 다른 화면 렌더링 필요할듯함 
    // 로그인 체크
  return (
    <>
        {userName}마니또님 환영합니다!

        <Link to="/manito" style={{marginTop:"30px"}}>
            <MatchingWrapper>
                <MatchingButton>
                마니또 매칭하러가기
                </MatchingButton>    
            </MatchingWrapper>
        </Link>
        {/* 마니또 매칭하러가기 */}
    </>
  )
}
