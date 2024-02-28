// Import necessary dependencies and types
import { Navbar } from './Navbar';

/**
 * Header Component
 *
 * A React component representing the header section of the application. It includes the Navbar component,
 * which displays the navigation bar
 */

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full">
      <Navbar />
    </header>
  );
}
