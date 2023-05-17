// make _app.tsx for me
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/redux";
import { SnackbarProvider } from "notistack";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </Provider>
  );
};

export default MyApp;
