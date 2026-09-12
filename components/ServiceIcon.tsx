export type ServiceIconName =
  | "portfolio"
  | "commerce"
  | "blog"
  | "corporate"
  | "webapp"
  | "platform"
  | "billing"
  | "internal"
  | "marketplace"
  | "api"
  | "consumer"
  | "ondemand"
  | "health"
  | "field"
  | "superapp"
  | "casual"
  | "midcore"
  | "multiplayer"
  | "idle"
  | "prototype";

const paths: Record<ServiceIconName, string> = {
  portfolio:
    "M4 7.5h16v11H4zM8 7.5V6h8v1.5M7 12h4M7 15h10M14 10.5h3v3h-3z",
  commerce:
    "M6 8h12l-1 10H7L6 8zM9 8V7a3 3 0 0 1 6 0v1M10 12h4",
  blog: "M6 5.5h12v13H6zM9 9h6M9 12h6M9 15h4",
  corporate:
    "M5 19V9l7-4 7 4v10M9 19v-5h6v5M10 11h.01M14 11h.01M10 14h.01",
  webapp:
    "M4.5 7h15v11h-15zM4.5 10h15M8 7.5v2.5M7 14h4M7 16.5h7",
  platform:
    "M5 16.5 12 20l7-3.5M5 12.5 12 16l7-3.5M12 4 5 7.5 12 11l7-3.5z",
  billing:
    "M5 8h14v9H5zM5 11h14M8 14.5h4M16 14.5h.01",
  internal:
    "M12 5.5v2.2M12 16.3V18.5M7.2 7.2l1.6 1.6M15.2 15.2l1.6 1.6M5.5 12h2.2M16.3 12H18.5M7.2 16.8l1.6-1.6M15.2 8.8l1.6-1.6M12 9.2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6z",
  marketplace:
    "M4.5 10 8 6.5h8L19.5 10v8.5h-15zM9 19.5v-5h6v5M8 10h8",
  api: "M8 8.5H5.5v7H8M16 8.5h2.5v7H16M10 12h4M12 10v4",
  consumer:
    "M8 4.5h8a1.5 1.5 0 0 1 1.5 1.5v12A1.5 1.5 0 0 1 16 19.5H8A1.5 1.5 0 0 1 6.5 18V6A1.5 1.5 0 0 1 8 4.5zM10 17.5h4",
  ondemand:
    "M7 5.5h10v13H7zM9.5 4.5v2M14.5 4.5v2M7 9h10M10 12.5h.01M13 12.5h.01M10 15.5h4",
  health:
    "M12 18.5s-6.5-4.2-6.5-8.2A3.6 3.6 0 0 1 12 8a3.6 3.6 0 0 1 6.5 2.3c0 4-6.5 8.2-6.5 8.2z",
  field:
    "M12 4.5a5 5 0 0 1 5 5c0 4-5 9-5 9s-5-5-5-9a5 5 0 0 1 5-5zM12 11a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2z",
  superapp:
    "M5.5 5.5h5v5h-5zM13.5 5.5h5v5h-5zM5.5 13.5h5v5h-5zM13.5 13.5h5v5h-5z",
  casual:
    "M8 8.5 12 5l4 3.5V16l-4 3.5L8 16zM12 5v14.5",
  midcore:
    "M12 4.5 18 7v5.2c0 4-2.6 6.6-6 7.8-3.4-1.2-6-3.8-6-7.8V7zM10 12.2l1.5 1.5L14.5 11",
  multiplayer:
    "M9 10a2.2 2.2 0 1 0 0-4.4A2.2 2.2 0 0 0 9 10zM15 10a2.2 2.2 0 1 0 0-4.4A2.2 2.2 0 0 0 15 10zM5.5 17.8c.4-2.4 2.1-3.8 3.5-3.8s3.1 1.4 3.5 3.8M11.5 17.8c.4-2.4 2.1-3.8 3.5-3.8s3.1 1.4 3.5 3.8",
  idle: "M7 8.5 4.5 12 7 15.5M17 8.5 19.5 12 17 15.5M9 12h6",
  prototype:
    "M8 6.5h8l3 4.2-7 8.3-7-8.3zM12 6.5v12.5M8.2 10.7h7.6",
};

export default function ServiceIcon({ name }: { name: ServiceIconName }) {
  return (
    <span className="offer-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d={paths[name]}
          stroke="currentColor"
          strokeWidth="1.55"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
