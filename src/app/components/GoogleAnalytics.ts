export function setGoogleAnalytics() {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-P700HVW2G1";
    script.async = true;
    const script2 = document.createElement("script");
    script2.text = `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-P700HVW2G1');`;
    document.head.appendChild(script);
    document.head.appendChild(script2);
}
