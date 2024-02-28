export interface BulletStyleType extends React.CSSProperties {
  '--swiper-pagination-color'?: string;
  '--swiper-pagination-bullet-inactive-color'?: string;
}

export interface HeroSliderProps {
  movieList: MovieDetailsAPI[];
}
