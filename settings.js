// settings.js

function renderSettings() {
    const savedFont = getStoredFont();
    const savedTheme = getStoredTheme();

    return `
        <div class="section active">
            <div class="section-header">
                <h1>Settings</h1>
            </div>

            <div class="card">
                <h3>Support the author</h3>
                <p class="card-description">
                    Like the project? Support its development
                </p>

                <div class="card-actions">
                    <a href="https://github.com/hellhellish/skillz" target="_blank" class="btn">
                        GitHub
                    </a>
                    <a href="#" target="_blank" class="btn">
                        Telegram
                    </a>
                    <a href="#" target="_blank" class="btn">
                        YouTube
                    </a>
                    <a href="#" target="_blank" class="btn">
                        Donate
                    </a>
                </div>
            </div>

            <div class="card">
                <h3>Theme</h3>
                <p class="card-description">Choose light or dark theme</p>

                <div class="switcher">
                    <button class="switch-option ${savedTheme === 'light' ? 'active' : ''}" data-theme="light">
                        Light
                    </button>
                    <button class="switch-option ${savedTheme === 'dark' ? 'active' : ''}" data-theme="dark">
                        Dark
                    </button>
                </div>
            </div>

            <div class="card">
                <h3>Interface font</h3>
                <p class="card-description">Choose the main font for the entire application</p>

                <div class="switcher">
                    <button class="switch-option ${savedFont === 'poppins' ? 'active' : ''}" data-font="poppins">
                        Poppins (default)
                    </button>
                    <button class="switch-option ${savedFont === 'monospace' ? 'active' : ''}" data-font="monospace">
                        Monospace
                    </button>
                    <button class="switch-option ${savedFont === 'inter' ? 'active' : ''}" data-font="inter">
                        Inter
                    </button>
                </div>
            </div>

            <div class="card">
                <h3>Storage</h3>
                <p class="card-description">Manage application data</p>

                <div class="card-actions">
                    <button onclick="clearAllStorage()" class="btn btn-danger">
                        Clear all data
                    </button>
                </div>
            </div>
        </div>
    `;
}

function bindSettingsEvents() {
    document.querySelectorAll('.switch-option[data-theme]').forEach(btn => {
        btn.removeEventListener('click', handleThemeClick);
        btn.addEventListener('click', handleThemeClick);
    });

    document.querySelectorAll('.switch-option[data-font]').forEach(btn => {
        btn.removeEventListener('click', handleFontClick);
        btn.addEventListener('click', handleFontClick);
    });
}

function handleThemeClick(e) {
    const btn = e.currentTarget;
    const theme = btn.dataset.theme;
    setTheme(theme);
    saveTheme(theme);

    document.querySelectorAll('.switch-option[data-theme]').forEach(b => {
        b.classList.remove('active');
        if (b.dataset.theme === theme) {
            b.classList.add('active');
        }
    });
}

function applyFont(font) {
    document.body.classList.remove('font-poppins', 'font-monospace', 'font-inter');
    document.body.classList.add('font-' + font);
    document.documentElement.style.setProperty('--app-font', getFontFamily(font));
    localStorage.setItem('ct_font', font);
}

function getFontFamily(font) {
    const fonts = {
        poppins: "'Poppins', sans-serif",
        monospace: "'Courier New', 'Consolas', monospace",
        inter: "'Inter', 'Segoe UI', sans-serif"
    };
    return fonts[font] || fonts.poppins;
}

function applyFontFromStorage() {
    const font = localStorage.getItem('ct_font') || 'poppins';
    document.body.classList.add('font-' + font);
    document.documentElement.style.setProperty('--app-font', getFontFamily(font));
}

function handleFontClick(e) {
    const btn = e.currentTarget;
    const font = btn.dataset.font;

    applyFont(font);

    document.querySelectorAll('.switch-option[data-font]').forEach(b => {
        b.classList.remove('active');
        if (b.dataset.font === font) {
            b.classList.add('active');
        }
    });
}

async function fetchGitHubStars() {
    try {
        const response = await fetch('https://api.github.com/repos/hellhellish/skillz');
        const data = await response.json();
        const starsElement = document.getElementById('githubStars');
        if (starsElement && data.stargazers_count !== undefined) {
            starsElement.textContent = data.stargazers_count;
        }
    } catch (error) {
        console.log('GitHub API unavailable');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(fetchGitHubStars, 1000);
});