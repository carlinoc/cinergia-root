// Import necessary dependencies and types
import { Hero } from '@/app/ui/components/Home/Hero';
import { ExclusiveSection } from '@/app/ui/components/Home/ExclusiveSection';
import { NewsSection } from '@/app/ui/components/Home/NewsSection';
import { ShortFilmsBannerSection } from '@/app/ui/components/Home/ShortFilmsBannerSection';
// import { EventBannerSection } from '@/app/ui/components/Home/EventBannerSection';
import { WeekMovieSection } from '@/app/ui/components/Home/WeekMovieSection';
import { ScrollTopButtonWrapper } from './ui/components/shared/ScrollTopButtonWrapper';

/**
 * Home Component
 *
 * The Home component serves as the main structure for the home page.
 * It comprises a fixed header with a navigation bar and various sections,
 * including Hero, ExclusiveSection, NewsSection, ShortFilmsBannerSection,
 * EventBannerSection, and WeekMovieSection.
 *
 * @component
 * @returns {JSX.Element} - JSX element representing the Home component.
 */
export default function Home(): JSX.Element {
  return (
    <ScrollTopButtonWrapper>
      {/* Main content area */}
      <main className="w-full">
        {/* Hero section */}
        <Hero />

        {/* ExclusiveSection component */}
        <ExclusiveSection />

        {/* NewsSection component */}
        <NewsSection />

        {/* ShortFilmsBannerSection component */}
        <ShortFilmsBannerSection />

        {/* EventBannerSection component */}
        {/* <EventBannerSection /> */}

        {/* WeekMovieSection component */}
        <WeekMovieSection />
      </main>
    </ScrollTopButtonWrapper>
  );
}
