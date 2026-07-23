import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TailwiseSupport() {
  useEffect(() => {
    document.title = "Support — Tailwise";
    document.documentElement.classList.add("native-cursor");
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "Support and Help Center for Tailwise for iOS. Answers to frequently asked questions and direct email support."
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
          Help center
        </div>
        <h1 className="font-['Fraunces'] font-medium text-[38px] leading-[1.15] text-[#0A2E23] mb-1.5">
          Support
        </h1>
        <p className="font-['IBM_Plex_Mono'] text-[12.5px] text-[#5B7B70] mb-7">
          Tailwise for iOS
        </p>

        <p className="text-[17px] text-[#255243] leading-relaxed mb-6">
          Here to help with anything you run into while setting up or using Tailwise. Most questions below cover the things people ask us most.
        </p>

        {/* Contact Card */}
        <div className="bg-white border border-[#D1E2DB] rounded-xl p-[20px_22px] my-5 shadow-[0_2px_8px_rgba(0,168,119,0.04)]">
          <div className="font-['IBM_Plex_Mono'] text-[11.5px] uppercase tracking-[0.06em] text-[#00A877] font-medium mb-2">
            Contact
          </div>
          <p className="text-[#223831] leading-relaxed mb-4">
            <a
              href="mailto:h4mzashehzad@gmail.com"
              className="text-[#00A877] font-medium underline underline-offset-2 hover:text-[#00845D] transition-colors"
            >
              Email us directly
            </a>{" "}
            and we'll get back to you, usually within 1–2 business days.
          </p>
          <div className="flex gap-3 flex-wrap mt-2">
            <a
              href="mailto:h4mzashehzad@gmail.com"
              className="inline-flex items-center gap-2 font-medium text-[14.5px] text-white bg-[#00A877] hover:bg-[#00845D] px-4 py-2.5 rounded-lg transition-all shadow-sm hover:shadow"
            >
              Email support
            </a>
            <Link
              to="/tailwise/privacy"
              className="inline-flex items-center gap-2 font-medium text-[14.5px] text-[#0A2E23] bg-transparent border border-[#D1E2DB] hover:border-[#00A877] hover:text-[#00A877] px-4 py-2.5 rounded-lg transition-all"
            >
              Privacy policy
            </Link>
          </div>
        </div>

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

        {/* FAQ Section */}
        <section className="my-10">
          <h2 className="font-['Fraunces'] font-medium text-[22px] text-[#0A2E23] mb-3">
            Frequently asked questions
          </h2>

          <div className="divide-y divide-[#D1E2DB]">
            <div className="py-4">
              <h3 className="font-semibold text-[16px] text-[#0A2E23] mb-1.5">
                Do I need to create an account to use Tailwise?
              </h3>
              <p className="text-[#255243] leading-relaxed">
                No. Tailwise works fully offline with no login or account required. Just open the app and create your first pet profile.
              </p>
            </div>

            <div className="py-4">
              <h3 className="font-semibold text-[16px] text-[#0A2E23] mb-1.5">
                Where is my pet's data stored?
              </h3>
              <p className="text-[#255243] leading-relaxed">
                Entirely on your device. Tailwise doesn't upload your pet's information to a server. If you have iCloud backups turned on for your iPhone, your Tailwise data is included the same way any other app's data is, through Apple's own backup system.
              </p>
            </div>

            <div className="py-4">
              <h3 className="font-semibold text-[16px] text-[#0A2E23] mb-1.5">
                What happens to my data if I delete the app?
              </h3>
              <p className="text-[#255243] leading-relaxed">
                Local data is removed from your device when you delete the app. If you'd like to keep a copy first, use the export feature in Settings to save a backup before uninstalling.
              </p>
            </div>

            <div className="py-4">
              <h3 className="font-semibold text-[16px] text-[#0A2E23] mb-1.5">
                How do I back up or transfer my pet's records?
              </h3>
              <p className="text-[#255243] leading-relaxed">
                Go to <strong className="text-[#0A2E23] font-semibold">Settings → Export Data</strong> to save a backup of all your pets' records and photos. You can save this to Files, AirDrop it, or send it to yourself for safekeeping.
              </p>
            </div>

            <div className="py-4">
              <h3 className="font-semibold text-[16px] text-[#0A2E23] mb-1.5">
                I'm not getting reminder notifications. What should I check?
              </h3>
              <p className="text-[#255243] leading-relaxed">
                Open <strong className="text-[#0A2E23] font-semibold">iOS Settings → Tailwise → Notifications</strong> and confirm notifications are allowed. Also check that the medication or vaccination entry in the app has an active schedule set — reminders are generated from the specific dates and frequencies you enter.
              </p>
            </div>

            <div className="py-4">
              <h3 className="font-semibold text-[16px] text-[#0A2E23] mb-1.5">
                Can I use Tailwise for more than one pet?
              </h3>
              <p className="text-[#255243] leading-relaxed">
                Yes. Tailwise supports multiple pet profiles in one app. Use the pet switcher on the home screen to move between them.
              </p>
            </div>

            <div className="py-4">
              <h3 className="font-semibold text-[16px] text-[#0A2E23] mb-1.5">
                Are the vaccination schedules and medication information medical advice?
              </h3>
              <p className="text-[#255243] leading-relaxed">
                No. Tailwise includes general reference information to help you keep organized, informed records, but it isn't a substitute for guidance from your veterinarian. Always confirm your pet's specific schedule and dosing with your vet.
              </p>
            </div>

            <div className="py-4">
              <h3 className="font-semibold text-[16px] text-[#0A2E23] mb-1.5">
                I found a bug or have a feature request.
              </h3>
              <p className="text-[#255243] leading-relaxed">
                We'd love to hear it.{" "}
                <a
                  href="mailto:h4mzashehzad@gmail.com"
                  className="text-[#00A877] underline underline-offset-2 hover:text-[#00845D] transition-colors"
                >
                  Send us an email
                </a>{" "}
                with as much detail as you can — what you were doing, what you expected, and what happened instead.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-6 border-t border-[#D1E2DB] text-[13px] text-[#5B7B70] flex justify-between flex-wrap gap-2">
          <span>© {new Date().getFullYear()} Tailwise</span>
          <span>
            <Link
              to="/tailwise/privacy"
              className="text-[#416B5E] hover:text-[#00A877] transition-colors underline underline-offset-2"
            >
              Privacy policy
            </Link>
          </span>
        </footer>
      </div>
    </div>
  );
}
