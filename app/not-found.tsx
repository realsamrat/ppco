import Link from 'next/link'
import { Button } from '../components/Button'

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="text-center px-6 py-24">
        <h1 className="font-heading text-8xl md:text-9xl text-driftwood mb-4">404</h1>
        <h2 className="font-heading text-3xl md:text-4xl text-forest mb-6">Page Not Found</h2>
        <p className="font-body text-lg text-forest-light max-w-md mx-auto mb-10 leading-relaxed">
          Sorry, we couldn't find the page you're looking for. It might have been moved or no longer
          exists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="primary">Back to Home</Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
