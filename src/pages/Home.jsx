import React from 'react'
import Today from '../components/contents/Today';
import Fashion from '../components/contents/Fashion';
import Main from '../components/section/Main';

const Home = () => {
    return (
        <Main
            title='패션 유튜버'
            description='패션 유튜버 모음 사이트에 오신 것을 환영합니다.'
        >
            <Today />
            <Fashion />
        </Main>
    )
}

export default Home