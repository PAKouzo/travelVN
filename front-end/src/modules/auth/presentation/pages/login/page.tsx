'use client'

import { LoginPayload } from "@/modules/auth/domain/dto/login.dto"
import LoginForm from "../../components/login-form/login-form.component"

const LoginPage = () => {
    return (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        <LoginForm onSubmit={function (values: LoginPayload): void {
            throw new Error("Function not implemented.")
        } } isLoading={false}/>
    )
}

export default LoginPage