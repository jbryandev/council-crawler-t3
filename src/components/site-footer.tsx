import Link from 'next/link';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t py-6 md:py-0'>
      <div className='container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
        <div className='flex items-center gap-4 md:flex-row md:gap-2 md:px-0'>
          <p className='text-center text-sm leading-loose text-muted-foreground md:text-left'>
            Built by{' '}
            <Link href='#' className='font-medium underline underline-offset-4'>
              James Bryan
            </Link>
            . Copyright &copy; {currentYear}.
          </p>
        </div>
      </div>
    </footer>
  );
}
