import React, { useEffect, useRef } from 'react';

interface PreviewProps {
  code: string;
}

const html = `
<html>
  <head></head>

  <body>
    <div id="root"></div>

    <script>
      window.addEventListener('message', (event) => {
        try {
          eval(event.data);
        } catch(err) {
          console.error('iframe - err', err);

          const root = document.querySelector('#root');
          root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
        }
      }, false)
    </script>
  </body>
</html>
`;

const Preview: React.FC<PreviewProps> = ({ code }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    iframe.current.contentWindow.postMessage(code, '*');

    // return () => {
    //   cleanup
    // }
  }, [code]);

  return (
    <iframe
      ref={iframe}
      srcDoc={html}
      title="Code Preview"
      sandbox="allow-scripts"
    />
  );
};

export default Preview;
