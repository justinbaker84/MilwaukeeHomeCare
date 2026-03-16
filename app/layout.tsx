import type { Metadata } from "next";
import RootLayoutClient from "./layout.client";

export const metadata: Metadata = {
  title: "Milwaukee Home Care | In-Home Senior Care Services",
  description: "Learn about home care services for seniors in Milwaukee, Wisconsin. Compassionate in-home care for personal assistance, companionship, and specialized dementia care.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
}
