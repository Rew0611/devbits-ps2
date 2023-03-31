// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_05c7a') && 'TradingView' in window) {
          new window.TradingView.widget({
            width:'95vw',
            symbol: "NSE:NIFTY",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "2",
            locale: "in",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: "tradingview_05c7a"
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container mt-16 pt-6' style={{marginBottom:'-2rem'}}>
      <div id='tradingview_05c7a' />
      <div className="tradingview-widget-copyright">
        <a href="https://in.tradingview.com/symbols/NSE-NIFTY/" rel="noopener" target="_blank"><span className="blue-text">NIFTY chart</span></a> by TradingView
      </div>
    </div>
  );
}
