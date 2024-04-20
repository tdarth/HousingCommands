import Settings from "../features/Settings";

register('command', (option) => {
    if (option) {
        ChatLib.chat(Settings.chatPrefix + '&aEmojis copied to clipboard.')
        if (option == "hearts") {
            ChatLib.command('ct copy ♥ ♡ ❤ ❥ ❣ ❦ ❧', true);
        }
        if (option == "hands") {
            ChatLib.command('ct copy ☝ ☞ ☜ ☟ ✌ ✍ ☛ ☚', true);
        }
        if (option == "coins") {
            ChatLib.command('ct copy ⛀ ⛁ ⛃ ⛂', true);
        }
        if (option == "skyblock") {
            ChatLib.command('ct copy ❁ ❤ ❈ ❂ ✦ ✎ ☣ ☠ ⚔ ⫽ ✯ ♣ α ๑ ⸕ ✧ ☘ ⸎ ʬ ♨ ᠅ ≈ ❣ ✆ ✪ ☀ ☽ ⏣ ✌ ♲ ☀ ⚠ ✿ ♪ ♫ ⓪ ⓩ ▲ ⁍ ⚚ ✖ ✔ ➜ ﴾ ﴿ ☬ ☄ ⚑ Ⓑ ☺ ♞ ✷ ⦾', true);
        }
        if (option == "blocks") {
            ChatLib.command('ct copy ❏ ❐ ❑ ❒ ▀ ▁ ▂ ▃ ▄ ▅ ▆ ▇ ▉ ▊ ▋ █ ▌ ▐ ▍ ▎ ▏ ▒ ░ ▓ ■ ▢', true);
        }
        if (option == "circles") {
            ChatLib.command('ct copy ◍ ◎ ● ◐ ◑ ◒ ◓ ◔ ◕ ◖ ◗ ❂ ☢ ⊗ ⊙ ◯ 〇 ⚫ ⬤ ◦ ⦿ ❍ ⊛ ⊚ ⊕ ⊖ • ∙ ∙ • ● ○ ⬤ ⚪ ➤ ▶ ▹ ➥ ◆ ➣ ‣ ⌾', true);
        }
        if (option == "stars") {
            ChatLib.command('ct copy ★ ☆ ✡ ✦ ✧ ✩ ✪ ✫ ✬ ✭ ✮ ✯ ✰ ⁎ ⁑ ✢ ✣ ✤ ✥ ✱ ✲ ✳ ✴ ✵ ✶ ✷ ✸ ✹ ✺ ✻ ✼ ✽ ✾ ✿ ❀ ❁ ❂ ❃ ❇ ❈ ❉ ❊ ❋ ❄ ⋆ ✲ ࿏ ⭒ ⍟ ⭐', true);
        }
        if (option == "checks") {
            ChatLib.command('ct copy ✓ ✔ ✗ ✘', true);
        }
        if (option == "faces") {
            ChatLib.command('ct copy ☺ ☻ ツ ㋡ ☹ ⍨ ☠ ⍤ ⍢', true);
        }
        if (option == "lines") {
            ChatLib.command('ct copy  ─ ━ │ ┃ ┄ ┅ ┆ ┇ ┈ ┉ ┊ ┋ ┌ ┍ ┎ ┏ ┐ ┑ ┒ ┓ └ ┕ ┖ ┗ ┘ ┙ ┚ ┛ ├ ┝ ┞ ┟ ┠ ┡ ┢ ┣ ┤ ┥ ┦ ┧ ┨ ┩ ┪ ┫ ┬ ┭ ┮ ┯ ┰ ┱ ┲ ┳ ┴ ┵ ┶ ┷ ┸ ┹ ┺ ┻ ┼ ┽ ┾ ┿ ╀ ╁ ╂ ╃ ╄ ╅ ╆ ╇ ╈ ╉ ╊ ╋ ╌ ╍ ╎ ╏ ═ ║ ╒ ╓ ╔ ╕ ╖ ╗ ╘ ╙ ╚ ╛ ╜ ╝ ╞ ╟ ╠ ╡ ╢ ╣ ╤ ╥ ╦ ╧ ╨ ╩ ╪ ╫ ╬ ╭ ╮ ╯ ╰ ╴ ╵ ╶ ╷ ╸ ╹ ╺ ╻ ╼ ╽ ╾ ╿', true);
        }
        if (option == "arrows") {
            ChatLib.command('ct copy ↕ ↖ ↗ ↘ ↙ ↪ ↩ ↺ ↻ ▶ ➜ ➨ ➡ ➠ ➟ ➩ ➪ ➫ ➬ ➭ ➮ ➯ ➱ ➲ ➥ ➦ ➛ ➘ ➙ ➚ ➔ ⇪ ⇩ ⇨ ⇧ ⇦ ↷ ↶ ↟ ↠ ⇫ ⇳ ⬄ ⬀ ⬁ ⬂ ⬃ ⬅ ⬆ ⬇ ⬈ ⬉ ⬊ ⬋ ⥀ ⇦ ◀ ← → ➤', true);
        }
    } else {
        ChatLib.chat(Settings.chatPrefix + '&cNo option provided! &8(hearts, hands, coins, skyblock, blocks, circles, stars, checks, faces, lines, arrows&8)')
    }
}).setName('hcemojis');
