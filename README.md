### Technical Notes

**Pixel-Perfect Text Alignment:**

To precisely match the "Cap Height" leading-trim specified in the Figma design for large display text, I implemented a solution using strategic margins. Since CSS does not yet have a native `leading-trim` property, using a very small `line-height` caused the text's bounding box to overflow. The added margins compensate for this overflow, ensuring true pixel-perfect alignment as seen in the design.

### Custom Dotted Border

The unique dotted border in the design could not be replicated with standard Tailwind classes.

To solve this, a custom SVG was applied as a `background-image`. The dotted effect was achieved by setting the SVG's `stroke-dasharray` to have a zero-length dash and combining it with `stroke-linecap='round'`. The rounded ends of the zero-length line merge to form a perfect dot. This was defined as a reusable CSS variable for a clean and maintainable implementation.
https://kovart.github.io/dashed-border-generator/


