// universal learning template (with threads)

const LEARNING_LEVELS = {
    'base':   { title: 'Base',   order: 0, color: '#4CAF50', section: 'learning-base' },
    'light':  { title: 'Light',  order: 1, color: '#8BC34A', section: 'learning-light' },
    'medium': { title: 'Medium', order: 2, color: '#FF9800', section: 'learning-medium' },
    'hard':   { title: 'Hard',   order: 3, color: '#F44336', section: 'learning-hard' },
    'exam':   { title: 'Exam',   order: 4, color: '#9C27B0', section: 'learning-exam' }
};

// thread storage: { base: { 'thread-01': {...}, ... }, light: {...} }
const LEARNING_THREADS = {
    base: {},
    light: {},
    medium: {},
    hard: {},
    exam: {}
};

// register a single thread
function registerLearningThread(level, threadData) {
    if (!LEARNING_THREADS[level]) {
        console.warn(`unknown level: ${level}`);
        return;
    }
    if (!threadData || !threadData.id) {
        console.error('thread must have an id');
        return;
    }
    LEARNING_THREADS[level][threadData.id] = threadData;
    console.log(`thread registered: ${level}/${threadData.id} - "${threadData.title}"`);
}

// get all threads for a level (sorted)
function getLearningThreads(level) {
    const threads = LEARNING_THREADS[level] || {};
    return Object.values(threads).sort((a, b) => (a.order || 0) - (b.order || 0));
}

// ---------- main render ----------
// state: { level: 'base', threadId: null | 'thread-01' }
function renderLearning(data, level, state) {
    const levelInfo = LEARNING_LEVELS[level] || LEARNING_LEVELS['base'];
    const threads = getLearningThreads(level);
    
    // if no thread selected, show thread list
    if (!state || !state.threadId) {
        return renderThreadsList(level, levelInfo, threads);
    }
    
    // if thread selected, show its topics
    const thread = LEARNING_THREADS[level][state.threadId];
    if (!thread) {
        return renderThreadsList(level, levelInfo, threads);
    }
    
    return renderThreadDetail(level, levelInfo, thread);
}

// ---------- thread list ----------
function renderThreadsList(level, levelInfo, threads) {
    if (threads.length === 0) {
        return `
            <div class="section active">
                <div class="section-header">
                    <h1>${levelInfo.title}</h1>
                    <p>no threads loaded</p>
                </div>
                <div class="card">
                    <p style="color:var(--text-black700);">
                        no threads registered for level "${level}".
                    </p>
                </div>
            </div>
        `;
    }
    
    const totalTopics = threads.reduce((sum, t) => sum + (t.topics ? t.topics.length : 0), 0);
    const completedTopics = threads.reduce((sum, t) => {
        return sum + (t.topics ? t.topics.filter(tp => tp.completed).length : 0);
    }, 0);
    
    return `
        <div class="section active">
            <div class="section-header">
                <h1>${levelInfo.title}</h1>
                <p>select a thread to study</p>
                <div style="display:flex;gap:16px;margin-top:8px;flex-wrap:wrap;">
                    <span style="color:var(--text-black700);font-size:14px;">
                        ${threads.length} threads
                    </span>
                    <span style="color:var(--text-black700);font-size:14px;">
                        ${totalTopics} topics
                    </span>
                    <span style="color:var(--text-black700);font-size:14px;">
                        ${completedTopics}/${totalTopics} completed
                    </span>
                </div>
            </div>
            
            <div class="threads-grid" style="
                display:grid;
                grid-template-columns:repeat(auto-fill, minmax(280px, 1fr));
                gap:16px;
                margin-top:20px;
            ">
                ${threads.map(thread => {
                    const tTotal = thread.topics ? thread.topics.length : 0;
                    const tDone = thread.topics ? thread.topics.filter(t => t.completed).length : 0;
                    const percent = tTotal > 0 ? Math.round(tDone / tTotal * 100) : 0;
                    
                    return `
                        <div class="card thread-card" 
                             data-thread-id="${thread.id}">
                            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;">
                                <div style="flex:1;">
                                    <h3 style="margin:0 0 8px 0;font-size:16px;">${thread.title}</h3>
                                    <p style="color:var(--text-black700);font-size:13px;margin:0;line-height:1.5;">
                                        ${thread.summary || ''}
                                    </p>
                                </div>
                                <div style="font-size:24px;color:var(--text-black700);">-&gt;</div>
                            </div>
                            <div style="margin-top:12px;display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--text-black700);">
                                <span>${tTotal} topics</span>
                                <span>${tDone}/${tTotal} (${percent}%)</span>
                            </div>
                            <div style="margin-top:8px;height:4px;background:var(--bg-black50);border-radius:2px;overflow:hidden;">
                                <div style="height:100%;width:${percent}%;background:${levelInfo.color};transition:width 0.3s ease;"></div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

// ---------- thread detail (topics) ----------
function renderThreadDetail(level, levelInfo, thread) {
    const topics = thread.topics || [];
    const totalTopics = topics.length;
    const completedTopics = topics.filter(t => t.completed).length;
    
    return `
        <div class="section active" data-thread-view="${thread.id}">
            <div class="section-header">
                <button class="back-to-threads-btn" 
                        data-level="${level}"
                        style="background:transparent;border:1px solid var(--bg-black50);color:var(--text-black700);padding:6px 14px;border-radius:20px;cursor:pointer;font-size:13px;margin-bottom:16px;">
                    &lt;- back to threads
                </button>
                <h1>${thread.title}</h1>
                <p>${thread.summary || ''}</p>
                <div style="display:flex;gap:16px;margin-top:8px;flex-wrap:wrap;">
                    <span style="color:var(--text-black700);font-size:14px;">
                        ${totalTopics} topics
                    </span>
                    <span style="color:var(--text-black700);font-size:14px;">
                        ${completedTopics}/${totalTopics} completed
                    </span>
                </div>
            </div>
            
            ${topics.length > 0 ? topics.map((topic, index) => `
                <div class="card learning-card" 
                     data-topic-id="${topic.id}">
                    <div style="display:flex;justify-content:space-between;align-items:flex-start;cursor:pointer;" 
                         onclick="toggleTopic(this.closest('.learning-card'))">
                        <div style="flex:1;">
                            <h3 style="display:flex;align-items:center;gap:8px;margin:0;">
                                ${topic.title}
                            </h3>
                            <p style="color:var(--text-black700);font-size:14px;margin:8px 0 0 0;">
                                ${topic.summary || ''}
                            </p>
                        </div>
                        <div style="display:flex;align-items:center;gap:12px;margin-left:16px;">
                            <input type="checkbox" 
                                   data-ct-id="learning_${level}_${thread.id}_${topic.id}" 
                                   ${topic.completed ? 'checked' : ''} 
                                   onclick="event.stopPropagation(); updateTopicCompletion(this, '${level}', '${thread.id}', '${topic.id}')"
                                   style="width:18px;height:18px;accent-color:var(--skin-color);cursor:pointer;">
                            <span style="font-size:20px;color:var(--text-black700);transition:transform 0.3s ease;" class="toggle-arrow">v</span>
                        </div>
                    </div>
                    <div class="topic-content" style="display:none;margin-top:16px;padding-top:16px;border-top:1px solid var(--bg-black50);">
                        <div style="color:var(--text-black700);font-size:14px;line-height:1.8;">
                            ${topic.content || '<p>content in development...</p>'}
                        </div>
                    </div>
                </div>
            `).join('') : '<p>no topics in this thread yet</p>'}
            
            <div style="margin-top:30px;padding-top:20px;border-top:1px solid var(--bg-black50);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
                <div style="display:flex;gap:8px;flex-wrap:wrap;">
                    <button onclick="markAllTopics('${level}', '${thread.id}', true)" 
                            style="padding:8px 20px;background:var(--skin-color);color:#fff;border:none;border-radius:20px;cursor:pointer;font-size:13px;font-weight:500;">
                        mark all as completed
                    </button>
                    <button onclick="markAllTopics('${level}', '${thread.id}', false)" 
                            style="padding:8px 20px;background:var(--bg-black50);color:var(--text-black700);border:none;border-radius:20px;cursor:pointer;font-size:13px;font-weight:500;">
                        reset all
                    </button>
                </div>
                <span style="color:var(--text-black700);font-size:13px;">
                    thread progress: <strong id="progress_${level}_${thread.id}">${totalTopics > 0 ? Math.round(completedTopics / totalTopics * 100) : 0}%</strong>
                </span>
            </div>
        </div>
    `;
}

// ---------- interaction functions ----------
function toggleTopic(card) {
    const content = card.querySelector('.topic-content');
    const arrow = card.querySelector('.toggle-arrow');
    
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
    } else {
        content.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    }
}

function updateTopicCompletion(checkbox, level, threadId, topicId) {
    const key = `learning_${level}_${threadId}_${topicId}`;
    saveCheckbox(key, checkbox.checked);
    
    const thread = LEARNING_THREADS[level] && LEARNING_THREADS[level][threadId];
    if (thread && thread.topics) {
        const topic = thread.topics.find(t => t.id === topicId);
        if (topic) topic.completed = checkbox.checked;
    }
    
    updateProgress(level, threadId);
}

function updateProgress(level, threadId) {
    const thread = LEARNING_THREADS[level] && LEARNING_THREADS[level][threadId];
    if (!thread || !thread.topics) return;
    
    const total = thread.topics.length;
    const completed = thread.topics.filter(t => t.completed).length;
    const percent = total > 0 ? Math.round(completed / total * 100) : 0;
    
    const progressEl = document.getElementById(`progress_${level}_${threadId}`);
    if (progressEl) progressEl.textContent = `${percent}%`;
}

function markAllTopics(level, threadId, completed) {
    const thread = LEARNING_THREADS[level] && LEARNING_THREADS[level][threadId];
    if (!thread || !thread.topics) return;
    
    thread.topics.forEach(topic => {
        topic.completed = completed;
        const key = `learning_${level}_${threadId}_${topic.id}`;
        saveCheckbox(key, completed);
    });
    
    document.querySelectorAll(`[data-ct-id^="learning_${level}_${threadId}_"]`).forEach(cb => {
        cb.checked = completed;
    });
    
    updateProgress(level, threadId);
}

// ---------- export ----------
window.renderLearning = renderLearning;
window.LEARNING_LEVELS = LEARNING_LEVELS;
window.LEARNING_THREADS = LEARNING_THREADS;
window.registerLearningThread = registerLearningThread;
window.getLearningThreads = getLearningThreads;
window.toggleTopic = toggleTopic;
window.updateTopicCompletion = updateTopicCompletion;
window.updateProgress = updateProgress;
window.markAllTopics = markAllTopics;

console.log('learning template (threads) loaded');
document.dispatchEvent(new CustomEvent('templateLoaded'));