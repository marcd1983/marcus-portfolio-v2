'use client'
import type { Page } from '@/payload-types'
import Link from 'next/link'

export const HomeHero: React.FC<Page['hero']> = () => {
  return (
    <div className="container mx-auto lg:h-[70vh] content-center">
      <div className="text-left py-8">
        <h2 className="text-6xl md:text-8xl font-medium text-balance pb-6">
          Visual Designer
          <br /> & Developer
        </h2>
        <p className="md:text-2xl pb-6">
          Hi, I am Marcus. A designer and developer based in the Rio Grande Valley of Texas.
          <br />
          I’m currently working with Rowe Group / Equipment Locator. 
        </p>
        {/* {richText && <RichText className="mb-6" data={richText} enableGutter={false} />} */}
        <Link
          href="#block-67ecafd4d7716e5d50e78d1b"
          className="inline-block"
          aria-label="Navigate to Portfolio"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="90.853"
            height="92.095"
            viewBox="0 0 90.853 92.095"
          >
            <g transform="translate(3 3)">
              <g transform="translate(-478.074 -793.5)">
                <path
                  className="stroke-black dark:stroke-white"
                  d="M92,998.667h60v-60"
                  transform="translate(1119.184 64.709) rotate(45)"
                  fill="none"
                  strokeWidth="4"
                ></path>
                <path
                  className="stroke-black dark:stroke-white"
                  d="M176.7,1007.37l-60-60"
                  transform="translate(1107.87 41.086) rotate(45)"
                  fill="none"
                  strokeWidth="4"
                ></path>
              </g>
            </g>
          </svg>
        </Link>
      </div>
    </div>
  )
}
