# @pedaki/mailer

### Usage

```ts
import { sendEmail, EmailTemplate } from "@pedaki/mailer";

await sendEmail("test@mail.com", EmailTemplate, {name: "test"});
```

### Requirements

- Add `RESEND_API_KEY` to your `.env` file
  - Not required for development as we are using `preview-email`

## Contributing

Start the preview environment with `pnpm dev` and updates the templates in `./src/templates`

In your IDE mark the .react-email folder as ignored.


## Known issues

There is currently multiples issues with `react-mailer`:

- When starting the dev server, you'll have to manually install the dependencies inside the `.react-email` folder.

  ```bash
  cd packages/mailer/.react-email && yarn install --frozen-lockfile
  ```

- When killing the dev-server sometimes, the server stays open, so you'll have to kill the app manually.

- As we are using a custom server, we can't use typescript aliases, so we have to use relative imports.

