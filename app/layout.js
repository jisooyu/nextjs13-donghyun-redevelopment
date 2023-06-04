import "@/styles/globals.css";

import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";

export const metadata = {
  title: "동현아파트재건축",
  description: "재건축 뉴스/정보 사이트",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          <Navbar />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);


export default RootLayout;