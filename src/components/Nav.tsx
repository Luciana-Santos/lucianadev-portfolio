import { data } from '../utils/data'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 inset-x-0 backdrop-blur-lg gap-y-1 z-[999]">
      <ul className="flex  gap-x-5 justify-center flex-wrap">
        {data.map((link) => {
          return (
            <>
              <li key={link.path}>
                <a
                  href={link.path}
                  className="block uppercase text-whiteBody hover:text-white tracking-wider py-2.5"
                >
                  {link.name}
                </a>
              </li>
            </>
          )
        })}
      </ul>
    </nav>
  )
}
