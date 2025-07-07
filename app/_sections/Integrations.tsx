/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

import Badge from "@/components/Badge";
import ScrollColumns from "@/components/ScrollColumns";

const integrations = [
  {
    name: "Figma",
    src: "/assets/integrations/figma-logo.svg",
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    src: "/assets/integrations/notion-logo.svg",
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    src: "/assets/integrations/slack-logo.svg",
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    src: "/assets/integrations/relume-logo.svg",
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    src: "/assets/integrations/framer-logo.svg",
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    src: "/assets/integrations/github-logo.svg",
    description: "GitHub is the leading platform for code collaboration.",
  },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
  return (
    <section
      id="integrations"
      className="-scroll-m-5 md:-scroll-m-11 lg:-scroll-m-20 py-30 md:py-35 xl:py-40 px-4 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <Badge label="Integrations" colour="#ff2056" className="mb-4" />
            <h2 className="text-center text-rose-600 text-2xl md:text-3xl lg:text-4xl">
              Plays well with <span className="font-bold">others</span>
            </h2>
            <p className="mt-2 text-center text-neutral-500">
              Gridfully seamlessly connects with your favourite tool, making it
              easy to plug into any workflow and collaborate across platforms.
            </p>
          </div>
          <div>
            <div className="mt-6 lg:mt-0 h-120 lg:h-200 overflow-hidden grid sm:grid-cols-2 gap-4 mask-y-from-80% mask-y-to-100%">
              <ScrollColumns
                integrations={integrations}
                className="max-w-sm mx-auto"
              />
              <ScrollColumns
                integrations={integrations.slice().reverse()}
                className="hidden sm:flex max-w-sm mx-auto"
                reverse
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
