import Link from "next/link"
import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-8 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {siteConfig.footer.map((section) => (
            <div key={section.name} className="space-y-3">
              <h4 className="text-base font-medium">{section.name}</h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              Facebook
            </Link>
            <Link
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              Instagram
            </Link>
            <Link
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
