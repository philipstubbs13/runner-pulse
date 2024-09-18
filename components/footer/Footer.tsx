import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { Routes } from "@/utils/router/Routes.constants";
import { FooterQuickLink } from "./footer-quick-link/FooterQuickLink";
import { FooterSocialLink } from "./footer-social-link/FooterSocialLink";
import { GradientContainer } from "../gradient-container/GradientContainer";

export const Footer = () => {
  return (
    <footer>
      <GradientContainer>
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Runner Pulse</h3>
              <p className="text-sm">
                Track your running journey and connect with fellow runners.
              </p>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-md font-semibold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li>
                    <FooterQuickLink
                      href={Routes.Results}
                      label="Personal Results"
                    />
                  </li>
                  <li>
                    <FooterQuickLink
                      href={Routes.Races}
                      label="Upcoming Races"
                    />
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li>
                    <FooterQuickLink
                      href={Routes.Gallery}
                      label="Photo Gallery"
                    />
                  </li>
                  <li>
                    <FooterQuickLink
                      href={Routes.ManagePhotos}
                      label="Manage Photos"
                    />
                  </li>
                  <li>
                    <FooterQuickLink
                      href={Routes.ManageRaceDistances}
                      label="Manage Race Distances"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <FooterSocialLink
                  href="https://www.facebook.com/phil.stubbs.13/"
                  label="Facebook"
                >
                  <Facebook size={20} />
                </FooterSocialLink>
                <FooterSocialLink
                  href="https://x.com/iamPhilStubbs"
                  label="Twitter"
                >
                  <Twitter size={20} />
                </FooterSocialLink>
                <FooterSocialLink
                  href="https://www.instagram.com/philipstubbs13/"
                  label="Instagram"
                >
                  <Instagram size={20} />
                </FooterSocialLink>
                <FooterSocialLink
                  href="mailto:philipstubbs13@gmail.com"
                  label="Email"
                >
                  <Mail size={20} />
                </FooterSocialLink>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Runner Pulse. All rights
              reserved.
            </p>
          </div>
        </div>
      </GradientContainer>
    </footer>
  );
};
