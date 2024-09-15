import { PhotoGallery } from "@/components/photo-gallery/PhotoGallery";
import { TabCard } from "@/components/tab-card/TabCard";
import { Tab } from "@/components/tabs/Tabs.constants";

export default function GalleryPage() {
  return (
    <TabCard tab={Tab.Gallery}>
      <PhotoGallery />
    </TabCard>
  );
}
