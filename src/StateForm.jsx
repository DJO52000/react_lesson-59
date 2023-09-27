import { useState } from "react"
import { checkEmail, checkPassword } from "./validators"

export function StateForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [emailErrors, setEmailErrors] = useState([])
    const [passwordErrors, setPasswordErrors] = useState([])

    function onSubmit(e) {
        e.preventDefault()

        const emailValidator =checkEmail(email)
        const passwordValidator =checkPassword(password)

        setEmailErrors(emailValidator)
        setPasswordErrors(passwordValidator)

        if (emailValidator.length === 0 && passwordValidator.length === 0) {
            alert("Success")
        }
    }

    return (
        <form onSubmit={onSubmit} className="form">
            <div
                className={`form-group ${
                    emailErrors.length > 0 ? "error" : ""
                }`}
            >
                <label className="label" htmlFor="email">
                    Email
                </label>
                <input
                    className="input"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {emailErrors.length > 0 && (
                    <div className="msg">{emailErrors.join(", ")}</div>
                )}
            </div>
            <div
                className={`form-group ${
                    passwordErrors.length > 0 ? "error" : ""
                }`}
            >
                <label className="label" htmlFor="password">
                    Password
                </label>
                <input
                    className="input"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {passwordErrors.length > 0 && (
                    <div className="msg">{passwordErrors.join(", ")}</div>
                )}
            </div>
            <button className="btn" type="submit">
                Submit
            </button>
        </form>
    )
}