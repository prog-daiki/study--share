import AuthForm from "@/components/auth-form";

export default function Home() {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center flex-col bg-gray-100 p-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Study Share</h1>
        </div>
        <div className="mt-4 font-semibold text-gray-700 text-center">
          <h2 className="text-md md:text-2xl">アカウントにログインしてください</h2>
        </div>
        <AuthForm />
      </div>
    </>
  )
}
