import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
import Logo from '@/assets/Logo.png'
import Link from './Link'

type Props = {}

const Navbar = (props: Props) => {
  const flexBetween = 'flex items-center justify-between'
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* navbar of mobile */}
            {/* Left Side */}
            <img src={Logo} alt="logo" />
            {/* Right Side */}
            <div className={`${flexBetween} w-full `}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                {/* Nav Items */}
                <Link page="Home" selectedPage={} />
                <Link page="Benefits" />
                <Link page="Our Classes" />
                <Link page="Contact Us" />
              </div>
              <div className={`${flexBetween} gap-8`}>
                {/* Sign In and become a member */}
                <p>Sign IN</p>
                <button>Become a member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
