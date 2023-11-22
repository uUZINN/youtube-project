import { todayText } from '../data/today';
import Main from '../components/section/Main';


const Today = () => {
    return (
        <Main
            title='패션 유튜버 추천'
            description='패션 유튜버 추천 페이지 입니다. 패션 유튜버의 추천 영상을 확인할 수 있습니다.'
        >
            <section id='todayPage'>
                {todayText.map((today, key) => (
                    <div className="today__inner" key={key}>
                        <div className="today__thumb">
                            <img src={today.img} alt={today.title} />
                        </div>
                        <div className="today__text">
                            <span className='today__pick'>Today's pick!</span>
                            <h3>{today.title}</h3>
                            <p>{today.desc}</p>
                            <div className="info">
                                <span className='author'>{today.author}</span>
                                <span className='date'>{today.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </Main>

    )
}

export default Today