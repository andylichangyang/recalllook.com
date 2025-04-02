export const tools = {
    speechSynthesis: [
        {
            name: "ElevenLabs",
            url: "https://elevenlabs.io/",
            description: "提供极其逼真的多语言AI语音合成，支持微妙的情感表达和语调控制。拥有大量预设声音，也支持声音克隆功能。适合有声书、配音和内容创作。",
            features: ["多语言支持", "情感表达", "声音克隆", "API集成"],
            category: "speechSynthesis",
            rating: 4.8,
            price: "subscription",
            dateAdded: "2024-01-01"
        },
        {
            name: "Play.ht",
            url: "https://play.ht/",
            description: "提供自然流畅的AI语音合成，支持多种语言和声音风格。界面友好，支持批量转换，可以调整语速、音调和停顿。",
            features: ["900+声音", "70+语言", "WordPress插件", "批量转换"],
            category: "speechSynthesis",
            rating: 4.6,
            price: "subscription",
            dateAdded: "2024-01-02"
        },
        {
            name: "Resemble.AI",
            url: "https://www.resemble.ai/",
            description: "专注于超真实的个性化AI声音克隆。允许用户上传自己的声音样本创建AI模型，提供情感和语调控制。",
            features: ["声音克隆", "实时生成", "企业级API", "安全保障"],
            category: "speechSynthesis",
            rating: 4.7,
            price: "subscription",
            dateAdded: "2024-01-03"
        },
        {
            name: "WellSaid Labs",
            url: "https://wellsaidlabs.com/",
            description: "面向企业的AI语音解决方案，提供高质量的商业级AI配音。拥有专业配音演员授权的AI声音，适合企业培训、营销和产品演示。",
            features: ["授权声音", "团队协作", "内容管理", "企业级安全"],
            category: "speechSynthesis",
            rating: 4.5,
            price: "subscription",
            dateAdded: "2024-01-04"
        },
        {
            name: "Murf.ai",
            url: "https://murf.ai/",
            description: "简单易用的工作室级别AI语音生成器，适合视频配音、演示和培训内容。提供多种声音风格和语言选择。",
            features: ["音频编辑", "背景音乐", "视频配音", "多语言支持"],
            category: "speechSynthesis",
            rating: 4.4,
            price: "subscription",
            dateAdded: "2024-01-05"
        },
        {
            name: "Coqui.ai",
            url: "https://coqui.ai/",
            description: "开源的语音合成技术，提供高质量的深度学习模型用于TTS(文本转语音)。适合开发者和研究人员定制语音应用。",
            features: ["开源社区", "多语言模型", "低资源支持", "开发者友好"],
            category: "speechSynthesis",
            rating: 4.3,
            price: "free",
            dateAdded: "2024-01-06"
        },
        {
            name: "Descript Overdub",
            url: "https://www.descript.com/overdub",
            description: "允许创建自己声音的AI复制品，主要用于音频内容的编辑和修正。用户可以通过打字修改已录制的音频内容。",
            features: ["声音克隆", "快速编辑", "错误修正", "平台集成"],
            category: "speechSynthesis",
            rating: 4.6,
            price: "subscription",
            dateAdded: "2024-01-07"
        },
        {
            name: "ReadSpeaker",
            url: "https://www.readspeaker.com/",
            description: "面向企业和教育机构的TTS服务，提供多种解决方案包括网站朗读、文档转换和嵌入式语音系统。",
            features: ["企业级服务", "多语言支持", "可访问性", "定制化服务"],
            category: "speechSynthesis",
            rating: 4.5,
            price: "subscription",
            dateAdded: "2024-01-08"
        },
        {
            name: "LOVO.ai",
            url: "https://lovo.ai/",
            description: "专注于商业级语音内容创作，提供AI配音和声音克隆服务。包含视频编辑功能，适合营销、教育和娱乐内容。",
            features: ["500+声音", "50+语言", "文本转视频", "团队协作"],
            category: "speechSynthesis",
            rating: 4.4,
            price: "subscription",
            dateAdded: "2024-01-09"
        }
    ],
    speechRecognition: [
        {
            name: "Deepgram",
            url: "https://deepgram.com/",
            description: "专注于实时高精度语音转文字技术，使用深度学习提供行业领先的准确率。支持噪音环境下的识别和多种专业术语。",
            features: ["实时转录", "自定义词汇", "说话人识别", "情感分析"],
            category: "speechRecognition",
            rating: 4.8,
            price: "pay-per-use",
            dateAdded: "2024-01-10"
        },
        {
            name: "AssemblyAI",
            url: "https://www.assemblyai.com/",
            description: "提供高级音频智能API，包括语音转文字、内容摘要、主题检测和情感分析。支持多种音频格式和实时处理。",
            features: ["自动标点", "脏话过滤", "章节分割", "说话人区分"],
            category: "speechRecognition",
            rating: 4.7,
            price: "pay-per-use",
            dateAdded: "2024-01-11"
        },
        {
            name: "Speechmatics",
            url: "https://www.speechmatics.com/",
            description: "支持多种语言和方言的语音识别技术，专注于全球化和多样性识别能力。适用于媒体监控、客服质检和合规记录。",
            features: ["30+语言", "方言识别", "本地部署", "企业级应用"],
            category: "speechRecognition",
            rating: 4.6,
            price: "subscription",
            dateAdded: "2024-01-12"
        },
        {
            name: "Whisper (OpenAI)",
            url: "https://github.com/openai/whisper",
            description: "开源的多语言语音识别系统，由OpenAI开发。支持多种语言转录和翻译，准确度较高，可免费下载和使用。",
            features: ["完全开源", "80+语言", "多种模型", "免费使用"],
            category: "speechRecognition",
            rating: 4.7,
            price: "free",
            dateAdded: "2024-01-13"
        },
        {
            name: "Picovoice",
            url: "https://picovoice.ai/",
            description: "提供本地设备上运行的语音识别，专注于离线和边缘设备应用。提供唤醒词检测、语音命令和语音助手开发工具。",
            features: ["离线运行", "隐私保护", "低资源消耗", "边缘计算"],
            category: "speechRecognition",
            rating: 4.5,
            price: "subscription",
            dateAdded: "2024-01-14"
        },
        {
            name: "Rev.ai",
            url: "https://www.rev.ai/",
            description: "专业的语音转文字API，由Rev转录服务提供技术支持。提供高准确度的自动转录，适合媒体、法律和教育领域。",
            features: ["异步API", "实时API", "自定义词汇", "专业术语"],
            category: "speechRecognition",
            rating: 4.6,
            price: "pay-per-use",
            dateAdded: "2024-01-15"
        },
        {
            name: "Voicegain",
            url: "https://www.voicegain.ai/",
            description: "实时语音识别和转录服务，专注于电话和客服场景。提供通话分析、关键词提取和质量监控功能。",
            features: ["实时分析", "通话分析", "关键词提取", "质量监控"],
            category: "speechRecognition",
            rating: 4.4,
            price: "subscription",
            dateAdded: "2024-01-16"
        },
        {
            name: "Vernacular.ai",
            url: "https://vernacular.ai/",
            description: "专注于多语言和方言识别，特别是印度和亚洲语言。提供语音机器人和对话式AI平台。",
            features: ["多语言支持", "方言识别", "语音机器人", "客服自动化"],
            category: "speechRecognition",
            rating: 4.3,
            price: "subscription",
            dateAdded: "2024-01-17"
        },
        {
            name: "Speechly",
            url: "https://www.speechly.com/",
            description: "为应用和网站提供语音UI开发工具，专注于自然对话体验和语音控制界面设计。",
            features: ["实时反馈", "混合界面", "开发工具包", "语音UI"],
            category: "speechRecognition",
            rating: 4.5,
            price: "subscription",
            dateAdded: "2024-01-18"
        }
    ],
    audioEditing: [
        {
            name: "Descript",
            url: "https://www.descript.com/",
            description: "基于AI的音频和视频编辑平台，允许像编辑文档一样编辑媒体。提供转录、音频去除、声音克隆和内容编辑功能。",
            features: ["文本编辑", "高质量转录", "自动移除填充词", "多人协作"],
            category: "audioEditing",
            rating: 4.7,
            price: "subscription",
            dateAdded: "2024-01-19"
        },
        {
            name: "Adobe Podcast",
            url: "https://podcast.adobe.com/",
            description: "带有增强功能的AI音频录制和编辑工具，由Adobe提供。具有录音增强、噪音消除和高级音频处理能力。",
            features: ["音频修复", "一键增强", "Creative Cloud集成", "专业工具"],
            category: "audioEditing",
            rating: 4.6,
            price: "subscription",
            dateAdded: "2024-01-20"
        },
        {
            name: "Auphonic",
            url: "https://auphonic.com/",
            description: "自动音频后期处理和优化工具，专注于均衡化音量、降噪和音频标准化。适合播客、广播和音乐制作。",
            features: ["批量处理", "自动优化", "多格式支持", "发布平台集成"],
            category: "audioEditing",
            rating: 4.5,
            price: "subscription",
            dateAdded: "2024-01-21"
        },
        {
            name: "iZotope RX",
            url: "https://www.izotope.com/en/products/rx.html",
            description: "专业的音频修复和增强软件，提供高级工具用于消除噪音、口哨声、咔哒声和其他音频问题。",
            features: ["视觉化编辑", "专业修复模块", "多轨处理", "批量处理"],
            category: "audioEditing",
            rating: 4.8,
            price: "paid",
            dateAdded: "2024-01-22"
        },
        {
            name: "Podcastle",
            url: "https://podcastle.ai/",
            description: "一体化播客制作工具，集录制、编辑、转录和增强功能于一体。适合播客创作者和内容制作人。",
            features: ["AI声音转换", "远程录制", "多轨编辑", "一键发布"],
            category: "audioEditing",
            rating: 4.4,
            price: "subscription",
            dateAdded: "2024-01-23"
        },
        {
            name: "Cleanvoice.ai",
            url: "https://cleanvoice.ai/",
            description: "自动删除口头禅和填充词的AI工具，专注于使播客和语音内容更专业流畅。自动识别和移除"嗯"、"啊"等填充词。",
            features: ["自动清理", "多语言支持", "专业质量", "快速处理"],
            category: "audioEditing",
            rating: 4.3,
            price: "subscription",
            dateAdded: "2024-01-24"
        },
        {
            name: "Krisp",
            url: "https://krisp.ai/",
            description: "噪音消除和音频增强工具，可实时消除背景噪音和回声。适用于视频会议、录音和直播场景。",
            features: ["实时处理", "多平台支持", "桌面应用", "浏览器插件"],
            category: "audioEditing",
            rating: 4.6,
            price: "subscription",
            dateAdded: "2024-01-25"
        },
        {
            name: "Soundraw",
            url: "https://soundraw.io/",
            description: "AI驱动的背景音乐制作工具，可根据情绪、风格和长度生成原创无版权音乐。适合视频创作者和内容制作人。",
            features: ["智能创作", "自定义结构", "无版权许可", "情绪匹配"],
            category: "audioEditing",
            rating: 4.5,
            price: "subscription",
            dateAdded: "2024-01-26"
        },
        {
            name: "Accusonus",
            url: "https://accusonus.com/",
            description: "专业的音频修复和增强插件，提供一系列工具用于旨在简化专业音频编辑流程。包括降噪、去混响和音频修复工具。",
            features: ["单旋钮界面", "DAW兼容", "专业工具", "快速修复"],
            category: "audioEditing",
            rating: 4.4,
            price: "paid",
            dateAdded: "2024-01-27"
        }
    ],
    musicGeneration: [
        {
            name: "AIVA",
            url: "https://www.aiva.ai/",
            description: "专注于情感驱动的AI音乐创作，可创作古典、电影配乐和现代风格的原创音乐。适用于电影、游戏和媒体制作。",
            features: ["情感驱动", "多风格支持", "商用版权", "MIDI导出"],
            category: "musicGeneration",
            rating: 4.7,
            price: "subscription",
            dateAdded: "2024-01-28"
        },
        {
            name: "Soundful",
            url: "https://soundful.com/",
            description: "专业品质的AI音乐生成平台，提供多种音乐风格和类型。生成的音乐质量接近专业制作水平，适合创作者和营销人员。",
            features: ["专业品质", "多风格支持", "商用授权", "自定义混音"],
            category: "musicGeneration",
            rating: 4.6,
            price: "subscription",
            dateAdded: "2024-01-29"
        },
        {
            name: "Amper Music",
            url: "https://www.ampermusic.com/",
            description: "面向创作者的AI作曲工具，允许用户通过选择风格、情绪和长度快速创建专业质量的音乐。已被集成到Shutterstock平台。",
            features: ["快速创作", "API集成", "细节调整", "高质量导出"],
            category: "musicGeneration",
            rating: 4.5,
            price: "subscription",
            dateAdded: "2024-01-30"
        },
        {
            name: "Ecrett Music",
            url: "https://ecrettmusic.com/",
            description: "基于场景和情绪创作音乐的AI工具，专为视频创作者设计。提供多种风格和场景预设，简化音乐选择过程。",
            features: ["场景导向", "自定义长度", "商用许可", "情绪匹配"],
            category: "musicGeneration",
            rating: 4.4,
            price: "subscription",
            dateAdded: "2024-01-31"
        },
        {
            name: "MuseNet",
            url: "https://openai.com/research/musenet",
            description: "可生成多种风格和乐器组合的深度学习模型，由OpenAI开发。能够创作长达4分钟的多乐器音乐作品。",
            features: ["多风格混合", "作曲家风格", "开放研究", "多乐器支持"],
            category: "musicGeneration",
            rating: 4.6,
            price: "free",
            dateAdded: "2024-02-01"
        },
        {
            name: "Boomy",
            url: "https://boomy.com/",
            description: "让任何人都能创作原创音乐的AI工具，无需音乐理论知识。用户可以生成、编辑并发布音乐到流媒体平台。",
            features: ["简单创作", "流媒体发布", "版税分成", "快速生成"],
            category: "musicGeneration",
            rating: 4.3,
            price: "subscription",
            dateAdded: "2024-02-02"
        },
        {
            name: "Beatoven.ai",
            url: "https://www.beatoven.ai/",
            description: "为视频和播客创建版权无忧背景音乐，专注于情感和叙事驱动的音乐生成。提供与视频时间线同步的音乐创作。",
            features: ["情感映射", "多风格选择", "版权无忧", "时间线同步"],
            category: "musicGeneration",
            rating: 4.4,
            price: "subscription",
            dateAdded: "2024-02-03"
        },
        {
            name: "Soundraw.io",
            url: "https://soundraw.io/",
            description: "根据情绪和风格生成独特音乐，专为内容创作者设计。提供高质量、无版权的背景音乐解决方案。",
            features: ["智能生成", "实时预览", "商用授权", "情绪匹配"],
            category: "musicGeneration",
            rating: 4.5,
            price: "subscription",
            dateAdded: "2024-02-04"
        },
        {
            name: "Mubert",
            url: "https://mubert.com/",
            description: "提供无限AI音乐流和生成API，专注于生成式环境音乐和背景音乐。支持应用程序、游戏和交互式媒体集成。",
            features: ["流媒体服务", "API支持", "实时生成", "交互式媒体"],
            category: "musicGeneration",
            rating: 4.3,
            price: "subscription",
            dateAdded: "2024-02-05"
        },
        {
            name: "Melodrive",
            url: "https://melodrive.com/",
            description: "自适应和情感化的音乐生成引擎，专为游戏和交互式媒体设计。音乐可根据游戏状态和玩家情绪实时变化。",
            features: ["情绪反应", "游戏引擎集成", "实时变化", "交互式设计"],
            category: "musicGeneration",
            rating: 4.4,
            price: "subscription",
            dateAdded: "2024-02-06"
        }
    ],
    voiceCloning: [
        {
            name: "Voice.ai",
            url: "https://voice.ai/",
            description: "实时声音转换和克隆工具，可以在通话和直播中模仿名人声音或创建自定义声音。支持实时转换和多种声音预设。",
            features: ["实时转换", "名人声音", "流媒体集成", "自定义声音"],
            category: "voiceCloning",
            rating: 4.6,
            price: "subscription",
            dateAdded: "2024-02-07"
        },
        {
            name: "Respeecher",
            url: "https://www.respeecher.com/",
            description: "专业级声音克隆技术，被好莱坞电影和大型制作公司使用。可以重现历史人物和名人的声音，用于电影和媒体制作。",
            features: ["高质量复制", "定制模型", "法律保障", "专业级服务"],
            category: "voiceCloning",
            rating: 4.8,
            price: "paid",
            dateAdded: "2024-02-08"
        },
        {
            name: "Voicemod",
            url: "https://www.voicemod.net/",
            description: "实时语音变声器和声音克隆工具，适用于游戏、直播和在线交流。提供多种预设声音效果和名人模仿声音。",
            features: ["实时变声", "名人模仿", "游戏集成", "多平台支持"],
            category: "voiceCloning",
            rating: 4.5,
            price: "subscription",
            dateAdded: "2024-02-09"
        },
        {
            name: "FakeYou",
            url: "https://fakeyou.com/",
            description: "提供大量名人、角色和虚构人物的声音克隆。用户可以输入文本，用选定的声音生成语音内容。",
            features: ["庞大声音库", "角色声音", "快速生成", "文本转语音"],
            category: "voiceCloning",
            rating: 4.4,
            price: "subscription",
            dateAdded: "2024-02-10"
        },
        {
            name: "Vocodes",
            url: "https://vocodes.com/",
            description: "文本到名人语音的转换工具，提供大量公众人物和虚构角色的声音选择。简单的界面允许快速创建模仿内容。",
            features: ["名人语音", "快速创建", "简单界面", "分享功能"],
            category: "voiceCloning",
            rating: 4.3,
            price: "subscription",
            dateAdded: "2024-02-11"
        },
        {
            name: "15.ai",
            url: "https://15.ai/",
            description: "专注于动漫、游戏和流行文化角色声音的克隆工具。可以生成这些角色说出用户提供的任何文本。",
            features: ["免费使用", "高质量生成", "角色声音", "粉丝创作"],
            category: "voiceCloning",
            rating: 4.5,
            price: "free",
            dateAdded: "2024-02-12"
        },
        {
            name: "Voice Cloning App by Listnr",
            url: "https://listnr.ai/voice-cloning",
            description: "允许用户通过提供短音频样本来克隆自己或他人的声音。适用于内容创作、有声书和视频配音。",
            features: ["快速克隆", "多语言支持", "情感控制", "内容创作"],
            category: "voiceCloning",
            rating: 4.4,
            price: "subscription",
            dateAdded: "2024-02-13"
        },
        {
            name: "Uberduck",
            url: "https://uberduck.ai/",
            description: "提供广泛的名人和角色声音库，并支持自定义声音模型训练。具有API接口，适合开发者集成。",
            features: ["声音训练", "API接口", "批量生成", "项目管理"],
            category: "voiceCloning",
            rating: 4.3,
            price: "subscription",
            dateAdded: "2024-02-14"
        },
        {
            name: "Kits.ai",
            url: "https://kits.ai/",
            description: "专注于个人声音克隆技术，允许用户创建自己声音的数字副本，用于内容创作和个人项目。",
            features: ["个人克隆", "自然声音", "隐私保护", "内容创作"],
            category: "voiceCloning",
            rating: 4.4,
            price: "subscription",
            dateAdded: "2024-02-15"
        }
    ]
}; 
