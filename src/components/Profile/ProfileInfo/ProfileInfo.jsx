import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.content}>
                <img
                    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                avatar + description
            </div>

        </div>
    );
}

export default ProfileInfo;