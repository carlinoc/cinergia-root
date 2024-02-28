// Import necessary dependencies and types
import { InfoSection } from './InfoSection';
import { OverviewSectionSM } from './OverviewSectionSM';
import { ConfigPayment, HeroCardProps } from './HeroCard.model';
import WrapperPlayButton from './WrapperPlayButton/WrapperPlayButton';
import { CDN_IMAGES_BASE_URL } from '@/app/lib/data/urls';

// Object to map payment_type to configuration
const paymentTypeConfig: Record<string, ConfigPayment> = {
  PT: {
    bg: 'bg-fucsiaBrushStroke2',
    title: 'Disfrútala solo por',
    subtitle: '',
  },
  DO: {
    bg: 'bg-greenBrushStroke2',
    title: '¡Disfrútala y apoya nuestro contenido con una donación!',
    text: '',
    subtitle: '',
  },
  DV: {
    bg: 'bg-greenBrushStroke2',
    title: '¡Disfrútala y apóyanos con lo que desees!',
    text: '',
    subtitle: 'Tu generosidad nos ayuda',
  },
  default: {
    bg: 'bg-blueBrushStroke2',
    title: '¡Disfrútala gratis!',
    text: '',
    subtitle: 'Sin costo alguno',
  },
};

/**
 * HeroCard Component
 *
 * The HeroCard component represents a card displaying detailed information
 * about a movie, including title, release date, runtime, and overview.
 * It also includes a background image and a button to view the movie.
 *
 * @component
 * @param {HeroCardProps} props - Props for configuring the HeroCard component.
 * @param {MovieType} props.movieData - Movie data used to populate the card.
 * @param {VideoList} props.videos - List of videos related to the movie.
 * @returns {JSX.Element} - JSX element representing the HeroCard component.
 */
export function HeroCard({ movieData }: HeroCardProps): JSX.Element {
  // Destructure movieData for easier access
  const { description, whySee, image2, price, payment_type } = movieData;

  // Retrieve configuration based on payment_type
  const config: ConfigPayment =
    paymentTypeConfig[payment_type] || paymentTypeConfig['default'];

  // Destructure configuration for easy access
  const { bg, title, text = '', subtitle } = config;

  // Render the HeroCard component with movie details
  return (
    <>
      <section
        className="relative overflow-hidden w-full min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('${CDN_IMAGES_BASE_URL}${image2}')`,
        }}
      >
        <div
          className={`absolute top-16 lg:top-[4.5rem] -left-5 w-full md:w-fit max-w-xl ${bg} bg-contain bg-center bg-no-repeat`}
        >
          <div className="flex flex-col w-full pl-12 md:pr-20 py-12">
            <span className="span-xl md:text-2xl lg:text-3xl text-textColorNeutral-50 font-semibold">
              {title}
            </span>
            {payment_type ? (
              <span className="span-lg flex items-center text-textColorNeutral-50 font-medium">
                {text}
                <span className="text-3xl font-bold ml-3 mr-1">{`S/${price}`}</span>
                <span className="span-sm font-medium">(PEN)</span>
              </span>
            ) : null}
            <span className="span-md text-textColorNeutral-50 font-semibold">
              {subtitle}
            </span>
          </div>
        </div>
        <article className="w-full min-h-screen flex justify-center items-center bg-gradient-to-t from-bgPrimaryDark/80 via-bgPrimaryDark/10 to-transparent">
          <div className="grid auto-cols-fr justify-items-center items-end gap-16 w-11/12 min-h-screen py-16 lg:pt-[4.5rem] lg:pb-9">
            <WrapperPlayButton movieData={movieData} />
            <InfoSection movieData={movieData} />
          </div>
        </article>
      </section>
      <OverviewSectionSM overview={description || ''} whySeeIt={whySee || ''} />
    </>
  );
}
