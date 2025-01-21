'use client'
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { useState } from "react"
import { Button } from "./ui/button"

function HomePage() {
    const [showVertical, setShowVertical] = useState(false);
    const [showLeftToRight, setShowLeftToRight] = useState(false);
    const [showRightToLeft, setShowRightToLeft] = useState(false);
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex gap-4 mb-6 justify-center">
                <Button
                    onClick={setShowLeftToRight}>
                    Left to Right
                </Button>
                <Button
                    onClick={setShowRightToLeft}>
                    Right to Left
                </Button>
                <Button
                    onClick={setShowVertical}>
                    Vertical
                </Button>
            </div>

            {showLeftToRight && (
                <InfiniteSlider
                    gap={48}
                    durationOnHover={75}
                    reverse={true}
                >
                    <img
                        src='/brand-logos/product_hunt.png'
                        alt=''
                        className='h-[100px] w-auto'
                    />
                    <img
                        src='/brand-logos/fast.png'
                        alt=''
                        className='h-[40px] w-auto'
                    />
                    <img
                        src='/brand-logos/inc.png'
                        alt=''
                        className='h-[80px] w-auto'
                    />
                    <img
                        src='/brand-logos/techcrunch.png'
                        alt=''
                        className='h-[70px] w-auto'
                    />
                    <img
                        src='/brand-logos/forbes.svg'
                        alt=''
                        className='h-[120px] w-auto'
                    />
                    <img
                        src='/brand-logos/wired.png'
                        alt=''
                        className='h-[50px] w-auto'
                    />
                    <img
                        src='/brand-logos/businessinsider.png'
                        alt=''
                        className='h-[55px] w-auto'
                    />
                    <img
                        src='/brand-logos/cnn.png'
                        alt=''
                        className='h-[55px] w-auto'
                    />
                    <img
                        src='/brand-logos/bloomberg.png'
                        alt=''
                        className='h-[90px] w-auto'
                    />
                </InfiniteSlider>
            )}

            {showRightToLeft && (
                <InfiniteSlider
                    gap={48}
                    durationOnHover={75}
                >
                    <img
                        src='/brand-logos/product_hunt.png'
                        alt=''
                        className='h-[100px] w-auto'
                    />
                    <img
                        src='/brand-logos/fast.png'
                        alt=''
                        className='h-[40px] w-auto'
                    />
                    <img
                        src='/brand-logos/inc.png'
                        alt=''
                        className='h-[80px] w-auto'
                    />
                    <img
                        src='/brand-logos/techcrunch.png'
                        alt=''
                        className='h-[70px] w-auto'
                    />
                    <img
                        src='/brand-logos/forbes.svg'
                        alt=''
                        className='h-[120px] w-auto'
                    />
                    <img
                        src='/brand-logos/wired.png'
                        alt=''
                        className='h-[50px] w-auto'
                    />
                    <img
                        src='/brand-logos/businessinsider.png'
                        alt=''
                        className='h-[55px] w-auto'
                    />
                    <img
                        src='/brand-logos/cnn.png'
                        alt=''
                        className='h-[55px] w-auto'
                    />
                    <img
                        src='/brand-logos/bloomberg.png'
                        alt=''
                        className='h-[90px] w-auto'
                    />
                </InfiniteSlider>
            )}

            {showVertical && (
                <div className='relative flex h-[350px] space-x-4 mt-20'>
                    <div className='absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent z-10' />
                    <div className='absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10' />
                    <InfiniteSlider direction='vertical'>
                        <img
                            src='https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677'
                            alt='Dean blunt - Black Metal 2'
                            className='aspect-square w-[120px] rounded-[4px]'
                        />
                        <img
                            src='https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141'
                            alt='Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
                            className='aspect-square w-[120px] rounded-[4px]'
                        />
                        <img
                            src='https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf'
                            alt='Yung Lean - Stardust'
                            className='aspect-square w-[120px] rounded-[4px]'
                        />
                        <img
                            src='https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f'
                            alt='Lana Del Rey - Ultraviolence'
                            className='aspect-square w-[120px] rounded-[4px]'
                        />
                        <img
                            src='https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288'
                            alt='A$AP Rocky - Tailor Swif'
                            className='aspect-square w-[120px] rounded-[4px]'
                        />
                        <img
                            src='https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520'
                            alt='Midnight Miami (feat Konvy) - Nino Paid, Konvy'
                            className='aspect-square w-[120px] rounded-[4px]'
                        />
                    </InfiniteSlider>
                    <InfiniteSlider direction='vertical' reverse>
                        <img
                            src='https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645'
                            alt='DAYS BEFORE RODEO - Travis Scott'
                            className='aspect-square w-[120px] rounded-[4px]'
                        />
                        <img
                            src='https://i.scdn.co/image/ab67616d00001e02d3e668d0c74720c8c23978e3'
                            alt="You're in My System - TORYONTHEBEAT"
                            className='aspect-square w-[120px] rounded-[4px]'
                        />
                        <img
                            src='https://i.scdn.co/image/ab67616d00001e0234537499b159b0e6d18e5655'
                            alt="You can't tell me - People Make the World Go Round"
                            className='aspect-square w-[120px] rounded-[4px]'
                        />
                        <img
                            src='https://i.scdn.co/image/ab67616d00001e020cd942c1a864afa4e92d04f2'
                            alt='ye - Kanye West'
                            className='aspect-square w-[120px] rounded-[4px]'
                        />
                        <img
                            src='https://i.scdn.co/image/ab67616d00001e02a875c3ec944b4f164ab5c350'
                            alt='Slime Season 3 - Young Thug'
                            className='aspect-square w-[120px] rounded-[4px]'
                        />
                        <img
                            src='https://i.scdn.co/image/ab67616d00001e026376f0d88bbbc8cd051e3401'
                            alt='SWAG - 8ruki'
                            className='aspect-square w-[120px] rounded-[4px]'
                        />
                    </InfiniteSlider>
                </div>
            )}
        </div>
    )
}

export default HomePage