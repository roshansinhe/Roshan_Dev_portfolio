import React from 'react';

export default function PrivacyPolicy() {
  const lastUpdated = "September 28, 2026";

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-slate-300">
      <div className="border-b border-slate-800 pb-8 mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
          Privacy Policy for FindMyLocation
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Last updated: {lastUpdated}
        </p>
      </div>

      <div className="space-y-8 text-base leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-slate-100 mb-3">1. Overview</h2>
          <p>
            FindMyLocation (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how location data and advertising identifiers are handled when you use the FindMyLocation iOS application.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-100 mb-3">2. Location Data</h2>
          <p>
            FindMyLocation requires access to your device&apos;s Location Services to retrieve your current GPS coordinates (latitude and longitude) and reverse-geocode them into a human-readable street address via Apple MapKit.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-slate-400">
            <li>Location data is requested strictly <strong>on-demand</strong> when you tap the location request button.</li>
            <li>Your location data is processed locally on your device and is <strong>never stored, logged, or transmitted to any external server owned by us</strong>.</li>
            <li>Location details are only shared externally when you actively choose to use the native iOS Share Sheet to send your details to third parties.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-100 mb-3">3. Third-Party Advertising (Google AdMob)</h2>
          <p>
            FindMyLocation uses Google AdMob to display banner advertisements. Google AdMob may collect and process certain non-personal diagnostic and advertising data in accordance with Google&apos;s Privacy Policy.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-slate-400">
            <li>AdMob may use Advertising Identifiers (IDFA) or device identifiers to serve non-personalized or personalized ads depending on your iOS privacy settings.</li>
            <li>We do not merge location data fetched inside the app with any advertising profiles.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-100 mb-3">4. Data Retention and Security</h2>
          <p>
            Because FindMyLocation does not collect or transmit personal user data to external servers, we do not retain any of your personal information or location history.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-100 mb-3">5. Children&apos;s Privacy</h2>
          <p>
            FindMyLocation does not knowingly collect or solicit personal information from children under the age of 13.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-100 mb-3">6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>
        </section>

        <section className="pt-6 border-t border-slate-800">
          <h2 className="text-xl font-semibold text-slate-100 mb-3">7. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy, please reach out via the contact section on our main portfolio page.
          </p>
        </section>
      </div>
    </main>
  );
}