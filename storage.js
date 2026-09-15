// storage.js

const STORAGE_KEYS = {
    THEME: 'ct_theme',
    FONT: 'ct_font',
    STACK: 'ct_stack',
    SECTION: 'ct_section'
};

// theme
function getStoredTheme() {
    return localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
}

function saveTheme(theme) {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
}

// font
function getStoredFont() {
    return localStorage.getItem(STORAGE_KEYS.FONT) || 'poppins';
}

function saveFont(font) {
    localStorage.setItem(STORAGE_KEYS.FONT, font);
}

function applyFontFromStorage() {
    const font = getStoredFont();
    applyFont(font);
}

// stack
function getStoredStack() {
    return localStorage.getItem(STORAGE_KEYS.STACK);
}

function saveStack(stackId) {
    localStorage.setItem(STORAGE_KEYS.STACK, stackId);
}

function removeStack() {
    localStorage.removeItem(STORAGE_KEYS.STACK);
}

// section
function getStoredSection() {
    return localStorage.getItem(STORAGE_KEYS.SECTION) || 'overview';
}

function saveSection(sectionId) {
    localStorage.setItem(STORAGE_KEYS.SECTION, sectionId);
}

// checkboxes
function saveCheckbox(id, value) {
    localStorage.setItem('ct_' + id, value);
}

function getCheckbox(id) {
    return localStorage.getItem('ct_' + id) === 'true';
}

// general
function clearAllStorage() {
    if (confirm('Are you sure you want to clear all data?')) {
        localStorage.clear();
        location.reload();
    }
}