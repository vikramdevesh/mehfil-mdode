# Mehfil Mode — cover art prompts (Gemini / any image model)

Paste the **style block** once at the top of every prompt (or set it as a reusable "Gem" instruction),
then add the playlist-specific scene. Generate **square (1:1)**, at least 1600×1600.

Save each image as `public/covers/<slug>.webp` (or .jpg/.png). The site picks it up automatically on the
next build; any playlist without a file keeps its generated gradient cover.

> Keep it legal and clean: no text, no logos, no real celebrities or recognisable people, no film
> posters or album-art lookalikes. The site overlays the title itself, so leave the **bottom-left
> third calm and fairly dark**.

---

## Shared style block (paste first)

```
Indie poster illustration, flat shapes with soft gradients and subtle risograph grain, slightly
textured paper feel, cinematic dusk lighting, modern Indian street-life aesthetic, warm nostalgic mood.
Limited palette, deep navy/charcoal shadows with glowing accents. Faceless or back-turned figures only,
no recognisable people. No text, no letters, no logos, no watermark. Square 1:1 composition,
main subject in the upper-right two-thirds, bottom-left third darker and uncluttered for a title overlay.
```

---

## The 15 playlists

### 1. `salon-classics` — Salon Classics · Naai Ki Dukaan
```
A tiny old-school neighbourhood barber shop at evening: a red-white-blue barber pole glowing outside,
a vintage transistor radio on a shelf, a cracked mirror with warm bulbs, a single leather barber chair,
scissors and comb on the counter, a calendar on a teal wall. Palette: royal blue, cobalt, warm amber glow.
```

### 2. `highway-anthems` — Highway Anthems · Truck Aur Highway
```
A colourfully painted Indian highway truck with tassels and hand-painted floral borders, seen from behind,
driving into a burning orange sunset on an empty two-lane highway, a roadside dhaba with charpais and
string lights in the distance, long shadows. Palette: deep charcoal, burnt orange, golden yellow.
```

### 3. `chai-tapri-mix` — Chai Tapri Mix · Chai Ki Tapri
```
A roadside chai tapri at golden hour: steaming kulhads on a wooden bench, a dented kettle on a small stove,
glass jars of biscuits, a hanging bulb, rising steam swirls, friends' silhouettes in the background
laughing. Palette: dark brown, terracotta, honey amber.
```

### 4. `bus-wale-hits` — Bus Wale Hits · Desi Bus Aur Local Safar
```
View from a window seat inside an old Indian state transport bus: green-yellow paint, a rail with a
hand-written route board, rain-streaked glass showing passing fields and electric poles, a pair of shared
wired earphones hanging from the seat. Palette: bottle green, leaf green, bright mustard yellow.
```

### 5. `full-volume-mode` — Full Volume Mode · Desi Swag
```
A stack of big loudspeakers on the back of an open jeep at night in a village lane, visible sound waves
rippling out, dust in the air, bold red and orange stage lights, motion energy, low camera angle.
Palette: near-black, crimson red, hot orange.
```

### 6. `party-mode` — Party Mode · College Aur House Party
```
A rooftop house party in an Indian city at night: fairy lights, a disco ball reflecting purple and pink dots,
silhouettes dancing, a city skyline glowing behind, confetti in the air. Palette: deep violet, electric purple,
neon pink.
```

### 7. `purane-yaar` — Purane Yaar · 30+ Doston Ki Mehfil
```
Old friends' reunion on a terrace at blue hour: four mismatched plastic chairs in a circle, steel tea glasses,
a cassette player and an old photo album on a small table, a scooter parked below, soft moonlight.
Figures seen from behind or cropped. Palette: midnight blue, cobalt, sky blue.
```

### 8. `ghazal-mehfil` — Ghazal Mehfil · Ghazal Aur Shayari
```
An intimate evening ghazal baithak: white floor cushions (gaddi) with bolsters, a harmonium and tabla,
a brass oil lamp, rose petals, an arched jharokha window with a crescent moon outside, soft smoke.
No faces. Palette: indigo, deep violet, soft lavender glow.
```

### 9. `sophisticated-sounds` — Sophisticated Sounds · Elite Lounge
```
An elegant dim lounge: a vinyl turntable, a saxophone resting on a velvet armchair, a sitar leaning against
a wall, a low brass table with a crystal glass, warm pendant light, art-deco mirror. Palette: ink black,
slate navy, muted gold.
```

### 10. `mahila-sangeet` — Mahila Sangeet · Shaadi Special
```
A ladies' sangeet at home: a dholak decorated with marigold, hands with intricate mehendi clapping
(hands only, no faces), glass bangles, strings of marigold and mango leaves (toran), floor seating with
colourful dupattas. Palette: magenta, deep plum, marigold yellow.
```

### 11. `girls-night-in` — Girls' Night In · Girls Ki Baithak
```
A cosy bedroom girls' night: fairy lights over a bed, pillows and a soft blanket, a microphone for karaoke,
nail polish bottles, a bowl of popcorn, a phone showing a blurred lyric screen, everyone seen from behind
singing. Palette: deep purple, fuchsia, coral pink.
```

### 12. `family-function-hits` — Family Function Hits · Sabke Favourite
```
A family function in a decorated house courtyard: a long row of steel plates on a table, a DJ speaker in
the corner, kids running with balloons, an elderly couple's hands holding each other, string lights and
tent fabric overhead. Faces not shown. Palette: dark rust, warm orange, pale gold.
```

### 13. `drive-mode` — Drive Mode · Long Drive
```
A long drive at dusk: view from the passenger seat of a car on a winding hill road, one hand resting out of
the window, city lights below, a cassette/dashboard glow, the sky shifting from indigo to cyan.
Palette: navy, indigo, glowing cyan.
```

### 14. `desi-folk-festive` — Desi Folk & Festive · Tyohar Aur Lokgeet
```
A festive collage of Indian celebrations blended into one scene: clay diyas glowing, clouds of Holi colour,
a garba circle of swirling skirts (no faces), a dhol with phulkari cloth, rangoli on the ground,
fireworks in a dark magenta sky. Palette: maroon, magenta, bright marigold.
```

### 15. `baraat-bangers` — Baraat Bangers · Band Baaja
```
A wedding baraat procession at night on a city street: a decorated white horse with a red-gold saddle,
brass band instruments shining, a dhol player from behind, petal showers, light-bearers carrying glowing
chandeliers on their heads, fireworks overhead. Palette: deep red, crimson, gold.
```

---

## Optional extras

**Homepage hero / social share image (16:9, 1920×1080)** → `public/hero.webp`
```
A panoramic Indian street at dusk that flows from a chai tapri on the left, through a barber shop and a
painted truck, to a wedding baraat with fireworks on the right — one continuous indie poster scene,
electric blue and violet sky with warm amber street lights. No text, no faces. Leave the left 40% darker
and uncluttered.
```

**Seamless background texture (optional)**
```
Seamless tileable dark navy texture with very subtle hand-drawn Indian motifs (paisley, marigold,
diya, music notes) in slightly lighter navy, low contrast, risograph grain. No text.
```

## Tips for consistent results

- Generate all 15 in **one Gemini chat** after pasting the style block, so the look stays consistent.
- If a result has text or a logo, reply: “Same image, remove all text and lettering.”
- Ask for “more negative space bottom-left” if the title overlay gets busy.
- Convert to WebP (e.g. squoosh.app) to keep each file under ~400 KB for fast mobile loading.
- Make sure the generator's terms allow commercial/web use of outputs.
