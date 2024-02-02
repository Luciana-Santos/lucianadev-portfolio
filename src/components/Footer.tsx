import { getCurrentYear } from '../utils/currentYear'

export default function Footer() {
  return (
    <footer className="py-2.5 bg-vdBlue">
      <div className="container">
        <p className="text-center">
          Boa parte dos direitos reservados. |{' '}
          <a
            href="https://github.com/Luciana-Santos"
            target="_blank"
            className="link"
          >
            {' '}
            Luciana Santos©
          </a>{' '}
          {getCurrentYear()}
        </p>
      </div>
    </footer>
  )
}
