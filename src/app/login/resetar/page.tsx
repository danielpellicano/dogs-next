import LoginPerdeuForm from "@/components/login/login-perdeu-form"
import LoginResetarForm from "@/components/login/login-resetar-form"
import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'Perdeu a Senha | Dogs',
    description: 'Recupere a sua senha'
}

type ResetarSearchParams = {
    searchParams: {
        key: string;
        login: string;
    }
}

// export const dynamic = 'force-dynamic';

export default async function ResetarPage( {searchParams} : ResetarSearchParams) {
    return (
    <div className="animeLeft">
        <h1 className="title">Reseta a Senha</h1>
        <LoginResetarForm keyToken={searchParams.key} login={searchParams.login}/>
    </div>
    )
}