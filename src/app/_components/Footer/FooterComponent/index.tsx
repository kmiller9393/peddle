'use client'

import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { Footer } from '../../../../payload/payload-types'
import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'

import classes from './index.module.scss'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map(i => (
            <li key={i.title}>
              <Image src={i.icon} alt={i.title} height={36} width={36} className={classes.icon} />

              <h5 className={classes.title}>{i.title}</h5>
              <p>{i.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>
    </footer>
  )
}

export default FooterComponent
