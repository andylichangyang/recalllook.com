// 初始化页面
const initializePage = () => {
    console.log('Main.js: Initializing page...');
    
    // 如果有阻止干扰的标志，则不初始化分类标签功能
    if (window.preventMainJSInterference) {
        console.log('Main.js: 检测到阻止干扰标志，跳过分类标签初始化');
        return;
    }

    // 硬编码工具数据，确保可用
    const toolsData = {
        textToSpeech: [
            {
                name: "ElevenLabs",
                url: "https://elevenlabs.io/",
                description: "Provides ultra-realistic multilingual AI voice synthesis with subtle emotional expression and tone control.",
                features: ["29+ Languages", "Industry-leading Naturalness", "API Integration"],
                category: "Text to Speech",
                rating: 4.9,
                price: "Free Plan Available"
            },
            {
                name: "Play.ht",
                url: "https://play.ht/",
                description: "Natural and fluid AI voice synthesis supporting multiple languages and voice styles.",
                features: ["900+ Voices", "70+ Languages", "WordPress Plugin"],
                category: "Text to Speech",
                rating: 4.7,
                price: "Paid Service"
            },
            {
                name: "Murf AI",
                url: "https://murf.ai/",
                description: "Professional AI voice generator for video voiceovers and presentations.",
                features: ["120+ Voices", "Multi-language Support", "Real-time Editing"],
                category: "Text to Speech",
                rating: 4.8,
                price: "Free Trial Available"
            },
            {
                name: "Speechify",
                url: "https://speechify.com/",
                description: "Convert any text to natural speech with multi-platform support.",
                features: ["Multi-device Sync", "OCR Function", "Natural Voice"],
                category: "Text to Speech",
                rating: 4.6,
                price: "Free Version Available"
            },
            {
                name: "Amazon Polly",
                url: "https://aws.amazon.com/polly/",
                description: "Amazon's cloud-based text-to-speech service offering enterprise-level solutions.",
                features: ["Multiple Languages", "SSML Support", "Neural Voice"],
                category: "Text to Speech",
                rating: 4.8,
                price: "Pay-as-you-go"
            },
            {
                name: "Cepstral",
                url: "https://www.cepstral.com/",
                description: "Professional text-to-speech engine providing high-quality synthetic voices.",
                features: ["Offline Use", "Custom Pronunciation", "Multi-language Support"],
                category: "Text to Speech",
                rating: 4.5,
                price: "One-time Purchase"
            },
            {
                name: "NaturalReader",
                url: "https://www.naturalreaders.com/",
                description: "User-friendly online text-to-speech tool supporting multiple document formats.",
                features: ["Document Conversion", "Chrome Extension", "Mobile App"],
                category: "Text to Speech",
                rating: 4.4,
                price: "Free Version Available"
            },
            {
                name: "Acapela Group",
                url: "https://www.acapela-group.com/",
                description: "Professional voice synthesis solutions offering personalized voice services.",
                features: ["Emotional Voices", "Custom Voices", "Industry Solutions"],
                category: "Text to Speech",
                rating: 4.6,
                price: "Enterprise Custom"
            },
            {
                name: "ReadSpeaker",
                url: "https://www.readspeaker.com/",
                description: "Enterprise-level text-to-speech solution with website integration support.",
                features: ["Website Integration", "Enterprise Solutions", "Multi-language Support"],
                category: "Text to Speech",
                rating: 4.7,
                price: "Enterprise Pricing"
            },
            {
                name: "Balabolka",
                url: "http://www.cross-plus-a.com/balabolka.htm",
                description: "Free desktop text-to-speech software supporting multiple voice engines.",
                features: ["Batch Conversion", "Multiple Format Support", "Voice Settings"],
                category: "Text to Speech",
                rating: 4.3,
                price: "Free"
            }
        ],
        speechToText: [
            {
                name: "Deepgram",
                url: "https://deepgram.com/",
                description: "Real-time high-accuracy speech-to-text technology with industry-leading precision.",
                features: ["Real-time Transcription", "Custom Vocabulary", "Speaker Recognition"],
                category: "Speech to Text",
                rating: 4.8,
                price: "Paid"
            },
            {
                name: "Whisper",
                url: "https://openai.com/research/whisper",
                description: "Open-source speech recognition system with multilingual capabilities.",
                features: ["Multi-language Support", "Open Source", "Powerful Performance"],
                category: "Speech to Text",
                rating: 4.7,
                price: "Free"
            },
            {
                name: "Rev.ai",
                url: "https://www.rev.ai/",
                description: "Professional speech recognition API providing high-accuracy transcription services.",
                features: ["Real-time Transcription", "API Access", "Custom Models"],
                category: "Speech to Text",
                rating: 4.8,
                price: "Per Minute Pricing"
            },
            {
                name: "Otter.ai",
                url: "https://otter.ai/",
                description: "Smart meeting notes and real-time transcription tool.",
                features: ["Live Meeting Notes", "Smart Summary", "Team Collaboration"],
                category: "Speech to Text",
                rating: 4.7,
                price: "Free Version Available"
            },
            {
                name: "Google Speech-to-Text",
                url: "https://cloud.google.com/speech-to-text",
                description: "Google's enterprise-level speech recognition service.",
                features: ["Auto Punctuation", "Speaker Separation", "Industry Adaptation"],
                category: "Speech to Text",
                rating: 4.9,
                price: "Pay-as-you-go"
            },
            {
                name: "Sonix",
                url: "https://sonix.ai/",
                description: "Automated transcription and translation platform supporting multiple languages.",
                features: ["Auto Translation", "Caption Generation", "Team Sharing"],
                category: "Speech to Text",
                rating: 4.6,
                price: "Per Minute Pricing"
            },
            {
                name: "Speechmatics",
                url: "https://www.speechmatics.com/",
                description: "Enterprise-grade speech recognition solution.",
                features: ["Dialect Support", "Custom Vocabulary", "Batch Processing"],
                category: "Speech to Text",
                rating: 4.7,
                price: "Enterprise Pricing"
            },
            {
                name: "Voicera",
                url: "https://www.voicera.ai/",
                description: "Smart meeting assistant and speech-to-text service.",
                features: ["Meeting Summary", "Action Item Extraction", "Smart Analysis"],
                category: "Speech to Text",
                rating: 4.5,
                price: "Subscription"
            },
            {
                name: "Verbit",
                url: "https://verbit.ai/",
                description: "AI-driven transcription and captioning solution.",
                features: ["Live Captions", "Professional Transcription", "Education Solutions"],
                category: "Speech to Text",
                rating: 4.8,
                price: "Custom Plans"
            },
            {
                name: "Temi",
                url: "https://www.temi.com/",
                description: "Fast and accurate speech-to-text service.",
                features: ["Quick Processing", "Simple Pricing", "Editor Integration"],
                category: "Speech to Text",
                rating: 4.6,
                price: "Per Minute Pricing"
            }
        ],
        audioEditing: [
            {
                name: "Adobe Audition",
                url: "https://www.adobe.com/products/audition.html",
                description: "Professional audio workstation for mixing, editing, and creating audio content.",
                features: ["Professional Tools", "Noise Reduction", "Multi-track Editing"],
                category: "Audio Editing",
                rating: 4.8,
                price: "Paid"
            },
            {
                name: "Audacity",
                url: "https://www.audacityteam.org/",
                description: "Free, open-source multi-track recording and editing software.",
                features: ["Free and Open Source", "Cross-platform", "Plugin Support"],
                category: "Audio Editing",
                rating: 4.6,
                price: "Free"
            },
            {
                name: "FL Studio",
                url: "https://www.image-line.com/",
                description: "Professional digital audio workstation for music production.",
                features: ["Music Production", "Virtual Instruments", "MIDI Support"],
                category: "Audio Editing",
                rating: 4.8,
                price: "One-time Purchase"
            },
            {
                name: "Logic Pro",
                url: "https://www.apple.com/logic-pro/",
                description: "Apple's professional audio production software.",
                features: ["Professional Mixing", "Virtual Instruments", "Audio Effects"],
                category: "Audio Editing",
                rating: 4.9,
                price: "One-time Purchase"
            },
            {
                name: "Reaper",
                url: "https://www.reaper.fm/",
                description: "Lightweight but powerful digital audio workstation.",
                features: ["Performance Optimized", "Custom Interface", "Plugin Support"],
                category: "Audio Editing",
                rating: 4.7,
                price: "Low-cost Paid"
            },
            {
                name: "Studio One",
                url: "https://www.presonus.com/products/Studio-One",
                description: "Modern audio production software.",
                features: ["Intuitive Interface", "Drag-and-drop Workflow", "Integrated Tools"],
                category: "Audio Editing",
                rating: 4.7,
                price: "Multiple Versions"
            },
            {
                name: "Soundforge",
                url: "https://www.magix.com/us/music/sound-forge/",
                description: "Professional audio editing and mastering software.",
                features: ["Pro Audio Processing", "Mastering", "Audio Restoration"],
                category: "Audio Editing",
                rating: 4.6,
                price: "Paid"
            },
            {
                name: "WavePad",
                url: "https://www.nch.com.au/wavepad/",
                description: "Easy-to-use audio editing software.",
                features: ["Basic Editing", "Audio Effects", "Format Conversion"],
                category: "Audio Editing",
                rating: 4.4,
                price: "Free Version Available"
            },
            {
                name: "Ardour",
                url: "https://ardour.org/",
                description: "Open-source professional digital audio workstation.",
                features: ["Open Source", "Professional Features", "Cross-platform"],
                category: "Audio Editing",
                rating: 4.5,
                price: "Pay What You Want"
            },
            {
                name: "Ocenaudio",
                url: "https://www.ocenaudio.com/",
                description: "Cross-platform audio editor, simple yet powerful.",
                features: ["Real-time Preview", "Multi-file Editing", "VST Plugin Support"],
                category: "Audio Editing",
                rating: 4.5,
                price: "Free"
            }
        ],
        musicGeneration: [
            {
                name: "AIVA",
                url: "https://www.aiva.ai/",
                description: "AI composer creating emotional musical pieces.",
                features: ["Multiple Music Styles", "Customizable", "Professional Quality"],
                category: "Music Generation",
                rating: 4.7,
                price: "Free Plan Available"
            },
            {
                name: "Amper Music",
                url: "https://www.ampermusic.com/",
                description: "AI-driven music creation platform for custom soundtracks.",
                features: ["Professional Quality", "Simple Interface", "Quick Creation"],
                category: "Music Generation",
                rating: 4.5,
                price: "Paid"
            },
            {
                name: "OpenAI MuseNet",
                url: "https://openai.com/research/musenet",
                description: "Deep neural network music generation system.",
                features: ["Multiple Styles", "Instrument Combinations", "Open Source"],
                category: "Music Generation",
                rating: 4.6,
                price: "Free"
            },
            {
                name: "Soundraw",
                url: "https://soundraw.io/",
                description: "AI music generation platform for video creators.",
                features: ["Custom Music", "Royalty-free", "Multiple Styles"],
                category: "Music Generation",
                rating: 4.7,
                price: "Subscription"
            },
            {
                name: "Mubert",
                url: "https://mubert.com/",
                description: "Real-time AI music generation platform.",
                features: ["Streaming", "API Access", "Ambient Music"],
                category: "Music Generation",
                rating: 4.5,
                price: "Multiple Plans"
            },
            {
                name: "Boomy",
                url: "https://boomy.com/",
                description: "AI-assisted music creation platform.",
                features: ["Quick Creation", "Royalty Earnings", "Community Sharing"],
                category: "Music Generation",
                rating: 4.4,
                price: "Free to Start"
            },
            {
                name: "Ecrett Music",
                url: "https://ecrettmusic.com/",
                description: "AI background music creator for videos.",
                features: ["Scene Matching", "Emotion Detection", "Quick Export"],
                category: "Music Generation",
                rating: 4.6,
                price: "Subscription"
            },
            {
                name: "Amadeus Code",
                url: "https://amadeuscode.com/",
                description: "AI composition assistant application.",
                features: ["Melody Generation", "Harmony Arrangement", "Style Transfer"],
                category: "Music Generation",
                rating: 4.5,
                price: "In-app Purchase"
            },
            {
                name: "Infinite Album",
                url: "https://infinitealbum.io/",
                description: "Generate unlimited unique musical pieces.",
                features: ["Infinite Variations", "Style Mixing", "Real-time Generation"],
                category: "Music Generation",
                rating: 4.4,
                price: "Subscription Service"
            },
            {
                name: "Beatoven.ai",
                url: "https://www.beatoven.ai/",
                description: "Customized AI music creation platform.",
                features: ["Emotion-driven", "Video Scoring", "Professional Quality"],
                category: "Music Generation",
                rating: 4.6,
                price: "Credit System"
            }
        ],
        voiceCloning: [
            {
                name: "Resemble AI",
                url: "https://www.resemble.ai/",
                description: "AI voice generator supporting custom voice creation and real-time synthesis.",
                features: ["Custom Voices", "Real-time Synthesis", "API Access"],
                category: "Voice Cloning",
                rating: 4.7,
                price: "Paid"
            },
            {
                name: "Descript",
                url: "https://www.descript.com/",
                description: "AI-driven audio and video editing platform allowing document-style media editing.",
                features: ["Text-based Editing", "High-quality Transcription", "Auto Filler Word Removal"],
                category: "Voice Cloning",
                rating: 4.8,
                price: "Paid"
            },
            {
                name: "Lyrebird AI",
                url: "https://www.descript.com/lyrebird",
                description: "Professional voice cloning technology.",
                features: ["Voice Replication", "Emotion Control", "Real-time Synthesis"],
                category: "Voice Cloning",
                rating: 4.7,
                price: "Integrated Pricing"
            },
            {
                name: "VocaliD",
                url: "https://www.vocalid.ai/",
                description: "Personalized voice synthesis solutions.",
                features: ["Voice Bank", "Custom Voices", "Medical Applications"],
                category: "Voice Cloning",
                rating: 4.6,
                price: "Custom Plans"
            },
            {
                name: "Respeecher",
                url: "https://www.respeecher.com/",
                description: "Professional voice conversion and cloning service.",
                features: ["Voice Conversion", "Age Modification", "Gender Conversion"],
                category: "Voice Cloning",
                rating: 4.8,
                price: "Enterprise Pricing"
            },
            {
                name: "CereProc",
                url: "https://www.cereproc.com/",
                description: "Customized text-to-speech solutions.",
                features: ["Voice Customization", "Multi-language Support", "Emotional Synthesis"],
                category: "Voice Cloning",
                rating: 4.5,
                price: "Contact for Pricing"
            },
            {
                name: "Replica Studios",
                url: "https://replicastudios.com/",
                description: "AI voice generator focused on gaming and entertainment.",
                features: ["Game Voiceover", "Real-time Synthesis", "Character Voices"],
                category: "Voice Cloning",
                rating: 4.7,
                price: "Subscription"
            },
            {
                name: "Synthesia",
                url: "https://www.synthesia.io/",
                description: "AI video generation platform with voice cloning capabilities.",
                features: ["Video Synthesis", "Multi-language Dubbing", "Enterprise Custom"],
                category: "Voice Cloning",
                rating: 4.8,
                price: "Enterprise Plans"
            },
            {
                name: "Coqui",
                url: "https://coqui.ai/",
                description: "Open-source voice synthesis toolkit.",
                features: ["Open Framework", "Multi-language Support", "Community Support"],
                category: "Voice Cloning",
                rating: 4.4,
                price: "Free/Open Source"
            },
            {
                name: "Voice.ai",
                url: "https://voice.ai/",
                description: "Real-time voice conversion and cloning tool.",
                features: ["Real-time Conversion", "Multiple Voice Models", "Streaming Integration"],
                category: "Voice Cloning",
                rating: 4.6,
                price: "Freemium"
            }
        ]
    };
    
    // Get DOM elements
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const closeButtons = document.querySelectorAll('.close');
    const showSignupLink = document.getElementById('showSignup');
    const showLoginLink = document.getElementById('showLogin');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const featuredToolsContainer = document.getElementById('featuredTools');
    const allToolsContainer = document.getElementById('allTools');
    const categoryTabs = document.querySelectorAll('.category-tab');

    // Debug log
    console.log('DOM elements:', {
        loginBtn,
        signupBtn,
        loginModal,
        signupModal,
        closeButtons,
        showSignupLink,
        showLoginLink,
        loginForm,
        signupForm,
        featuredToolsContainer,
        allToolsContainer,
        categoryTabs
    });

    // Show login modal
    if (loginBtn && loginModal) {
        loginBtn.addEventListener('click', () => {
            console.log('Login button clicked');
            loginModal.style.display = 'block';
        });
    }

    // Show signup modal
    if (signupBtn && signupModal) {
        signupBtn.addEventListener('click', () => {
            console.log('Signup button clicked');
            signupModal.style.display = 'block';
        });
    }

    // Close modals
    if (closeButtons) {
        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                console.log('Close button clicked');
                if (loginModal) loginModal.style.display = 'none';
                if (signupModal) signupModal.style.display = 'none';
            });
        });
    }

    // Switch between modals
    if (showSignupLink && loginModal && signupModal) {
        showSignupLink.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Show signup link clicked');
            loginModal.style.display = 'none';
            signupModal.style.display = 'block';
        });
    }

    if (showLoginLink && loginModal && signupModal) {
        showLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Show login link clicked');
            signupModal.style.display = 'none';
            loginModal.style.display = 'block';
        });
    }

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            console.log('Clicked outside login modal');
            loginModal.style.display = 'none';
        }
        if (e.target === signupModal) {
            console.log('Clicked outside signup modal');
            signupModal.style.display = 'none';
        }
    });

    // Handle form submissions
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Login form submitted');
            // Add login logic here
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Signup form submitted');
            // Add signup logic here
        });
    }

    // Load featured tools
    if (featuredToolsContainer) {
        console.log('Loading featured tools...');
        // 获取所有工具并按评分排序
        const allTools = Object.values(toolsData).flat();
        const featuredTools = allTools
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 3);
        
        console.log('Featured tools:', featuredTools);
        featuredTools.forEach(tool => {
            const toolCard = document.createElement('div');
            toolCard.className = 'tool-card';
            toolCard.innerHTML = `
                <div class="tool-header">
                    <h3>${tool.name}</h3>
                    <span class="rating">${tool.rating} ⭐</span>
                </div>
                <p class="description">${tool.description}</p>
                <div class="features">
                    <h4>Key Features:</h4>
                    <ul>
                        ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="tool-footer">
                    <div class="tool-meta">
                        <span class="category">${tool.category}</span>
                        <span class="price">${tool.price}</span>
                    </div>
                    <a href="${tool.url}" target="_blank" class="visit-button">
                        <i class="fas fa-external-link-alt"></i>
                        Visit Website
                    </a>
                </div>
            `;
            featuredToolsContainer.appendChild(toolCard);
        });
    }

    // Handle category tab clicks
    if (categoryTabs && allToolsContainer) {
        console.log('Setting up category tabs...');
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                const category = tab.dataset.category;
                console.log('Category tab clicked:', category);
                
                // Remove active class from all tabs
                categoryTabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Get tools for selected category
                const categoryTools = toolsData[category]; // 使用本地变量
                
                if (categoryTools && Array.isArray(categoryTools)) {
                    // Clear container
                    allToolsContainer.innerHTML = '';
                    
                    // Render tools
                    categoryTools.forEach(tool => {
                        const toolCard = document.createElement('div');
                        toolCard.className = 'tool-card';
                        toolCard.innerHTML = `
                            <div class="tool-header">
                                <h3>${tool.name}</h3>
                                <span class="rating">${tool.rating} ⭐</span>
                            </div>
                            <p class="description">${tool.description}</p>
                            <div class="features">
                                <h4>Key Features:</h4>
                                <ul>
                                    ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="tool-footer">
                                <div class="tool-meta">
                                    <span class="category">${tool.category}</span>
                                    <span class="price">${tool.price}</span>
                                </div>
                                <a href="${tool.url}" target="_blank" class="visit-button">
                                    <i class="fas fa-external-link-alt"></i>
                                    Visit Website
                                </a>
                            </div>
                        `;
                        allToolsContainer.appendChild(toolCard);
                    });
                } else {
                    console.error('No tools found for category:', category);
                    allToolsContainer.innerHTML = '<p class="no-tools">No tools found for this category.</p>';
                }
            });
        });

        // Set first category as active by default
        if (categoryTabs.length > 0) {
            console.log('Setting first category as active...');
            categoryTabs[0].click();
        } else if (window.currentCategory) {
            // 如果是从分类页面进入，显示对应分类的工具
            console.log('Loading tools for category:', window.currentCategory);
            
            // 确定要加载的分类键名
            let categoryKey;
            switch(window.currentCategory) {
                case 'Text to Speech':
                    categoryKey = 'textToSpeech';
                    break;
                case 'Speech to Text':
                    categoryKey = 'speechToText';
                    break;
                case 'Audio Editing':
                    categoryKey = 'audioEditing';
                    break;
                case 'Music Generation':
                    categoryKey = 'musicGeneration';
                    break;
                case 'Voice Cloning':
                    categoryKey = 'voiceCloning';
                    break;
                default:
                    categoryKey = 'textToSpeech';
            }
            
            // 获取当前分类的工具
            const categoryTools = toolsData[categoryKey];
            console.log('Tools for category:', categoryTools);
            
            if (categoryTools && Array.isArray(categoryTools) && allToolsContainer) {
                // 渲染工具卡片
                categoryTools.forEach(tool => {
                    const toolCard = document.createElement('div');
                    toolCard.className = 'tool-card';
                    toolCard.innerHTML = `
                        <div class="tool-header">
                            <h3>${tool.name}</h3>
                            <span class="rating">${tool.rating} ⭐</span>
                        </div>
                        <p class="description">${tool.description}</p>
                        <div class="features">
                            <h4>Key Features:</h4>
                            <ul>
                                ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="tool-footer">
                            <div class="tool-meta">
                                <span class="category">${tool.category}</span>
                                <span class="price">${tool.price}</span>
                            </div>
                            <a href="${tool.url}" target="_blank" class="visit-button">
                                <i class="fas fa-external-link-alt"></i>
                                Visit Website
                            </a>
                        </div>
                    `;
                    allToolsContainer.appendChild(toolCard);
                });
            }
        }
    }

    // 渲染工具卡片的函数
    const renderToolCard = (tool) => {
        return `
            <div class="tool-card">
                <div class="tool-header">
                    <h3><a href="${tool.url}" target="_blank">${tool.name}</a></h3>
                    <div class="tool-meta">
                        <span class="rating"><i class="fas fa-star"></i> ${tool.rating}/5</span>
                        <span class="price">${tool.price}</span>
                    </div>
                </div>
                <p>${tool.description}</p>
                <div class="tool-features">
                    ${tool.features.map(feature => `<span>${feature}</span>`).join('')}
                </div>
                <div class="tool-actions">
                    <a href="${tool.url}" target="_blank" class="btn-view">Visit Website</a>
                </div>
            </div>
        `;
    };

    // 初始化工具卡片
    const initializeToolCards = () => {
        const categories = {
            'text-to-speech': toolsData.textToSpeech,
            'speech-to-text': toolsData.speechToText,
            'audio-editing': toolsData.audioEditing,
            'music-generation': toolsData.musicGeneration,
            'voice-cloning': toolsData.voiceCloning
        };

        Object.entries(categories).forEach(([categoryId, tools]) => {
            const toolsGrid = document.querySelector(`#${categoryId} .tools-grid`);
            if (toolsGrid && tools) {
                toolsGrid.innerHTML = tools.map(tool => renderToolCard(tool)).join('');
            }
        });
    };

    // 初始化展开/收起功能
    const initializeExpandButtons = () => {
        const moreButtons = document.querySelectorAll('.btn-more');
        moreButtons.forEach(button => {
            button.addEventListener('click', function() {
                const categorySection = this.closest('.category-section');
                categorySection.classList.toggle('expanded');
                
                if (categorySection.classList.contains('expanded')) {
                    this.innerHTML = 'Less <i class="fas fa-chevron-up"></i>';
                } else {
                    this.innerHTML = 'More <i class="fas fa-chevron-down"></i>';
                }
            });
        });
    };

    // 初始化所有功能
    initializeToolCards();
    initializeExpandButtons();
};

// 页面加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    initializePage();
}

// 主要的JavaScript功能
document.addEventListener('DOMContentLoaded', function() {
    console.log('页面加载完成');

    // 获取所有分类按钮
    const categoryButtons = document.querySelectorAll('.category-button');
    
    // 为每个按钮添加点击事件监听器
    categoryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            console.log('分类按钮被点击:', button.href);
        });
    });
});

// 模态框功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取模态框元素
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    const closeBtns = document.querySelectorAll('.close');
    const showSignupLink = document.getElementById('showSignup');
    const showLoginLink = document.getElementById('showLogin');

    // 打开登录模态框
    loginBtn.onclick = function() {
        loginModal.style.display = "block";
    }

    // 打开注册模态框
    signupBtn.onclick = function() {
        signupModal.style.display = "block";
    }

    // 关闭模态框
    closeBtns.forEach(btn => {
        btn.onclick = function() {
            loginModal.style.display = "none";
            signupModal.style.display = "none";
        }
    });

    // 在模态框外点击关闭
    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target == signupModal) {
            signupModal.style.display = "none";
        }
    }

    // 切换登录和注册模态框
    showSignupLink.onclick = function(e) {
        e.preventDefault();
        loginModal.style.display = "none";
        signupModal.style.display = "block";
    }

    showLoginLink.onclick = function(e) {
        e.preventDefault();
        signupModal.style.display = "none";
        loginModal.style.display = "block";
    }

    // 处理表单提交
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginForm.onsubmit = function(e) {
        e.preventDefault();
        // TODO: 实现登录逻辑
        console.log('登录表单提交');
    }

    signupForm.onsubmit = function(e) {
        e.preventDefault();
        // TODO: 实现注册逻辑
        console.log('注册表单提交');
    }
});

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有分类部分
    const categories = {
        'text-to-speech': toolsData.textToSpeech,
        'speech-to-text': toolsData.speechToText,
        'audio-editing': toolsData.audioEditing,
        'music-generation': toolsData.musicGeneration,
        'voice-cloning': toolsData.voiceCloning
    };

    // 为每个分类渲染工具卡片
    Object.entries(categories).forEach(([categoryId, tools]) => {
        const toolsGrid = document.querySelector(`#${categoryId} .tools-grid`);
        if (toolsGrid && tools) {
            tools.forEach(tool => {
                const toolCard = document.createElement('div');
                toolCard.className = 'tool-card';
                toolCard.innerHTML = `
                    <div class="tool-header">
                        <h3><a href="${tool.url}" target="_blank">${tool.name}</a></h3>
                        <div class="tool-meta">
                            <span class="rating"><i class="fas fa-star"></i> ${tool.rating}/5</span>
                            <span class="price">${tool.price}</span>
                        </div>
                    </div>
                    <p>${tool.description}</p>
                    <div class="tool-features">
                        ${tool.features.map(feature => `<span>${feature}</span>`).join('')}
                    </div>
                    <div class="tool-actions">
                        <a href="${tool.url}" target="_blank" class="btn-view">Visit Website</a>
                    </div>
                `;
                toolsGrid.appendChild(toolCard);
            });
        }
    });

    // 展开/收起功能
    const moreButtons = document.querySelectorAll('.btn-more');
    moreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const categorySection = this.closest('.category-section');
            categorySection.classList.toggle('expanded');
            
            if (categorySection.classList.contains('expanded')) {
                this.innerHTML = 'Less <i class="fas fa-chevron-up"></i>';
            } else {
                this.innerHTML = 'More <i class="fas fa-chevron-down"></i>';
            }
        });
    });
}); 
