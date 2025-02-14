import '@/styles/global.css';
import type { GlobalPageProps } from '@/utils/globalPageProps';
import 'node_modules/react-modal-video/css/modal-video.css';

type Params = GlobalPageProps & {
  children: React.ReactNode;
};

export default async function RootLayout({
  children,
  params: { locale },
}: Params) {
  return (
    <html lang={locale}>
      <title>Landing page DatoCMS Starter</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Visit https://www.datocms.com/marketplace/starters for more starters"
      />
      <link rel="icon" href="/images/favicon.ico" />
      <body className={'tracking-tight antialiased'}>{children}</body>
    </html>
  );
}
