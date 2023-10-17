import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
        <img
        src="/assets/blog/authors/moneyment.png" 
        style={{ width: '100px', height: '100px' }}
      />
          <p className="font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          BCIT D3 - Corey, Giovana, Haydn, Jake, Jenny, Justin, Kaitlyn & Sara
          </p>
                 
        </div>
      </Container>
    </footer>
  )
}

export default Footer
