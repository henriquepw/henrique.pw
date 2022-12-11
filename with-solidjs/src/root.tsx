// @refresh reload
import { Suspense } from 'solid-js';
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from 'solid-start';

import './styles/global.css';

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Henrique Miranda</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />

        <Link rel="preconnect" href="https://fonts.googleapis.com" />

        <Link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />

        <Link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=Space+Mono:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Body class="theme-dark">
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>

        <Scripts />
      </Body>
    </Html>
  );
}
