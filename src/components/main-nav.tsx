import * as React from 'react';

import { faker } from '@faker-js/faker';
import Link from 'next/link';
import Balance from 'react-wrap-balancer';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { siteConfig } from '@/config/site';
import { agencies, agendas, highlights } from '@/lib/data';
import { cn } from '@/lib/utils';

faker.seed(123);
faker.setDefaultRefDate(new Date(2023, 5, 23));

export function MainNav() {
  return (
    <div className='mr-4 hidden md:flex'>
      <Link href='/' className='mr-6 flex items-center space-x-2'>
        <Icons.logo className='h-6 w-6' />
        <span className='hidden font-bold sm:inline-block'>
          {siteConfig.name}
        </span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Agencies</NavigationMenuTrigger>
            <NavigationMenuContent className='grid gap-3 p-6 lg:w-[600px] lg:grid-cols-[.75fr_1fr] lg:pr-0'>
              <AgencyMenu />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Agendas</NavigationMenuTrigger>
            <NavigationMenuContent className='grid gap-3 p-6 lg:w-[600px] lg:grid-cols-[.75fr_1fr] lg:pr-0'>
              <AgendaMenu />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Highlights</NavigationMenuTrigger>
            <NavigationMenuContent className='p-6'>
              <HighlightMenu />
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const AgencyMenu = () => (
  <>
    <div className='row-span-1'>
      <div className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'>
        <Icons.building className='h-6 w-6' />
        <div className='mb-2 mt-4 text-lg font-medium'>Your Agencies</div>
        <Balance
          ratio={0.5}
          className='text-sm leading-tight text-muted-foreground'
        >
          Select an agency to view its agendas and highlights.
        </Balance>
      </div>
    </div>
    <ScrollArea className='h-[350px] w-[300px] rounded-md'>
      <ul>
        {agencies
          .sort((a, b) => {
            return a.name.localeCompare(b.name);
          })
          .map((agency) => (
            <ListItem
              key={agency.name}
              title={agency.name}
              href={agency.slug}
              className='mr-4'
            >
              <div className='flex items-center space-x-4'>
                <div className='flex items-center space-x-1'>
                  <Icons.file className='h-4 w-4' />
                  <span className='flex-none'>
                    {faker.number.int({ min: 1, max: 20 })} agendas
                  </span>
                </div>
                <div className='flex items-center space-x-1'>
                  <Icons.calendar className='h-4 w-4' />
                  <span className='flex-none'>
                    Last:{' '}
                    {faker.date
                      .recent({ days: 14 })
                      .toLocaleDateString('en-us')}
                  </span>
                </div>
              </div>
            </ListItem>
          ))}
      </ul>
    </ScrollArea>
  </>
);

const AgendaMenu = () => (
  <>
    <div className='row-span-1'>
      <NavigationMenuLink asChild>
        <div className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'>
          <Icons.calendar className='h-6 w-6' />
          <div className='mb-2 mt-4 text-lg font-medium'>Recent Agendas</div>
          <Balance
            ratio={0.3}
            className='text-sm leading-tight text-muted-foreground'
          >
            Select an agenda to view agenda items and highlights.
          </Balance>
          <Link href='/agendas' className='mt-4'>
            <Button variant={'ghost'} className='flex w-full items-center'>
              View all agendas
              <Icons.arrowRight className='ml-1 h-4 w-4' />
            </Button>
          </Link>
        </div>
      </NavigationMenuLink>
    </div>
    <ScrollArea className='h-[350px] w-[300px] rounded-md'>
      <ul className='pb-2'>
        {agendas
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .slice(0, 6)
          .map((agenda) => {
            const agency = agencies.find(
              (agency) => agency.id === agenda.agencyId
            );
            return (
              <ListItem
                key={agenda.id}
                title={agency?.name}
                href={agenda.url}
                className='mr-4'
              >
                <div className='flex items-center space-x-4'>
                  <div className='flex items-center space-x-1'>
                    <Icons.calendar className='h-4 w-4' />
                    <span className='flex-none'>
                      {agenda.date.toLocaleDateString('en-us')}
                    </span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <Icons.highlight className='h-4 w-4' />
                    <span className='flex-none'>
                      {faker.number.int({ min: 1, max: 20 })} highlights
                    </span>
                  </div>
                </div>
              </ListItem>
            );
          })}
      </ul>
    </ScrollArea>
  </>
);

const HighlightMenu = () => (
  <>
    <ul className='grid w-[400px] gap-3 pb-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
      {highlights.slice(-6).map((highlight) => {
        const agenda = agendas.find(
          (agenda) => agenda.id === highlight.agendaId
        );
        const agency = agencies.find(
          (agency) => agency.id === agenda?.agencyId
        );
        return (
          <HighlightListItem
            key={highlight.id}
            title={agency?.name}
            href={agenda?.url}
          >
            <p className='line-clamp-3 text-sm leading-snug text-muted-foreground'>
              {highlight.content}
            </p>
            <div className='flex items-center space-x-1 text-sm leading-snug text-muted-foreground'>
              <Icons.calendar className='h-4 w-4' />
              <span>{agenda?.date.toLocaleDateString('en-us')}</span>
            </div>
          </HighlightListItem>
        );
      })}
    </ul>
    <Link href='/highlights'>
      <Button variant={'ghost'} className='flex w-full items-center'>
        View all highlights
        <Icons.arrowRight className='ml-1 h-4 w-4' />
      </Button>
    </Link>
  </>
);

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='truncate text-sm font-medium leading-none'>
            {title}
          </div>
          <p className='line-clamp-4 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

const HighlightListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='truncate text-sm font-medium leading-none'>
            {title}
          </div>
          {children}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
HighlightListItem.displayName = 'HighlightListItem';
