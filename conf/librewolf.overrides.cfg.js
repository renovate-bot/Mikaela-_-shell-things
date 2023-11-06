// ~/.{librewolf,var/app/io.gitlab.librewolf-community/.librewolf}/librewolf.overrides.cfg

// LibreWolf override configuration, begins with samples from
// https://librewolf.net/docs/settings/
// Also incorporates some of https://aminda.eu/browser-extensions#firefox-aboutconfig

// Disable privacy.resistFingerprinting, use CanvasBlocker
// <https://addons.mozilla.org/firefox/addon/canvasblocker/> as requested
// to consider by LibreWolf documentation.
// I consider Telemetry closer to voting than spying and I have no desire to
// vote for Windows NT as the universal operating system to be supported by
// everyone or English to be the only language in the world.
// Additionally I get migraines and suffer from floaters when staring at
// bright light screen so much and it's just easier to disable this than
// continuously click around Midnight Lizard or similar.
defaultPref("privacy.resistFingerprinting", false);

// Enable letterboxing
defaultPref("privacy.resistFingerprinting.letterboxing", true);

// Stricter cross-origin policy
defaultPref("network.http.referer.XOriginPolicy", 2);

// Enable WebGL
//defaultPref("webgl.disabled", false);

// Enable Firefox accounts
defaultPref("identity.fxaccounts.enabled", true);

// Settings on what to clear on quit
// - Goal: let Element Web & co stay logged in
defaultPref("privacy.clearOnShutdown.cache", false);
defaultPref("privacy.clearOnShutdown.cookies", false);
//defaultPref("privacy.clearOnShutdown.downloads", false);
//defaultPref("privacy.clearOnShutdown.formdata", false);
defaultPref("privacy.clearOnShutdown.history", false);
defaultPref("privacy.clearOnShutdown.offlineApps", false);
defaultPref("privacy.clearOnShutdown.openWindows", false);
defaultPref("privacy.clearOnShutdown.sessions", false);
defaultPref("privacy.clearOnShutdown.siteSettings", false);

// Don't resume from crash (SSD)
defaultPref("browser.sessionstore.resume_from_crash", false);

// Stricter autoplay
defaultPref("media.autoplay.blocking_policy", 2);

// No corporate CA MITM
defaultPref("security.certerrors.mitm.auto_enable_enterprise_roots", false);

// Decrease animations
defaultPref("image.animation_mode", "once");

// Punycode
defaultPref("network.IDN_show_punycode", true);

// Enforce reader mode enabling?
defaultPref("reader.parse-on-load.force-enabled", true);

// TRR & ECH
defaultPref("network.trr.mode", 3);
defaultPref("network.trr.early-AAAA", true);
defaultPref("network.trr.uri", "https://dns11.quad9.net/dns-query");
defaultPref("network.trr.disable-ECS", false);
defaultPref("network.dns.echconfig.enabled", true);
defaultPref("network.dns.use_https_rr_as_altsvc", true);
defaultPref(
	"network.trr.excluded-domains",
	"http.badssl.com,norwegianwifi.com",
);

// Default UI scale
defaultPref("layout.css.devPixelsPerPx", "1.5");

// Keep cache on both disk & memory. This is required for
// https://github.com/JimmXinu/FanFicFare/wiki/BrowserCacheFeature
defaultPref("browser.cache.disk.enable", true);
defaultPref("browser.cache.memory.enable", true);