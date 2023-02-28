import React from 'react';
import styles from "./Paginator.module.css";


let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pagesCount2;
    let limit = 10;

    if (pagesCount < limit)
        pagesCount2 = pagesCount;
    else
        pagesCount2 = limit;

    let pages = [];

    for (let i = 1; i <= pagesCount2; i++) {
        pages.push(i);
    }

    return <div>
        {pages.map(p => {
            return <span className={currentPage === p && styles.selectedPage}
                         onClick={(e) => {
                             onPageChanged(p)
                         }}>{p}</span>
        })}
    </div>

}
export default Paginator;