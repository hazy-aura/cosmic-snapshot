import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <div className=" m-0 p-0 box-border">
  <Component {...pageProps} />
  </div>;
}
