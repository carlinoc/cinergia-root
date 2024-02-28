// Import necessary dependencies and components
import { Hero } from '@/app/ui/components/Content/Hero';
import { ListSection } from '@/app/ui/components/Content/ListSection/ListSection';

/**
 * Content Page Component
 *
 * This component represents the main structure of the Content page.
 * It includes a Hero component for displaying a featured section and a ListSection component for displaying a list of items.
 *
 * @component
 * @returns {JSX.Element} - JSX element representing the Content component.
 */
export default function Content(): JSX.Element {
  /**
   * Render the JSX for the Content component
   */
  return (
    <div className="w-full">
      {/* Hero section */}
      <Hero />
      {/* List section */}
      <ListSection />
    </div>
  );
}
