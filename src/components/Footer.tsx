import Link from '../ui/Link'
import { getCurrentYear } from '../utils/currentYear'

export default function Footer() {
  return (
    <footer className="py-2.5 bg-vdBlue">
      <div className="container">
        <p className="text-center">
          Boa parte dos direitos reservados. |{' '}
          <Link path="https://github.com/Luciana-Santos" target="_blank">
            Luciana Santos©
          </Link>{' '}
          {getCurrentYear()}
        </p>
      </div>
    </footer>
  )
}
