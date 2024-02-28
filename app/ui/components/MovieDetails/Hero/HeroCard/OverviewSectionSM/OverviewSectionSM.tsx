import { OverviewSectionProps } from '../HeroCard.model';

export function OverviewSectionSM({
  overview,
  whySeeIt,
}: OverviewSectionProps): JSX.Element {
  return (
    <section className="md:hidden w-full bg-dark-100">
      <div className="flex flex-col items-center gap-4 w-11/12 mx-auto py-8 ">
        <article className="w-full">
          <span className="span-base font-bold text-textColorNeutral-700">
            Sinopsis
          </span>
          <p className="paragraph-sm font-medium text-textColorNeutral-600">
            {overview}
          </p>
        </article>
        <article className="w-full">
          <span className="span-base font-bold text-textColorNeutral-700">
            Por qué verla
          </span>
          <p className="paragraph-sm font-medium text-textColorNeutral-600">
            {whySeeIt}
          </p>
        </article>
      </div>
    </section>
  );
}
