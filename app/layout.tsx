import '@mantine/core/styles.css';
import { ScriptsBlock } from '@/shared/scripts/scriptsBlock';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '@/theme';
import '@mantine/core/styles.css';
import '@/shared/ui/global-styles/global-styles.css';

export const metadata = {
  title: 'SafeSpace App',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ScriptsBlock />
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
