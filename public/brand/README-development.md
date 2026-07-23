# Milan Red Line Brand Assets v1.0

## Approved symbol

Version B: original Milan Red Line symbol with a slightly rounded arrow tip.

The internal opening, overall proportions and directional character remain unchanged.
Only the terminal point has been softened.

## Files

- `mrl-mark-version-b.svg`
- `mrl-mark-black.svg`
- `mrl-mark-white.svg`
- `mrl-logo-horizontal.svg`
- `mrl-logo-horizontal-dark.svg`
- `mrl-favicon.ico`
- `mrl-favicon-32x32.png`
- `mrl-favicon-48x48.png`
- `mrl-apple-touch-icon.png`
- `mrl-android-icon-192.png`
- `mrl-android-icon-512.png`

## Recommended project location

```text
public/
└── brand/
    ├── mrl-mark-version-b.svg
    ├── mrl-mark-black.svg
    ├── mrl-mark-white.svg
    ├── mrl-logo-horizontal.svg
    ├── mrl-logo-horizontal-dark.svg
    ├── mrl-favicon.ico
    ├── mrl-favicon-32x32.png
    ├── mrl-favicon-48x48.png
    ├── mrl-apple-touch-icon.png
    ├── mrl-android-icon-192.png
    └── mrl-android-icon-512.png
```

## Header

Use:

```text
/brand/mrl-logo-horizontal.svg
```

Recommended rendered width:

```text
desktop: 190–220 px
mobile: 155–180 px
```

Keep `height: auto` and preserve the original aspect ratio.

The logo should link to `/` and use:

```text
aria-label="Milan Red Line — Home"
```

## Icons

Suggested metadata mapping:

```text
favicon: /brand/mrl-favicon.ico
icon 32: /brand/mrl-favicon-32x32.png
icon 48: /brand/mrl-favicon-48x48.png
apple: /brand/mrl-apple-touch-icon.png
android 192: /brand/mrl-android-icon-192.png
android 512: /brand/mrl-android-icon-512.png
```

## Usage rules

- Do not alter the symbol proportions.
- Do not sharpen or further round the approved tip.
- Do not stretch the SVG.
- Use the standard logo on light backgrounds.
- Use the dark-background variant on dark surfaces.
- Do not add CSS shadows, outlines or rotations.
- Keep clear space around the logo equal to at least half the symbol height.

## QA

Check:

- desktop, tablet and mobile headers;
- browser favicon;
- Apple touch icon;
- Android/PWA icons;
- keyboard focus on the Home link;
- absence of layout shift.

Run:

```powershell
npm run lint
npx tsc --noEmit
npm run build
```
