# SSR error handling

## Development server

`npm run dev:ssr`

## How to trigger errors and handle them in various strategies

Request the URL. The prefix of the URL controls how the error is handled, and suffix controls where the error is thrown. Examples:

- `curl http://localhost:4200/handler_propagate/errorIn_asyncRender` to trigger an error in async render and handle it in a custom `ErrorHandler` by propagating it to the client via a custom injection token `PROPAGATE_ERROR_TO_CLIENT`.
- `curl http://localhost:4200/handler_rethrow/errorIn_asyncRender` to trigger an error in async render and handle it in custom `ErrorHandler` by re-throwing it.
- `curl http://localhost:4200/handler_default/errorIn_syncConstrucor` to trigger an error in synchronous constructor of the `AppComponent` and handle it in the default `ErrorHandler` by just logging it to the console.
- `curl http://localhost:4200/handler_default/errorIn_appInitializer` to trigger an error in `APP_INITIALIZER` and handle it in the default `ErrorHandler` by just logging it to the console.

### Throwing errors

| URL suffix               | Where error is thrown       |
| ------------------------ | --------------------------- |
| /errorIn_appInitializer  | APP_INITIALIZER             |
| /errorIn_syncConstructor | constructor of AppComponent |
| /errorIn_syncRender      | ngOnInit of AppComponent    |
| /errorIn_asyncRender     | constructor of AppComponent |

### Handling errors

| URL prefix         | How error is handled in ErrorHandler                                                   | Problems                           |
| ------------------ | -------------------------------------------------------------------------------------- | ---------------------------------- |
| /handler_propagate | propagate error to the client via a custom injection token `PROPAGATE_ERROR_TO_CLIENT` |                                    |
| /handler_rethrow   | re-throw error                                                                         | async errors cause crashing NodeJS |
| /handler_default   | (default Angular ErrorHandler) just log to console                                     |                                    |
