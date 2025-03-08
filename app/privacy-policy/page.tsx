"use client";

import { Breadcrumb } from "@/components/breadcrumb";
import { Header } from "@/components/header";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white dark:bg-black">
      <Header />

      <section className="container mx-auto max-w-4xl px-4 py-12">
        <Breadcrumb items={[{ label: "Privacy Policy" }]} className="mb-8" />

        <div className="space-y-8">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-black dark:text-white md:text-5xl">
              Policy
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Our legal notices, privacy statement, and terms of use.
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="border-b border-gray-200 pb-2 text-2xl font-bold dark:border-gray-800">
              Legal Notice
            </h2>

            <h3 className="mt-8 text-xl font-bold">Trademarks and Copyright</h3>
            <p>
              All trademarks presented on this web site are property of their
              respective owners. Copyright: © Drinkbee. All rights reserved.
            </p>

            <h3 className="mt-8 text-xl font-bold">Submissions</h3>
            <p>
              Please note that any submissions to Drinkbee of any nature
              whatsoever, whether through this site or otherwise, and whether
              via electronic or other means don't generate or produce any legal
              or real obligations and liabilities to/for Drinkbee (for example
              obligations to submitter). By making a submission to Drinkbee, you
              hereby agree to all of the foregoing.
            </p>

            <h2 className="mt-12 border-b border-gray-200 pb-2 text-2xl font-bold dark:border-gray-800">
              Privacy Statement
            </h2>

            <h3 className="mt-8 text-xl font-bold">Introduction</h3>
            <p>
              This Privacy Statement applies to this Drinkbee site and all
              official and by Drinkbee made websites and web pages and Drinkbee
              related products and services.
            </p>
            <p>
              Drinkbee respect the privacy rights of our online visitors and are
              committed to protecting the personal information collected about
              you.
            </p>

            <h3 className="mt-8 text-xl font-bold">Warning</h3>
            <p>
              Please note that this Privacy Statement applies to all information
              submitted and collected online through the websites and web pages
              mentioned above, and it also applies to information that may be
              collected by Drinkbee in other online ways or offline. However,
              this Privacy Statement doesn't apply websites and web pages
              started and/or maintained by other companies or organizations.
              Drinkbee cannot and does not guarantee the security of any
              personal information disclosed on those sites.
            </p>
            <p>
              By using and submitting personal information to Drinkbee, you
              signify your assent to this Privacy Statement. If you do not agree
              to this Privacy Statement, please do not visit our websites and
              web pages and do not use our products or product features where an
              customer registration (account registration) is required. We
              reserve the right to make changes to this Privacy Statement at
              anytime. Your continued visits to our websites and web pages
              and/or using our products and product features where customer
              registrations (account registration) is require will signify your
              acceptance of these changes. Drinkbee reserves rights to use your
              submitted email address to keep you informed about Drinkbee
              products, updates, news and promotional activities, such as sales
              and give-aways (but we won't do it).
            </p>
            <p>
              Drinkbee only collects personal information from you on a
              voluntary basis when you submit this personal information. The
              exception is information automatically collected by our domain
              server and its utilities, such as country, operating system, web
              browser and similar.
            </p>

            <h3 className="mt-8 text-xl font-bold">Outer Links</h3>
            <p>
              You should be aware that while you are on the Drinkbee websites
              and web pages you could be directed to other websites and web
              pages that are beyond our control. Therefore we recommend that you
              read their privacy statement/policy before you use their
              site/pages or submit any of your personal information. Drinkbee
              does not guarantee for any such web sites and / or links. You are
              surfing at your of responsibility and risk.
            </p>

            <h3 className="mt-8 text-xl font-bold">Collecting Information</h3>
            <p>
              The types of information collected from you on a voluntary basis
              will vary depending on the activity. The information we collect
              may include personal information such as your first and/or last
              name, e-mail address, phone number, mailing address, and for those
              purchasing a product/service online, credit card and shipping
              information. In addition, we may collect demographic information
              such as your age or date of birth, gender, occupation, interests,
              favourite styles of gaming and the systems or games you own or
              plan to buy. If demographic information is collected for an
              activity that also requires personal information, we may combine
              the demographic information with your personal information. On
              pages where you can send content to a third party; although we ask
              for a recipient's email address, usually we won't store this
              information, but rather will delete it from our system after the
              message is sent.
            </p>
            <p>
              Whatever the activity may be and no matter how we use your
              information, we will only collect information to the extent deemed
              reasonably necessary to fulfil your requests and our legitimate
              business objectives.
            </p>
            <p>
              Drinkbee provide on its websites and web pages e-mail addresses to
              which visitors can send us questions or comments, or which
              visitors can use to request customer support. In the process of
              receiving and responding to such requests, we may collect personal
              information about you, such as your e-mail address or any other
              personal data contained in the body of your e-mail message. By
              allowing you to send us these requests, we are not attempting to
              solicit personal information from you. We only use the information
              for the purpose of responding to your questions and/or comments or
              to provide customer support. In most cases your message will be
              kept on file for our records or for quality control purposes.
            </p>
            <p>
              Drinkbee may use cookies on its website. A "cookie" is a small bit
              of record-keeping information that websites often store on a
              user's computer. Cookies generally do not include people's names,
              e-mail addresses, or other information that is personally
              identifiable; they are typically used to quickly identify a user's
              computer and to "remember" things about the user's visit (such as
              the products placed in your shopping cart). You can always disable
              cookies or set your browser to alert you when cookies are being
              sent to your computer.
            </p>
            <p>
              Drinkbee may also keep track of Internet Protocol (IP) addresses
              for safety and security reasons. An IP address is a number that is
              used by computers on the network to identify your computer every
              time you log on to the Internet.
            </p>

            <h3 className="mt-8 text-xl font-bold">
              Sharing of Collected Information
            </h3>
            <p>
              Drinkbee does not share your personal information with any third
              parties, except as required by law enforcement or other government
              officials in connection with an investigation of fraud,
              intellectual property infringements, or other activity that is
              illegal or may expose you or us to legal liability.
            </p>

            <h3 className="mt-8 text-xl font-bold">
              Reviews, Corrections and Complaints
            </h3>
            <p>
              If for any reason you wish to review or correct the personal
              information collected about you, or you have a complaint, please{" "}
              <Link href="/kontakta-oss" className="underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
