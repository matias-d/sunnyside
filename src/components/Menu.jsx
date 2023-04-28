
const navigation = ['About', 'Services', 'Projects']

export function Menu() {
  return (
    <article className="bg-white  h-96 flex items-center w-80  fixed top-28 left-1/2 -translate-x-1/2 after:w-0 after:h-0 after:border-l-[16px] after:border-l-transparent after:border-t-[16px] after:border-t-transparent after:border-r-[16px] after:border-r-white after:border-b-[16px] after:border-b-white after:absolute after:-top-8 after:right-0 z-50">
        <nav className="flex flex-col gap-y-10 w-full justify-center items-center">
            {
                navigation.map(nav => (
                    <p key={nav
                    } className="font-barlow text-xl text-gray-blue cursor-pointer">
                        {nav}
                    </p>
                ))
            }
            <p className="bg-yellow-400 text-black font-fraunces font-bold py-4 px-8 rounded-full cursor-pointer">CONTACT</p>
        </nav>
    </article>
  )
}
