import React from "react";
import { Signup } from "./Signup";
export const Login = (props) => {
    return (
        <div className=" information">
            <h2>Sign In</h2>
            <form>

                <label>
                    Email:
                    <input type="email" placeholder="enter your email" />
                </label>

                <label>
                    Password:
                    <input type="password" placeholder="enter your password" />
                </label>
                <button type="submit">Login</button>
            </form>
            <button onClick={props.onToggleSignup}>
                Don't have an account? Create here</button>

        </div>

    );
}
