import { useState } from "react"
import Input from "../components/Input";
import Button from "../components/Button";;
function Login() {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const handleLogin = ()=>{
    if (email === "admin@test.com" && password === "1234") {
        localStorage.setItem("token", "dummy-token");
        window.location.href = "/";
    } else {
        alert("Invalid credentials");
    }
}
    return(
        <div>
            <h2>LoginPage</h2>
                  {/* <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
       */}
      
       <Input
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />

      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />

      <Button onClick={handleLogin} text="Login" type="submit" />
      
        </div>
    )
}

export default Login;