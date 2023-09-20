import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Join the HealthVistaHub for free"
      description1="Connecting to doctor for today, tomorrow, and beyond."
      description2="Connecting future-proof your life."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup