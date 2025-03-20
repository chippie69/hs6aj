import RegisterForm from "@/components/RegisterForm"

const RegisterPage = () => {
  return (
    <main className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-2xl">สมัครสมาชิก</h1>
        <p>
          สมัครสมาชิกกับสมาคมวิทยุสมัครเล่นจังหวัดพิจิตร HS6AJ
        </p>
        <div>
          <RegisterForm />
        </div>
      </div>
    </main>
  )
}

export default RegisterPage