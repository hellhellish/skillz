// learning.js

const LEARNING_LEVELS_LIST = ['base', 'light', 'medium', 'hard', 'exam'];

// Создаем Promise, который будет разрешен когда модуль загружен
const learningModuleReady = new Promise((resolve) => {
    // Если уже загружено
    if (typeof renderLearning !== 'undefined') {
        resolve();
    }
    // Иначе ждем событие
    document.addEventListener('learningModuleReady', () => {
        resolve();
    });
});

function registerAllLearningLevels(stackId, stackData) {
    console.log(`🔄 Registering learning levels for: ${stackId}`);
    
    if (typeof renderLearning !== 'function') {
        console.error('❌ renderLearning is not defined! Check if template.js is loaded');
        return;
    }
    
    let registered = 0;
    const missing = [];
    
    LEARNING_LEVELS_LIST.forEach(level => {
        const dataKey = 'LEARNING_DATA_' + level.toUpperCase();
        const data = window[dataKey];
        
        if (data) {
            const sectionKey = 'learning-' + level;
            stackData.sections[sectionKey] = function(d, lvl) {
                return renderLearning(d, level);
            };
            registered++;
            console.log(`✅ Learning level "${level}" registered`);
        } else {
            missing.push(level);
            console.warn(`⚠️ Learning data for "${level}" not found (expected: ${dataKey})`);
        }
    });
    
    console.log(`📊 Registered ${registered} of ${LEARNING_LEVELS_LIST.length} levels`);
    
    if (missing.length > 0) {
        console.warn(`⚠️ Missing data for: ${missing.join(', ')}`);
    }
    
    return { registered, missing, total: LEARNING_LEVELS_LIST.length };
}

function checkLearningData() {
    const results = {};
    LEARNING_LEVELS_LIST.forEach(level => {
        const dataKey = 'LEARNING_DATA_' + level.toUpperCase();
        results[level] = !!window[dataKey];
    });
    return results;
}

// Делаем функции доступными глобально
window.registerAllLearningLevels = registerAllLearningLevels;
window.checkLearningData = checkLearningData;
window.LEARNING_LEVELS_LIST = LEARNING_LEVELS_LIST;
window.learningModuleReady = learningModuleReady;

// Диагностика при загрузке
console.log('🔍 Checking learning data availability...');
const dataStatus = checkLearningData();
console.table(dataStatus);

const loadedCount = Object.values(dataStatus).filter(v => v).length;
console.log(`📊 Found ${loadedCount} of ${LEARNING_LEVELS_LIST.length} data files`);

if (loadedCount < LEARNING_LEVELS_LIST.length) {
    console.warn('⚠️ Some learning data files are missing');
    Object.entries(dataStatus).forEach(([level, exists]) => {
        if (!exists) {
            console.warn(`   ❌ learning/${level}-data.js`);
        }
    });
}

// Отправляем событие о загрузке
document.dispatchEvent(new CustomEvent('learningModuleReady'));

console.log('✅ Learning module loaded');