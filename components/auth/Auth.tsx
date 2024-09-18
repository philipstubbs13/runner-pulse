"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LogIn } from "lucide-react";
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
} from "next-auth/react";
import { useEffect, useState } from "react";
import { AppLogo } from "@/components/app-logo/AppLogo";
import { BuiltInProviderType } from "next-auth/providers/index";
import { GradientContainer } from "@/components/gradient-container/GradientContainer";

export const Auth = () => {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  const handleSignIn = (providerId: string): void => {
    signIn(providerId);
  };

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    setAuthProviders();
  }, []);

  return (
    <div className="container mx-auto p-4 max-w-full bg-gradient-to-br from-blue-100 to-pink-100 flex items-center justify-center h-full">
      <Card className="w-[414px] bg-white bg-opacity-90 shadow-xl">
        <GradientContainer>
          <CardHeader className=" rounded-t-lg p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              {" "}
              <AppLogo />
              <div>
                <CardTitle className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
                  Runner Pulse
                </CardTitle>
                <CardDescription className="text-center sm:text-left text-blue-100 mt-2">
                  Track your running journey
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </GradientContainer>
        <CardContent className="p-6 sm:p-8">
          <div className="space-y-4">
            <p className="text-gray-600 text-center">
              Welcome to Runner Pulse! Sign in to access your personalized
              running dashboard.
            </p>
            {providers &&
              Object.values(providers).map((provider, index) => (
                <Button
                  key={index}
                  onClick={() => handleSignIn(provider.id)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                >
                  <LogIn className="mr-2 h-5 w-5" />
                  Sign In
                </Button>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
