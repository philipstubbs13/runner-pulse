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
        <CardHeader className="bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-t-lg">
          <CardTitle className="text-2xl flex items-center justify-center">
            <AppLogo />
            Runner Pulse
          </CardTitle>
          <CardDescription className="text-center text-blue-100">
            Track your running journey
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
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
          <p className="mt-4 text-center text-sm text-gray-600">
            Click to sign in or create an account
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
