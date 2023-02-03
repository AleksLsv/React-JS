import React from "react";
import styles from "./FormsControls.module.css";

export const FormsControl = ({input, meta, child, ...props}) => {

    const hasError =meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormsControl {...props}><textarea {...input} {...restProps} /></FormsControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormsControl {...props}><input {...input} {...restProps}/></FormsControl>
}





/*
export const Textarea = ({input, meta, ...props}) => {

    const hasError =meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: "")}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    const hasError =meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: "")}>
            <div>
                <input {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}*/
