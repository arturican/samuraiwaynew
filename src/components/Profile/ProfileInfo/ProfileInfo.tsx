import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <img
                src={'https://sun9-75.userapi.com/impg/bCnAb2b5VJb-vqysmZXftbPMH7JPuJSV90vStw/f8mfVULd8To.jpg?size=640x640&quality=95&sign=813b1b1dd26fe4c4c8233199dc30014d&type=album'}
                alt={'Фотография Диляры'}
            />
            <p className={s.p}>
                Приветствуем Вас на сайте графического дизайнера Диляры, где каждая пиксельная точка обретает значение и
                становится частью уникального и яркого проекта. Мы создаем логотипы, веб-дизайн, иллюстрации и многое
                другое. Давайте воплотим Вашу креативную визию в жизнь!
            </p>
        </div>
    );
};

export default ProfileInfo;