import { serve } from 'bun';

serve({
    fetch(request) {
        const url = new URL(request.url);

        if (url.pathname === '/') {
            return new Response('hello its ice tea', { status: 200 });
        } else if (url.pathname === '/ice-tea') {
            return new Response('ice tea is a good option', { status: 200 });
        } else {
            return new Response('404 Not-Found', { status: 404 });
        }
    },
    port: 3000,
    hostname: '127.0.0.1'
});
