### Technical Notes

**Pixel-Perfect Text Alignment:**

To precisely match the "Cap Height" leading-trim specified in the Figma design for large display text, I implemented a solution using strategic margins. Since CSS does not yet have a native `leading-trim` property, using a very small `line-height` caused the text's bounding box to overflow. The added margins compensate for this overflow, ensuring true pixel-perfect alignment as seen in the design.
