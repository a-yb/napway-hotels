import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="lg:container mx-auto">
        <nav className="flex justify-center">
          <h3 className="text-2xl">
            Napway Hotels &copy; {new Date().getFullYear()}
          </h3>
        </nav>
      </div>
    </footer>
  )
}
