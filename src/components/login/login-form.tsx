'use client';
import styles from './login-form.module.css';
import login from "@/actions/login";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import React from "react";
import Link from "next/link";

function FormButton() {
    const {pending} = useFormStatus();

    return (
        <>
        {pending ? (
            <Button disabled={pending}>Enviando...</Button> ) : ( <Button disabled={pending}>Entrar</Button> )}
        </>
    );
        }

export default function LoginForm() {

   const [state, action] = useFormState(login, {
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
            <Input label="senha" name="password" type="password" />
            <ErrorMessage error={state.error} />
            <FormButton />
        </form>
        <Link className={styles.perdeu} href="./login/perdeu">Perdeu a senha?</Link>
        <div className={styles.cadastro}>
            <h2 className={styles.subtitle}>Cadastre-se</h2>
            <p>Ainda não possui conta? Cadastre-se no site.</p>
            <Link href="./login/criar" className='button'>Cadastro</Link>
        </div>
        </>
    );
}

