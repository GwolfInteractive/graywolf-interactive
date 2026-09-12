import HomePage from "@/components/HomePage";
import {
  getAnnouncements,
  getProjects,
  getServices,
} from "@/lib/content";

export default function Page() {
  return (
    <HomePage
      services={getServices()}
      projects={getProjects()}
      announcements={getAnnouncements()}
    />
  );
}
