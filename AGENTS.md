<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep portfolio entries aligned with verified client project sources and associate photographs with their actual project; unrelated images must not imply completed work.
- Reference downloaded client photographs through Lovable Asset pointers to keep media out of the repository.
- Keep brand fonts in global CSS tokens and load remote font stylesheets from the root head; the display-font fallback remains until a licensed webfont is supplied.
- Use the shared Button variants for WhatsApp and outlined calls to action so contact controls stay consistent across pages.
- Every page renders through `SiteLayout` (Astra-style wrapper ids/classes) and styles elements with the LWC global classes in src/styles.css; the LWC block is unlayered, so it overrides Tailwind utilities — WhatsApp buttons use `!important` variant colours to stay green.
