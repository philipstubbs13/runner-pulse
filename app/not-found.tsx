import { Routes } from "@/utils/router/Routes.constants";
import { NotFoundCard } from "@/components/not-found-card/NotFoundCard";
import { LayoutContainer } from "@/components/layout-container/LayoutContainer";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

export default function NotFound() {
  return (
    <LayoutContainer>
      <Header />
      <div className="container mx-auto p-4 bg-gradient-to-br from-green-100 to-blue-100 min-h-screen flex items-center justify-center">
        <NotFoundCard
          redirectLink={Routes.Home}
          redirectLinkLabel={"Back to Dashboard"}
          title={"Page Not Found"}
        >
          <p className="text-gray-600 mb-4">
            Oops! It looks like the page you&apos;re looking for doesn&apos;t
            exist or has been removed.
          </p>
          <p className="text-gray-600">
            Don&apos;t worry, there are plenty of other pages to explore!
          </p>
        </NotFoundCard>
      </div>
      <Footer />
    </LayoutContainer>
  );
}
