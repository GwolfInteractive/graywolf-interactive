import type { ServiceOfferDef } from "@/lib/services";

type ServiceOfferChipsProps = {
  href: string;
  offers: Pick<ServiceOfferDef, "id" | "titleKey">[];
  linked?: boolean;
};

export default function ServiceOfferChips({
  href,
  offers,
  linked = false,
}: ServiceOfferChipsProps) {
  if (!offers.length) return null;

  return (
    <ul className="offer-chips">
      {offers.map((offer) => (
        <li key={offer.id}>
          {linked ? (
            <a href={`${href}#${offer.id}`} data-i18n={offer.titleKey}>
              {offer.id}
            </a>
          ) : (
            <span data-i18n={offer.titleKey}>{offer.id}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
