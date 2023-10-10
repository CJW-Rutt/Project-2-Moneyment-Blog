import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Moneyment Blog
      </h1>
      <img
        src="/assets/blog/authors/moneyment.png" 
        style={{ width: '100px', height: '100px' }}
      />
    </section>
  )
}

export default Intro;