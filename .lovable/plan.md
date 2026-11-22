# Rebuild the site on the LWC stylesheet and build rules

## 1. Add the stylesheet
- Paste the LWC block into the main stylesheet exactly as written. It goes after the existing `@import` lines, because those must come first.
- Add the nine colour variables in their own `:root` block, using colours the site already has:

| Var | Role | Current colour |
|---|---|---|
| 0 | Brand (buttons, links) | gold `oklch(0.46 0.075 79)` |
| 1 | Accent | Welsh red `oklch(0.51 0.18 29)` |
| 2 | Headings / dark sections | navy `oklch(0.19 0.035 266)` |
| 3 | Body text | slate `oklch(0.44 0.025 266)` |
| 4 | White / primary background | `oklch(0.99 0 0)` |
| 5 | Secondary background | `oklch(0.95 0.005 266)` |
| 6 | Text on brand | white `oklch(0.985 0 0)` |
| 7 | Borders | `oklch(0.86 0.014 79)` |
| 8 | Extra | dragon green `oklch(0.47 0.16 143)` |

- The nine variables reuse the existing colour values exactly. No colour changes anywhere, including the WhatsApp green.
- Point the shadcn/Tailwind colour tokens at these variables. Where a token has a colour outside the nine (for example the WhatsApp green), it keeps its current value unchanged.
- Nothing is deleted. All existing tokens and styles stay, including `brand-hero`, `brand-eyebrow`, `brand-services`, `brand-review`, the gradient and the corner shape. On the page elements, the old classes are swapped for the matching stylesheet classes, but the old definitions and decorative elements remain for the WordPress conversion.

## 2. Page structure on every page
- Add a shared `SiteLayout` component that renders `div#page.hfeed.site` > `header#masthead` > `div#content.site-content` > `.ast-container` > `#primary.content-area.primary` > `main#main.site-main` > `article.page.ast-article-single` > `div.entry-content.clear` > page sections, followed by `footer.ast-custom-footer`.
- Use it on Home, Our Work, the project detail pages, About and Contact. Use it on the 404 page too.

## 3. Header rebuild
- Use the exact nested Astra header structure, with three sections: left = logo in `.site-branding.ast-site-identity`, centre = menu in `.ast-builder-menu-1.ast-builder-menu`, right = WhatsApp button.
- Show the full menu on every screen size and let it wrap, with no JavaScript menu.

## 4. Sections and classes
- The first section on Home uses `hero-cont`. The first section on every other page uses `page-cont`. Other sections use `section-cont`, and calls to action use `cta-cont`. Each section gets a plain id (hero, services, gallery, review, contact, about, areas…).
- Headings use only the title classes (hero-/section-/page-/card-/cta-title). There is one h1 per page and headings go in order. Text uses the matching `-desc` classes, and small labels use `eyebrow`.
- Remove Tailwind padding, font size, gap and colour utilities from these elements. Every row, column and card becomes a flex container with wrapping, using container classes such as `inner-cont`, `card-cont` and `loop-cont`. Only layout utilities that the classes don't cover stay (`flex`, `flex-wrap`, widths in %/rem, `object-cover`).
- Buttons always sit in a `*-buttons` group and use `primary-button` or `secondary-button`. WhatsApp buttons keep their current green colour.
- The gallery filter becomes tabs.

## 5. Sizes
- Convert every px value in the site's own files to rem or clamp(), for example `text-[11px]` and `max-h-[560px]`. Border radius, border width and letter-spacing may stay in px.
- The shared UI library files that the site doesn't use are left alone.

## 6. Icons, lists, form
- Keep the floating button's WhatsApp icon unchanged. Replace other inline SVGs and the dot-bullet "What the job involved" list with Font Awesome 6. Load the stylesheet from the head with a link tag. Lists become rows of an icon plus a paragraph.
- Keep the existing contact form exactly as it works now, still opening WhatsApp, on Home and Contact. Only wrap it in the new structure and classes. No placeholders replace anything.

## 7. Per-page details
- Keep each page's own title, description and slug. Check that every image has alt text, and that the logo and the square favicon are separate files.

## Agreed exceptions
- The floating WhatsApp button stays exactly as it is now: same position, same colour.
- The stylesheet is pasted exactly as written, including `html { font-size: 18px }` and the rgba hover colour.
- The working WhatsApp contact form stays on Home and Contact.
- No existing feature or component is removed. The work only adds the new classes and structure around what is already there.

## Checks
- The build is clean. Playwright screenshots at mobile and desktop for every page.
- A search confirms there are no hex/rgb/hsl colours, Lucide icons or px sizes in the site's own files. The only exceptions are the allowed ones, the existing decorative styles and the stylesheet as you supplied it.
