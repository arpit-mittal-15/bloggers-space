export function SignIn(){
  return(
    <div className="h-full flex flex-col gap-5 pl-20 justify-center">
      <form className="bg-white flex flex-col w-[350px] p-10 rounded-lg gap-3">
        <section>
          <label htmlFor="name" className="text-red-500">Name:</label><br/>
          <input type="text" name="name" autoComplete="off" id="name" className="bg-transparent my-3 w-[100%] border-slate-300 border-b-2 focus:outline-none focus:border-slate-500"/>
        </section>
        <section>
          <label htmlFor="name" className="text-red-500">Email:</label><br/>
          <input type="text" name="email" autoComplete="off" className="my-3 w-[100%] border-slate-300 border-b-2 focus:outline-none focus:border-slate-500" /></section>
        <section>
          <label htmlFor="name" className="text-red-500">Password:</label><br/>
          <input type="password" name="password" className="my-3 w-[100%] border-slate-300 border-b-2 focus:outline-none focus:border-slate-500" />
        </section>
        <button type="submit" className="bg-red-500 text-white w-64 text-center py-3 m-[5px_auto] rounded-md hover:scale-[1.1] transition-all duration-300">Create</button>
      </form>
    </div>
  )
}