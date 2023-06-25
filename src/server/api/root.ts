import { agencyRouter } from '@/server/api/routers/agency';
import { agendaRouter } from '@/server/api/routers/agenda';
import { exampleRouter } from '@/server/api/routers/example';
import { createTRPCRouter } from '@/server/api/trpc';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  agency: agencyRouter,
  agenda: agendaRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
