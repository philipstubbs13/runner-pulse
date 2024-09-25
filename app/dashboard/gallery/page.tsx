import { PhotoGallery } from "@/components/photo-gallery/PhotoGallery";
import { TabCard } from "@/components/tab-card/TabCard";
import { Tabs } from "@/components/tabs/Tabs";
import { Tab } from "@/components/tabs/Tabs.constants";

export default function GalleryPage() {
  return (
    <Tabs>
      <TabCard tab={Tab.Gallery}>
        <PhotoGallery />
      </TabCard>
    </Tabs>
  );
}
