import { LinkItemType } from 'fumadocs-ui/layouts/docs';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const linkItems: LinkItemType[] = [
  // {
  //   icon: <AlbumIcon />,
  //   text: 'Blog',
  //   url: '/blog',
  //   active: 'nested-url',
  // },
  {
    type: 'icon',
    url: 'https://github.com/aletheia/wind-network',
    text: 'Github',
    icon: (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    external: true,
  },
];

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Wind Network Logo"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16 13H8.5C7.67 13 7 12.33 7 11.5C7 10.67 7.67 10 8.5 10H17.5C18.33 10 19 9.33 19 8.5C19 7.67 18.33 7 17.5 7H8C6.34 7 5 8.34 5 10C5 11.66 6.34 13 8 13H15.5C16.33 13 17 13.67 17 14.5C17 15.33 16.33 16 15.5 16H6.5C5.67 16 5 16.67 5 17.5C5 18.33 5.67 19 6.5 19H16C17.66 19 19 17.66 19 16C19 14.34 17.66 13 16 13Z"
            fill="currentColor"
          />
        </svg>
        <span className="font-medium in-[header]:text-[15px]">Wind Network</span>
      </>
    ),
    transparentMode: 'top',
  },
  links: [...linkItems],
};
