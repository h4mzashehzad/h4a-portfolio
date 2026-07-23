import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TailwisePrivacy() {
  useEffect(() => {
    document.title = "Privacy Policy — Tailwise";
    document.documentElement.classList.add("native-cursor");
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "Privacy Policy for Tailwise for iOS. Plain, simple explanation of how your data stays on your device."
    );
    if (!meta.parentNode) document.head.appendChild(meta);

    return () => {
      document.documentElement.classList.remove("native-cursor");
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F2F7F4] text-[#223831] font-sans antialiased selection:bg-[#00A877] selection:text-white">
      <div className="max-w-[680px] mx-auto px-6 pb-24 pt-0">
        {/* Header */}
        <header className="flex items-center gap-2.5 pt-8 pb-2">
          <svg
            className="w-7 h-7 flex-shrink-0"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M6 20C6 12 12 6 20 6C24 6 27 9 27 12C27 15 24 17 21 16C24 18 25 22 22 25C19 28 13 27 10 24"
              stroke="#00A877"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-['Fraunces'] font-semibold text-[19px] text-[#0A2E23] tracking-[0.2px]">
            Tailwise
          </span>
        </header>

        {/* Eyebrow & Title */}
        <div className="font-['IBM_Plex_Mono'] text-[12px] tracking-[0.06em] uppercase text-[#00A877] mt-10 mb-1.5 font-medium">
          Legal
        </div>
        <h1 className="font-['Fraunces'] font-medium text-[38px] leading-[1.15] text-[#0A2E23] mb-1.5">
          Privacy Policy
        </h1>
        <p className="font-['IBM_Plex_Mono'] text-[12.5px] text-[#5B7B70] mb-7">
          Effective date: July 23, 2026 &nbsp;·&nbsp; Applies to the Tailwise iOS app
        </p>

        <p className="text-[17px] text-[#255243] leading-relaxed mb-6">
          Tailwise is built to work fully on your device. This policy explains, plainly, what that means for your data.
        </p>

        {/* The Short Version Card */}
        <section className="my-10">
          <h2 className="font-['Fraunces'] font-medium text-[22px] text-[#0A2E23] mb-3">
            The short version
          </h2>
          <div className="bg-white border border-[#D1E2DB] rounded-xl p-[20px_22px] my-5 shadow-[0_2px_8px_rgba(0,168,119,0.04)]">
            <p className="text-[#223831] leading-relaxed mb-0">
              Tailwise does not require an account and does not send your pet's health information anywhere. Everything you enter — profiles, medical history, photos, medications, and vet visits — is stored locally on your device. We don't operate a server that receives this data, and we don't sell or share it with third parties, because we don't have access to it in the first place.
            </p>
          </div>
        </section>

        {/* Decorative Swoosh */}
        <svg
          className="w-full h-5 my-11 block"
          viewBox="0 0 632 20"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 10 C 120 2, 220 18, 316 10 C 412 2, 512 18, 632 10"
            fill="none"
            stroke="#D1E2DB"
            strokeWidth="1.4"
          />
        </svg>

        {/* Sections */}
        <div className="space-y-10">
          <section>
            <h2 className="font-['Fraunces'] font-medium text-[22px] text-[#0A2E23] mb-3">
              Information you provide
            </h2>
            <p className="text-[#223831] leading-relaxed mb-3.5">
              When you use Tailwise, you may choose to enter:
            </p>
            <ul className="list-disc pl-5 text-[#255243] leading-relaxed mb-3.5 space-y-2">
              <li>Your pet's profile details (name, species, breed, birthday, sex, weight, photo)</li>
              <li>Medical history, including conditions, allergies, medications, and dosing schedules</li>
              <li>Vaccination records and vet visit notes</li>
              <li>Symptom logs, notes, and photos or documents you attach</li>
            </ul>
            <p className="text-[#223831] leading-relaxed">
              All of this is stored in a local database on your device using Apple's standard on-device storage. If you have iCloud device backups enabled, this data is included in your regular iOS backup the same way your other app data is — through Apple's own backup system, not through Tailwise.
            </p>
          </section>

          <section>
            <h2 className="font-['Fraunces'] font-medium text-[22px] text-[#0A2E23] mb-3">
              Information we don't collect
            </h2>
            <p className="text-[#223831] leading-relaxed mb-3.5">
              Tailwise does not collect, transmit, or have access to:
            </p>
            <ul className="list-disc pl-5 text-[#255243] leading-relaxed mb-3.5 space-y-2">
              <li>Your name, email address, or any account credentials — there is no account to create</li>
              <li>Your pet's health data, photos, or documents — these never leave your device through the app</li>
              <li>Location data</li>
              <li>Advertising identifiers, and Tailwise does not display third-party ads</li>
            </ul>
            <p className="text-[#223831] leading-relaxed">
              Tailwise does not use third-party analytics or advertising SDKs at this time. If that ever changes in a future update, this policy will be updated first, and any such change will be described here in plain terms.
            </p>
          </section>

          <section>
            <h2 className="font-['Fraunces'] font-medium text-[22px] text-[#0A2E23] mb-3">
              Notifications
            </h2>
            <p className="text-[#223831] leading-relaxed">
              Tailwise schedules reminders (for example, upcoming vaccinations or medication doses) using Apple's local notification system. These reminders are calculated and scheduled entirely on your device and are not sent from a remote server.
            </p>
          </section>

          <section>
            <h2 className="font-['Fraunces'] font-medium text-[22px] text-[#0A2E23] mb-3">
              Your control over your data
            </h2>
            <p className="text-[#223831] leading-relaxed mb-3.5">
              Because everything lives on your device, you're always in control of it:
            </p>
            <ul className="list-disc pl-5 text-[#255243] leading-relaxed mb-3.5 space-y-2">
              <li>You can export your pet's records at any time from within the app for your own backup or to share with a vet or sitter</li>
              <li>Deleting the app removes its local data from your device, subject to any existing iOS backups you've made separately</li>
              <li>There is no account to delete, because none is created</li>
            </ul>
          </section>

          <section>
            <h2 className="font-['Fraunces'] font-medium text-[22px] text-[#0A2E23] mb-3">
              Children's privacy
            </h2>
            <p className="text-[#223831] leading-relaxed">
              Tailwise is not directed at children and does not knowingly collect personal information from anyone, including children, since it does not collect personal information at all in the course of normal use.
            </p>
          </section>

          <section>
            <h2 className="font-['Fraunces'] font-medium text-[22px] text-[#0A2E23] mb-3">
              Medical disclaimer
            </h2>
            <p className="text-[#223831] leading-relaxed">
              Tailwise includes general reference information about pet vaccinations, medications, and conditions to help you keep organized records. This information is provided for general guidance only and is not veterinary advice, a diagnosis, or a substitute for care from a licensed veterinarian. Always consult your vet for decisions about your pet's health.
            </p>
          </section>

          <section>
            <h2 className="font-['Fraunces'] font-medium text-[22px] text-[#0A2E23] mb-3">
              Changes to this policy
            </h2>
            <p className="text-[#223831] leading-relaxed">
              If this policy changes — for example, if a future version of Tailwise introduces an optional feature that involves data leaving your device — we'll update this page and revise the effective date above. We'll always aim to keep this as simple and honest as it is today.
            </p>
          </section>

          <section>
            <h2 className="font-['Fraunces'] font-medium text-[22px] text-[#0A2E23] mb-3">
              Contact us
            </h2>
            <p className="text-[#223831] leading-relaxed">
              Questions about this policy or how Tailwise handles your data can be sent to us{" "}
              <a
                href="mailto:h4mzashehzad@gmail.com"
                className="text-[#00A877] underline underline-offset-2 hover:text-[#00845D] transition-colors font-medium"
              >
                via email
              </a>
              .
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-6 border-t border-[#D1E2DB] text-[13px] text-[#5B7B70] flex justify-between flex-wrap gap-2">
          <span>© {new Date().getFullYear()} Tailwise</span>
          <span>
            <Link
              to="/tailwise/support"
              className="text-[#416B5E] hover:text-[#00A877] transition-colors underline underline-offset-2"
            >
              Support
            </Link>
          </span>
        </footer>
      </div>
    </div>
  );
}
