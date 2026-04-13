import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale } from "@/lib/i18n/config";
import type { Locale } from "@/types/dictionary";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { TrustCarousel } from "@/components/landing/trust-carousel";
import { Services } from "@/components/landing/services";
import { WhyUs } from "@/components/landing/why-us";
import { Portfolio } from "@/components/landing/portfolio";
import { Team } from "@/components/landing/team";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    notFound();
  }

  const locale: Locale = raw;
  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar dict={dict.nav} locale={locale} />
      <main id="content">
        <Hero dict={dict.hero} locale={locale} />
        <TrustCarousel dict={dict.trust} />
        <Services dict={dict.services} />
        <WhyUs dict={dict.whyUs} />
        <Portfolio dict={dict.portfolio} />
        <Team dict={dict.team} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
