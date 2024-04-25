'use client';
import styles from './login-form.module.css';
import { useFormState, useFormStatus } from "react-dom";
import React from "react";
import Button from '../forms/button';
import Input from '../forms/input';
import ErrorMessage from '../helper/error-message';
import userPost from '@/actions/user-post';

function FormButton() {
    const {pending} = useFormStatus();

    return (
        <>
        {pending ? (
            <Button disabled={pending}>Cadastrando...</Button> ) : ( <Button disabled={pending}>Cadastrar</Button> )}
        </>
    );
        }

export default function LoginCriarForm() {

   const [state, action] = useFormState(userPost, {
    ok: false,
    error: '',
    data: null
   });

   React.useEffect(() => {
    if (state.ok) window.location.href = './conta';
}, [state.ok])



    return (
        <>
        <form action={action} className={styles.form}>
            <Input label="usuário" name="username" type="text" />
            <Input label="email" name="email" type="email" />
            <Input label="senha" name="password" type="password" />
            <ErrorMessage error={state.error} />
            <FormButton />
        </form>
        </>
    );
}

