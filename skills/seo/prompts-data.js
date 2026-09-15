// skills/php/prompts-data.js

window.SEO_PROMPTS_DATA = [
    {
        title: "Comment Policy",
        text: "When modifying code, enforce these rules for all code comments. Language: English only. Format: `//` prefix, lowercase text, no exceptions. Placement: on a separate line directly above the code it describes. Never inline, never trailing. Scope: add a comment only when the code's intent is non-obvious (complex logic, edge cases, workarounds, non-trivial decisions). Cleanup: if a comment is not needed, delete it. Do not add redundant, obvious, or restating-the-code comments. On edit: update or remove existing comments that no longer match the code. Do not leave stale comments."
    },
    {
        title: "No Emoji Policy",
        text: "Do not use emojis, emoticons, icons, or any unicode pictographs anywhere in the project (code, comments, strings, docs, commit messages, UI text, filenames) unless explicitly requested by the user. This includes decorative symbols, checkmarks, arrows, and similar glyphs. Plain ASCII text only. If such characters already exist and were not requested, remove them."
    },
    {
        title: "Language Policy",
        text: "User prompts, commands, and explanations are given in Russian. All responses, code, identifiers, strings, comments, commit messages, and any other output must be strictly in English, unless the user explicitly requests otherwise."
    }
];