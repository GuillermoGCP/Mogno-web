import { Barlow, Barlow_Condensed } from 'next/font/google'

export const barlow = Barlow({
    subsets: ['latin'],
    weight: ['500'],
})

export const barlowCondensed = Barlow_Condensed({
    weight: ['600'],
    subsets: ['latin'],
})
