import { SiteFooter } from './site-footer';
import { SiteHeader } from './site-header';
import { TailwindIndicator } from './tailwind-indicator';
import { ThemeProvider } from './theme-provider';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <div className='relative flex min-h-screen flex-col'>
        <SiteHeader />
        <div className='flex-1'>{children}</div>
        <SiteFooter />
      </div>
      <TailwindIndicator />
    </ThemeProvider>
  );
}
