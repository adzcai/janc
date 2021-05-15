---
template: post
title: Phonology of Baexhea
slug: phonology-of-baexhea
socialImage: /media/cooking.jpeg
draft: false
date: 2021-05-15T18:17:58.217Z
description: Now we have all of the ingredients we need, so let's start cooking up some syllables! Here's the first glance (hear?) of what our language will sound like!
category: Phonology
tags:
  - phonology
  - phonotactics
  - vowels
  - conlang
  - baexhea
---

Alright, here we go! Everything I mention in this post should be discussed in [the previous post](/features-and-phonotactics).

First off, I finally decided on the name for the conlang: **Baexhea** /paeʁea/! This is a bit of a subtle reference to the Duolingo owl, though it's a bit of a stretch — owl is "baykuş" in Turkish, so I kind of wanted to include similar consonant sounds, and I'd try to make the vowels more similar but there's also a limitation on the vowels I can use because of the grammar — more on that later!

## Building our proto-language's phonology

I also decided to, instead of making just one language, to start from a proto-language (the version today) and gradually evolve children languages as well. This is mostly since I'm indecisive and can never decide which features to leave out, so I thought, why not eventually include everything, just not all at once?

For this protolang, I spent way too long investigating the phonologies of various conlangs, but ultimately I'm pretty happy that the end result isn't really traceable to any specific one and turned out to be pretty unique.

Without further ado, here's the chart:

<table>
    <thead>
        <tr>
            <td colspan="2"></td>
            <th>Bilabial</th>
            <th>Alveolar</th>
            <th>Velar</th>
            <th>Uvular/Glottal</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row" colspan="2">Nasal</th>
            <td>m    &lt;m&gt;</td>
            <td>n    &lt;n&gt;</td>
            <td>ŋ    &lt;ng&gt;</td>
            <td></td>
        </tr>
        <tr>
            <th scope="row" rowspan="3">Stops</th>
            <th scope="row"><strong><em>Tenuis</em></strong></td>
            <td>p    &lt;b&gt;</td>
            <td>t    &lt;d&gt;</td>
            <td>k    &lt;g&gt;</td>
            <td>q    &lt;q&gt;</td>
        </tr>
        <tr>
            <th scope="row"><strong><em>Aspirated</em></strong></th>
            <td>pʰ    &lt;p&gt;</td>
            <td>tʰ    &lt;t&gt;</td>
            <td>kʰ    &lt;k&gt;</td>
            <td>qʰ    &lt;qh&gt;</td>
        </tr>
        <tr>
            <th scope="row"><strong><em>Voiced</em></strong></th>
            <td>b    &lt;bh&gt;</td>
            <td>d    &lt;dh&gt;</td>
            <td>g    &lt;gh&gt;</td>
            <td>ɢ    &lt;xh&gt;</td>
        </tr>
        <tr>
            <th scope="row" colspan="2">Fricative</th>
            <td>ɸ    &lt;f&gt;</td>
            <td>s    &lt;s&gt;</td>
            <td></td>
            <td>h    &lt;h&gt;</td>
        </tr>
        <tr>
            <th scope="row" colspan="2">Approximant</th>
            <td>w    &lt;w&gt;</td>
            <td>l    &lt;l&gt;</td>
            <td></td>
            <td>(ʁ    &lt;xh&gt;)</td>
        </tr>
        </tr>
    </tbody>
</table>

This comes to a total of 20 consonant sounds, which is pretty close to [the cross-linguistic average](https://wals.info/chapter/1). Some notable features of the consonants are:

- Four distinct places of articulation: bilabial, alveolar, velar, and uvular/glottal
- A three-way voicing distinction in stops. Most modern languages either have a two-way distinction, e.g. English or French /b/ vs /p/, or a four-way distinction like Hindi/Urdu and Bengali /p/, /pʰ/, /b/, /bʰ/. For this lang, I decided to use a three-way distinction, which is found in Thai and Ancient Greek and also attested in Proto-Indo-European (PIE).
- No affricates. This notably leaves out /tʃ/, a relatively common sound.
- No voiced fricatives. Not much to say; this was more of an arbitrary design choice that should help give Baexhea a unique sound.
- A uvular consonant series. Uvular stops are pretty rare overall, especially ɢ, which is typically realized as the voiced uvular fricative/approximant /ʀ/ instead.

As for the vowels, I decided to go with a basic six-vowel system — _or so it seems:_

<table>
    <thead>
        <td></td>
        <th>Front/High</th>
        <th>Front/Mid</th>
        <th>Back</th>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Unrounded</th>
            <td>i</td>
            <td>e</td>
            <td>a</td>
        </tr>
        <tr>
            <th scope="row">Rounded</th>
            <td>y (&lt;ü&gt;)</td>
            <td>œ (&lt;ö&gt;)</td>
            <td>u (&lt;u&gt;)</td>
        </tr>
    </tbody>
</table>

Each vowel phoneme also has considerable allophonic variation, with /i/ ranging from [i~ɪ], /e/ ranging from [e~ɛ], and /a/ ranging from [a~ɑ], and /œ/ ranging from [ʏ~œ~ø].

While there's only six _monophthongs_, classified into rounded/unrounded in three different broad places, in reality, Baexhea has a complex system of diphthongs, utilizing all 36 possible pairs of vowel sounds (I'm going to use this term to include long vowels since that's how they're phonologically treated in Baexhea) in a unique system of what I'm going to call "diphthong harmony"! I'm hoping to use these diphthongs for grammatical purposes as well, in a type of [**apophony**](https://en.wikipedia.org/wiki/Apophony) (think English sing, sang, sung, song). Here's the list of all 36 possible diphthongs:

| Form            | "II" | "IE" | "IA" | "EE" | "EI" | "EA" | "AA" | "AI" | "AE" |
| --------------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1st form (U, U) | ii   | ie   | ia   | ee   | ei   | ea   | aa   | ai   | ae   |
| 2nd form (U, R) | iü   | iö   | iu   | eö   | eü   | eu   | au   | aü   | aö   |
| 3rd form (R, U) | üi   | üe   | üa   | öe   | öi   | öa   | ua   | ui   | ue   |
| 4th form (R, R) | üü   | üö   | üu   | öö   | öü   | öu   | uu   | uü   | uö   |

Call me evil, but I'm currently considering multiple forms of "diphthong harmony", kind of like what Turkish has with the two- and four-way vowel harmony, which will show up in different affixes and which I'll probably use for some Crazy Inflection Shenanigans<sup>TM</sup>.

Another way I'm using vowels grammatically is that I want to reserve the monophthongs for function words, likely including pronouns, determiners, prepositions, maybe case modifiers, etc. This should help to make different parts of speech more phonologically distinct (kind of how German still marks nouns with capital letters in writing).

## Phonotactics

I struggled for a long time regarding phonotactics — To include complex clusters or not? — but I decided I like the sound of the language with simple CV(V) consonants, especially since the diphthongs already include enough complexity for me to work with for now. This might end up changing in the future. It also means I can get to work designing an abugida/alphasyllabary as the writing system! The plans for the writing system are already in motion, and I've gotta say, it'll be pretty cool.

Haha! I'm pretty happy with where this is going. This gives a total of 840 possible syllables (20\*6\*6 with diphthongs and 20\*6 with monophthongs), which is big compared to Japanese but tiny relative to languages like Georgian or even English, but keep in mind diphthong harmony will mean only a small subset of these will be able to occur in each word. They're all definitely distinct, although some are harder to pronounce than others, especially the ones with the uvular stops. I originally included those to add a unique flavour, but if they ends up being too hard to pronounce, I might just remove them or modify them through sound changes.

## Sample sounds

These syllables don't have any meaning yet, but should give a sense of what sort of sounds are phonotactically allowed.

![all valid syllables in Baexhea](/media/baexhea-syllables.png 'All valid syllables in Baexhea')

Alright, there we go! This phonology should serve as a solid foundation for the next step of our conlanging process: the **morphosyntax,** composed of the order that things go in at the word level (morphology) and sentence level (syntax). See you in the next post and let me know if you have feedback or suggestions!
