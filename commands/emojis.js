import Settings from "../features/Settings";

register('command', (option) => {
    if (option) {
        if (option == "hearts") {
            ChatLib.command('ct copy ♥ ♡ ❤ ❥ ❣ ❦ ❧', true);
            ChatLib.chat(Settings.chatPrefix + '&aEmojis copied to clipboard.')
        }
        if (option == "hands") {
            ChatLib.command('ct copy ☝ ☞ ☜ ☟ ✌ ✍ ☛ ☚', true);
            ChatLib.chat(Settings.chatPrefix + '&aEmojis copied to clipboard.')
        }
        if (option == "coins") {
            ChatLib.command('ct copy ⛀ ⛁ ⛃ ⛂', true);
            ChatLib.chat(Settings.chatPrefix + '&aEmojis copied to clipboard.')
        }
        if (option == "skyblock") {
            ChatLib.command('ct copy ❁ ❤ ❈ ❂ ✦ ✎ ☣ ☠ ⚔ ⫽ ✯ ♣ α ๑ ⸕ ✧ ☘ ⸎ ʬ ♨ ᠅ ≈ ❣ ✆ ✪ ☀ ☽ ⏣ ✌ ♲ ☀ ⚠ ✿ ♪ ♫ ⓪ ⓩ ▲ ⁍ ⚚ ✖ ✔ ➜ ﴾ ﴿ ☬ ☄ ⚑ Ⓑ ☺ ♞ ✷ ⦾', true);
            ChatLib.chat(Settings.chatPrefix + '&aEmojis copied to clipboard.')
        }
        if (option == "blocks") {
            ChatLib.command('ct copy ❏ ❐ ❑ ❒ ▀ ▁ ▂ ▃ ▄ ▅ ▆ ▇ ▉ ▊ ▋ █ ▌ ▐ ▍ ▎ ▏ ▒ ░ ▓ ■ ▢', true);
            ChatLib.chat(Settings.chatPrefix + '&aEmojis copied to clipboard.')
        }
        if (option == "circles") {
            ChatLib.command('ct copy ◍ ◎ ● ◐ ◑ ◒ ◓ ◔ ◕ ◖ ◗ ❂ ☢ ⊗ ⊙ ◯ 〇 ⚫ ⬤ ◦ ⦿ ❍ ⊛ ⊚ ⊕ ⊖ • ∙ ∙ • ● ○ ⬤ ⚪ ➤ ▶ ▹ ➥ ◆ ➣ ‣ ⌾', true);
            ChatLib.chat(Settings.chatPrefix + '&aEmojis copied to clipboard.')
        }
        if (option == "stars") {
            ChatLib.command('ct copy ★ ☆ ✡ ✦ ✧ ✩ ✪ ✫ ✬ ✭ ✮ ✯ ✰ ⁎ ⁑ ✢ ✣ ✤ ✥ ✱ ✲ ✳ ✴ ✵ ✶ ✷ ✸ ✹ ✺ ✻ ✼ ✽ ✾ ✿ ❀ ❁ ❂ ❃ ❇ ❈ ❉ ❊ ❋ ❄ ⋆ ✲ ࿏ ⭒ ⍟ ⭐', true);
            ChatLib.chat(Settings.chatPrefix + '&aEmojis copied to clipboard.')
        }
        if (option == "checks") {
            ChatLib.command('ct copy ✓ ✔ ✗ ✘', true);
            ChatLib.chat(Settings.chatPrefix + '&aEmojis copied to clipboard.')
        }
        if (option == "faces") {
            ChatLib.command('ct copy ☺ ☻ ツ ㋡ ☹ ⍨ ☠ ⍤ ⍢', true);
            ChatLib.chat(Settings.chatPrefix + '&aEmojis copied to clipboard.')
        }
        if (option == "lines") {
            ChatLib.command('ct copy  ─ ━ │ ┃ ┄ ┅ ┆ ┇ ┈ ┉ ┊ ┋ ┌ ┍ ┎ ┏ ┐ ┑ ┒ ┓ └ ┕ ┖ ┗ ┘ ┙ ┚ ┛ ├ ┝ ┞ ┟ ┠ ┡ ┢ ┣ ┤ ┥ ┦ ┧ ┨ ┩ ┪ ┫ ┬ ┭ ┮ ┯ ┰ ┱ ┲ ┳ ┴ ┵ ┶ ┷ ┸ ┹ ┺ ┻ ┼ ┽ ┾ ┿ ╀ ╁ ╂ ╃ ╄ ╅ ╆ ╇ ╈ ╉ ╊ ╋ ╌ ╍ ╎ ╏ ═ ║ ╒ ╓ ╔ ╕ ╖ ╗ ╘ ╙ ╚ ╛ ╜ ╝ ╞ ╟ ╠ ╡ ╢ ╣ ╤ ╥ ╦ ╧ ╨ ╩ ╪ ╫ ╬ ╭ ╮ ╯ ╰ ╴ ╵ ╶ ╷ ╸ ╹ ╺ ╻ ╼ ╽ ╾ ╿', true);
            ChatLib.chat(Settings.chatPrefix + '&aEmojis copied to clipboard.')
        }
        if (option == "arrows") {
            ChatLib.command('ct copy ↕ ↖ ↗ ↘ ↙ ↪ ↩ ↺ ↻ ▶ ➜ ➨ ➡ ➠ ➟ ➩ ➪ ➫ ➬ ➭ ➮ ➯ ➱ ➲ ➥ ➦ ➛ ➘ ➙ ➚ ➔ ⇪ ⇩ ⇨ ⇧ ⇦ ↷ ↶ ↟ ↠ ⇫ ⇳ ⬄ ⬀ ⬁ ⬂ ⬃ ⬅ ⬆ ⬇ ⬈ ⬉ ⬊ ⬋ ⥀ ⇦ ◀ ← → ➤', true);
            ChatLib.chat(Settings.chatPrefix + '&aEmojis copied to clipboard.')
        }
    } else {
        ChatLib.chat(Settings.chatPrefix + '&cNo option provided! &8(hearts, hands, coins, skyblock, blocks, circles, stars, checks, faces, lines, arrows&8)')
    }
}).setName('hcemojis');
