import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "yas-cookie-consent-v1";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
};

type CookieConsentState = {
  version: 1;
  consent: "accepted_all" | "rejected_optional" | "custom";
  preferences: CookiePreferences;
  updatedAt: string;
};

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  personalization: false,
};

function isStoredConsent(value: unknown): value is CookieConsentState {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<CookieConsentState>;
  return Boolean(
    candidate.version === 1 &&
      candidate.preferences &&
      typeof candidate.preferences === "object" &&
      typeof candidate.updatedAt === "string"
  );
}

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setIsVisible(true);
        return;
      }

      const parsed: unknown = JSON.parse(raw);
      if (isStoredConsent(parsed)) {
        setIsVisible(false);
        return;
      }

      localStorage.removeItem(STORAGE_KEY);
      setIsVisible(true);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      setIsVisible(true);
    }
  }, []);

  const hasOptionalCookieEnabled = useMemo(
    () => preferences.analytics || preferences.marketing || preferences.personalization,
    [preferences]
  );

  const saveConsent = (consent: CookieConsentState["consent"], nextPreferences: CookiePreferences) => {
    const payload: CookieConsentState = {
      version: 1,
      consent,
      preferences: nextPreferences,
      updatedAt: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    setIsVisible(false);
    setIsSettingsOpen(false);
  };

  const handleAcceptAll = () => {
    saveConsent("accepted_all", {
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true,
    });
  };

  const handleRejectOptional = () => {
    saveConsent("rejected_optional", {
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false,
    });
  };

  const handleSavePreferences = () => {
    saveConsent(hasOptionalCookieEnabled ? "custom" : "rejected_optional", preferences);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          role="dialog"
          aria-live="polite"
          aria-label="Çerez onayı"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-0 z-40 px-3 pb-3 sm:px-6 sm:pb-4"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <div className="mx-auto w-full max-w-6xl rounded-xl border border-[#CFA670]/25 bg-[#0D0D0D]/98 shadow-[0_-10px_40px_rgba(0,0,0,0.45)] backdrop-blur-sm">
            <div className="flex flex-col gap-4 px-4 py-3 sm:px-6 sm:py-4 md:flex-row md:items-center md:justify-between">
              <div className="pr-16 text-sm leading-relaxed text-[#F8FAFC]/82 md:pr-6">
                Bu web sitesi, kullanıcı deneyimini iyileştirmek için çerezler kullanır.
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:flex-nowrap">
                <button
                  type="button"
                  onClick={() => setIsSettingsOpen((prev) => !prev)}
                  className="rounded-md border border-[#CFA670]/35 px-3 py-2 text-xs uppercase tracking-[0.08em] text-[#F8FAFC]/85 transition-colors hover:border-[#CFA670]/70 hover:text-[#F8FAFC]"
                >
                  Ayarlar
                </button>
                <button
                  type="button"
                  onClick={handleRejectOptional}
                  className="rounded-md border border-[#F8FAFC]/20 px-3 py-2 text-xs uppercase tracking-[0.08em] text-[#F8FAFC]/80 transition-colors hover:border-[#F8FAFC]/40 hover:text-[#F8FAFC]"
                >
                  Reddet
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="rounded-md bg-[#CFA670] px-3 py-2 text-xs font-medium uppercase tracking-[0.08em] text-[#0A0A0A] transition-all hover:bg-[#dab682]"
                >
                  Kabul Et
                </button>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {isSettingsOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="overflow-hidden border-t border-[#CFA670]/20"
                >
                  <div className="grid grid-cols-1 gap-3 px-4 py-3 sm:grid-cols-2 sm:px-6">
                    <label className="flex items-center justify-between rounded-lg bg-[#141414] px-3 py-2 text-sm">
                      <span className="text-[#F8FAFC]/75">Zorunlu Çerezler</span>
                      <span className="text-xs uppercase tracking-[0.08em] text-[#CFA670]">Aktif</span>
                    </label>

                    <label className="flex items-center justify-between rounded-lg bg-[#141414] px-3 py-2 text-sm">
                      <span className="text-[#F8FAFC]/75">Analitik</span>
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) =>
                          setPreferences((prev) => ({
                            ...prev,
                            analytics: e.target.checked,
                          }))
                        }
                        className="h-4 w-4 accent-[#CFA670]"
                      />
                    </label>

                    <label className="flex items-center justify-between rounded-lg bg-[#141414] px-3 py-2 text-sm">
                      <span className="text-[#F8FAFC]/75">Pazarlama</span>
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) =>
                          setPreferences((prev) => ({
                            ...prev,
                            marketing: e.target.checked,
                          }))
                        }
                        className="h-4 w-4 accent-[#CFA670]"
                      />
                    </label>

                    <label className="flex items-center justify-between rounded-lg bg-[#141414] px-3 py-2 text-sm">
                      <span className="text-[#F8FAFC]/75">Kişiselleştirme</span>
                      <input
                        type="checkbox"
                        checked={preferences.personalization}
                        onChange={(e) =>
                          setPreferences((prev) => ({
                            ...prev,
                            personalization: e.target.checked,
                          }))
                        }
                        className="h-4 w-4 accent-[#CFA670]"
                      />
                    </label>
                  </div>

                  <div className="flex justify-end px-4 pb-4 sm:px-6">
                    <button
                      type="button"
                      onClick={handleSavePreferences}
                      className="rounded-md border border-[#CFA670]/35 px-3 py-2 text-xs uppercase tracking-[0.08em] text-[#F8FAFC]/90 transition-colors hover:border-[#CFA670]/70"
                    >
                      Tercihleri Kaydet
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
