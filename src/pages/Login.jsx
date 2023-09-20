import loginImg from "../assets/Images/login.webp"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Connecting to doctors for today, tomorrow, and beyond."
      description2="Treatment to future-proof your treatment"
      image={loginImg}
      formType="login"
    />
  )
}

export default Login