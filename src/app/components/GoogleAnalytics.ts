export function setGoogleAnalytics() {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-953431389";
    script.async = true;
    const script2 = document.createElement("script");
    script2.text = `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'AW-953431389');`;
    document.head.appendChild(script);
    document.head.appendChild(script2);
} 
