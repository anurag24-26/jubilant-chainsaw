const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
const FORM = process.env.NEXT_PUBLIC_FORM_URL ?? "";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "बड़हलगंज",
  alternateName: ["Barhalganj", "Barahalganj"],
  url: SITE,
  inLanguage: ["hi", "en"],
  description: "बड़हलगंज (गोरखपुर) की दुकानें, फूड डिलीवरी, डॉक्टर, बस, कमरे और नौकरी। Coming soon.",
};

export default function Home() {
  return (
    <main className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <h1>बड़हलगंज</h1>
      <p className="soon">जल्द आ रहा है <span lang="en">· Coming Soon</span></p>

      <p className="msg">
        अगर आप अपनी पहचान (दुकान, बिज़नेस या सेवा) लिस्ट कराना चाहते हैं, तो नीचे फ़ॉर्म भरें, जिससे आपके ग्राहक आपको जान सकें।
      </p>

      {FORM ? (
        <>
          <iframe
            className="form"
            src={`${FORM}${FORM.includes("?") ? "&" : "?"}embedded=true`}
            title="बिज़नेस लिस्टिंग फ़ॉर्म"
            loading="lazy"
          >
            लोड हो रहा है…
          </iframe>
          <p><a className="open" href={FORM} target="_blank" rel="noopener">फ़ॉर्म नई विंडो में खोलें</a></p>
        </>
      ) : (
        <p className="small">फ़ॉर्म जल्द उपलब्ध होगा।</p>
      )}

      <p className="small">बड़हलगंज (गोरखपुर) के लिए फूड डिलीवरी, दुकानें, अस्पताल, बस, कमरे और नौकरी की जानकारी, एक जगह।</p>
      <p className="small">यह निजी सामुदायिक वेबसाइट है और किसी सरकारी विभाग से संबद्ध नहीं है। आपकी दी हुई जानकारी सिर्फ़ लिस्टिंग और संपर्क के लिए इस्तेमाल की जाएगी।</p>
    </main>
  );
}