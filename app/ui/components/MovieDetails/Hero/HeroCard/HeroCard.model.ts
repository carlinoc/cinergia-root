import { ButtonHTMLAttributes } from 'react';

// Describes the properties for a Hero Card component.
export interface HeroCardProps {
  movieData: MovieDetailsAPI;
}

// Describes the properties for an Information Section component.
export interface InfoSectionProps extends HeroCardProps {}

// Describes the properties for an Overview Section component.
export interface OverviewSectionProps {
  overview: string; // Overview content.
  whySeeIt: string; // Reasons to watch the movie.
}

export interface WrapperPlayButtonProps {
  movieData: MovieDetailsAPI;
}

// Describes the properties for a Play Button component.
export interface PlayButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  movieData: MovieDetailsAPI;
  userMovieList: MovieUserList[];
  isLoading: boolean;
  handlePay: () => void;
}

export interface ConfigPayment {
  bg: string;
  title: string;
  text?: string;
  subtitle: string;
}
