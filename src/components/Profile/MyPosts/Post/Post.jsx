import s from './Post.module.css';

function Post(props) {

    return (
            <div className={s.item}>
                <img src = 'https://cdn.theatlantic.com/thumbor/e3SrEF40X-MywwdMPR8atugajaM=/2076x0:4506x2430/1080x1080/media/img/mt/2022/09/avatar_rerelease_2/original.jpg' />
                {props.message}
                <div>
                    <span>like</span>
                </div>

            </div>
    );
}
export default Post;