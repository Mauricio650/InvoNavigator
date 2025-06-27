import { useId } from "react";
import { DocumentLogo } from "../components/Icons";
import '../assets/styles/login.css'

export function Login () {
    const idInputPassword = useId()
    const idInputUsername = useId()
    const idInputRememberMe = useId()
    return (
        <section className="login">
            <article className="login-container">
                <header>
                    <DocumentLogo></DocumentLogo>
                    <h1>Invoice Navigator</h1>
                </header>
                <div className="container-form">
                    <form>
                        <label className="sr-only" htmlFor={idInputUsername}>
                            Username
                        </label>
                        <input type="text" id={idInputUsername} required={true} placeholder="username"/>
                        <label className="sr-only"  htmlFor={idInputPassword}>
                            Password
                        </label>
                        <input type="password" id={idInputPassword} required={true} placeholder="password" />
                        <aside>
                            <button>Log in</button>
                            <div>
                            <label htmlFor={idInputRememberMe}>Remember me</label>
                            <input type="checkbox" name="RememberMe" id={idInputRememberMe} />
                            </div>
                        </aside>
                    </form>
                </div>
                <div className="container-register">
                    <p>You don´t have any account? <span><a href="">Sign up</a></span></p> 
                </div>
            </article>
        </section>
    )
}