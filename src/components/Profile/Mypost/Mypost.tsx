import React from 'react';
import s from './Myposts.module.css'
import Post from "../Post/Post";

const Mypost = () => {

    const text:string = 'Привет, дорогие! 🎨 Сегодня хочу поделиться своим последним проектом – это логотип для местного благотворительного фонда. Было так волнительно работать над этой задачей, зная, что дизайн может вносить вклад в позитивные изменения в нашем сообществе. ❤️ Надеюсь, что мой творческий вклад поможет привлечь внимание к этому важному проекту! #графическийдизайн #логотип #благотворительность'
    const  text2:string = 'Доброе утро, мои творческие друзья! 🌞 Сегодня хочу обсудить с вами тему типографики. Как вы выбираете шрифты для своих проектов? Я обожаю экспериментировать с разными стилями, чтобы подчеркнуть уникальность каждого дизайна. Поделитесь своими любимыми шрифтами или дайте совет начинающим дизайнерам! 🎨💬 #графическийдизайн #типографика #творчество'
    return (
        <div className={s.profile}>
            <textarea></textarea>
            <button>Добавить пост</button>
        <Post
            img={'https://sun9-41.userapi.com/impg/-Nmd-rKeYHpHFIQxFC2YXLEGOKENgvpPSJu8VA/aTyZ80QTPqI.jpg?size=640x640&quality=95&sign=502bc56ada5295d6fac5779b29964815&type=album'}
            text={text}
        />
        <Post
            img={'https://sun9-41.userapi.com/impg/-Nmd-rKeYHpHFIQxFC2YXLEGOKENgvpPSJu8VA/aTyZ80QTPqI.jpg?size=640x640&quality=95&sign=502bc56ada5295d6fac5779b29964815&type=album'}
            text={text2}
        />

    </div>)


};

export default Mypost;