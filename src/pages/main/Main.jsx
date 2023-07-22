import React, { useState } from 'react'

export default function Main() {
    const [userName, setUserName] = useState("");

    // 유저여부에 따라 다른 화면 렌더링 필요할듯함 
    // 로그인 체크
  return (
    <>
        {userName}마니또님 환영합니다!

        {/* 마니또 매칭하러가기 */}
    </>
  )
}
