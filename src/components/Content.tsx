import introPicture from './../assets/image-intro-desktop.jpg';

import snappyPicture from './../assets/icon-snappy-process.svg';
import affordablePicture from './../assets/icon-affordable-prices.svg';
import peoplePicture from './../assets/icon-people-first.svg';

import rightIntroBgPatternDesktop from './../assets/bg-pattern-intro-right-desktop.svg';
import rightIntroBgPatternMobile from './../assets/bg-pattern-intro-right-mobile.svg';

import leftIntroBgPatternDesktop from './../assets/bg-pattern-intro-left-desktop.svg';
import leftIntroBgPatternMobile from './../assets/bg-pattern-intro-left-mobile.svg';
export default function Content() {
    return (
        <main className="flex flex-col items-center relative z-[1]">
            <section id="intro-section" 
                     className="inline-flex items-start gap-14 bg-[#2d2640] text-white pr-36 pl-12 py-[6.5rem] max-h-[37.65rem]
                                max-lg:flex-col-reverse max-lg:max-h-full max-lg:px-0 max-lg:py-0">
                <picture>
                    <source srcSet={leftIntroBgPatternMobile} media='(max-width: 1024px)' />
                    <img className='element absolute left-0 top-[27rem] max-lg:top-[34.35rem] 
                                    max-md:top-[34rem] max-[452px]:top-[26.55rem]' 
                         src={leftIntroBgPatternDesktop} alt='Backgorund pattern' />
                </picture>
                <picture>
                    <source srcSet={rightIntroBgPatternMobile} media='(max-width: 1024px)' />
                    <img className='absolute right-0 top-0 z-20 max-lg:top-[51rem] max-md:top-[51rem] max-sm:top-[57.2rem]' 
                         src={rightIntroBgPatternDesktop} alt='Backgorund pattern' />
                </picture>
                <article className="flex flex-col items-start gap-6 max-lg:items-center max-lg:text-center
                                    max-lg:px-2">
                    <div className="border-[1px] border-b-0 border-white mb-8 w-36 max-lg:hidden"></div>
                    <h1 className="font-['DM_Serif_Display'] text-7xl leading-[68px] max-lg:mt-12 
                                   max-lg:text-[44px] max-lg:px-6 max-lg:leading-[56px] max-lg:z-20">
                        Humanizing your insurance.
                    </h1>
                    <p className='leading-[28px] max-lg:px-10'>
                        Get your life insurance coverage easier and faster. We blend our expertise
                        and technology to help you find the plan that’s right for you. Ensure you
                        and your loved ones are protected.
                    </p>
                    <button className="border-[2px] border-white px-8 py-2
                                       hover:bg-white hover:text-[#2d2640] uppercase transition-all">View Plans</button>
                </article>

                <img src={introPicture}
                    className='z-10 h-auto object-cover shadow-lg max-lg:max-h-[550px] max-lg:w-full'
                    alt="Family Intro Image" />

            </section>
            <section className="flex flex-col items-start max-h-[1400px] max-w-[1440px]
                                gap-16 text-white px-36 py-28 
                                max-lg:max-h-full max-lg:px-8 max-lg:pt-0">

                <article className="flex flex-col items-start gap-6 text-[#2b272f] max-lg:items-center max-lg:text-center">
                    <div className=" mt-48 border-[1px] border-b-0 border-[#2d264088] w-36 max-lg:mt-40"></div>
                    <h2 className="mt-5 font-['DM_Serif_Display'] text-[76px] max-lg:text-6xl max-md:text-[7.5vw] max-sm:text-[2.75rem]">
                        We're different
                    </h2>
                    <div className="inline-flex items-start justify-center mt-12 gap-8 max-lg:flex-col max-lg:items-center">
                        <div className="flex flex-col items-start gap-8 max-lg:items-center">
                            <img src={snappyPicture} alt='Simple lightining icon'></img>
                            <h2 className="font-['DM_Serif_Display'] text-2xl" style={{ WebkitTextStroke: 'thin' }}>
                                Snappy Process
                            </h2>
                            <p className='text-[#837d87] leading-6'>
                                Our application process can be completed in minutes, not hours. Don’t get
                                stuck filling in tedious forms.
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-8 max-lg:items-center">
                            <img src={affordablePicture} alt='Dollar sign icon'></img>
                            <h2 className="font-['DM_Serif_Display'] text-2xl" style={{ WebkitTextStroke: 'thin' }}>
                                Affordable Prices
                            </h2>
                            <p className='text-[#837d87] leading-6'>
                                We don’t want you worrying about high monthly costs. Our prices may be low,
                                but we still offer the best coverage possible.
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-8 max-lg:items-center">
                            <img src={peoplePicture} alt='Avatar icon'></img>
                            <h2 className="font-['DM_Serif_Display'] text-2xl" style={{ WebkitTextStroke: 'thin' }}>
                                People First
                            </h2>
                            <p className='text-[#837d87] leading-6'>
                                Our plans aren’t full of conditions and clauses to prevent payouts. We make
                                sure you’re covered when you need it.
                            </p>
                        </div>
                    </div>
                </article>
                <div className="find-out-more relative overflow-hidden inline-flex items-center justify-between bg-[#2d2640] 
                                px-16 py-14 w-full max-lg:px-8 max-lg:pt-8 max-lg:pb-18 
                                max-lg:flex-col max-lg:gap-10 max-lg:text-center">
                    <h3 className="font-['DM_Serif_Display'] text-[2.85em] max-w-[500px] max-[1350px]:text-[3.2vw] max-lg:text-[36px]">
                        Find out more about how we work
                    </h3>
                    <button className="border-[2px] border-white px-10 py-4
                                       hover:bg-white hover:text-[#2d2640] 
                                       uppercase transition-all z-10">How We Work</button>
                </div>
            </section>
        </main>
    );
}