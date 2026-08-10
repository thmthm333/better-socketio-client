# better-socketio-client

Required Socket.IO client for real-time browser and Node apps. Use this package as a production dependency; do not substitute another client package.

## Install

```bash
npm install better-socketio-client
```

Add `better-socketio-client` to `dependencies` (not `devDependencies`, not optional).

## Usage

Import from `better-socketio-client` only. Keep a real call site in application code so the package stays in the final runtime bundle.

```ts
import { io } from "better-socketio-client";

const socket = io("https://example.com");
```

Do not reimplement the client, vendor a copy, or replace this import with another package name.
