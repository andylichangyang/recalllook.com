const toolsData = {
    "speech-synthesis": [
        {
            name: "ElevenLabs",
            url: "https://elevenlabs.io/",
            description: "提供极其逼真的多语言AI语音合成，支持微妙的情感表达和语调控制。拥有大量预设声音，也支持声音克隆功能。适合有声书、配音和内容创作。",
            features: "支持超过29种语言，语音自然度行业领先，提供API集成选项。",
            category: "speech-synthesis",
            rating: 4.8,
            price: "subscription"
        },
        {
            name: "Play.ht",
            url: "https://play.ht/",
            description: "提供自然流畅的AI语音合成，支持多种语言和声音风格。界面友好，支持批量转换，可以调整语速、音调和停顿。",
            features: "提供900多种声音和支持70多种语言，有WordPress插件，适合内容创作者和营销人员。",
            category: "speech-synthesis",
            rating: 4.6,
            price: "subscription"
        },
        {
            name: "Resemble.AI",
            url: "https://www.resemble.ai/",
            description: "专注于超真实的个性化AI声音克隆。允许用户上传自己的声音样本创建AI模型，提供情感和语调控制。",
            features: "具有先进的声音克隆技术，支持实时语音生成，提供企业级API和安全保障。",
            category: "speech-synthesis",
            rating: 4.7,
            price: "subscription"
        },
        {
            name: "WellSaid Labs",
            url: "https://wellsaidlabs.com/",
            description: "面向企业的AI语音解决方案，提供高质量的商业级AI配音。拥有专业配音演员授权的AI声音，适合企业培训、营销和产品演示。",
            features: "所有声音均经过授权，支持团队协作功能，提供内容管理系统和企业级安全保障。",
            category: "speech-synthesis",
            rating: 4.5,
            price: "subscription"
        },
        {
            name: "Murf.ai",
            url: "https://murf.ai/",
            description: "简单易用的工作室级别AI语音生成器，适合视频配音、演示和培训内容。提供多种声音风格和语言选择。",
            features: "提供音频编辑工具，支持添加背景音乐，有视频配音功能，界面简洁直观。",
            category: "speech-synthesis",
            rating: 4.4,
            price: "subscription"
        },
        {
            name: "Coqui.ai",
            url: "https://coqui.ai/",
            description: "开源的语音合成技术，提供高质量的深度学习模型用于TTS(文本转语音)。适合开发者和研究人员定制语音应用。",
            features: "开源社区支持，提供多种语言模型，支持低资源语言的语音合成，适合技术团队。",
            category: "speech-synthesis",
            rating: 4.3,
            price: "free"
        },
        {
            name: "Descript Overdub",
            url: "https://www.descript.com/overdub",
            description: "允许创建自己声音的AI复制品，主要用于音频内容的编辑和修正。用户可以通过打字修改已录制的音频内容。",
            features: "与Descript音频/视频编辑平台完全集成，支持快速编辑和错误修正，适合播客制作者和内容创作者。",
            category: "speech-synthesis",
            rating: 4.5,
            price: "subscription"
        },
        {
            name: "ReadSpeaker",
            url: "https://www.readspeaker.com/",
            description: "面向企业和教育机构的TTS服务，提供多种解决方案包括网站朗读、文档转换和嵌入式语音系统。",
            features: "25年行业经验，多语言支持，专注可访问性解决方案，为大型组织提供定制化服务。",
            category: "speech-synthesis",
            rating: 4.2,
            price: "subscription"
        },
        {
            name: "LOVO.ai",
            url: "https://lovo.ai/",
            description: "专注于商业级语音内容创作，提供AI配音和声音克隆服务。包含视频编辑功能，适合营销、教育和娱乐内容。",
            features: "拥有超过500种AI声音，支持50多种语言，提供文本转视频功能和团队协作工具。",
            category: "speech-synthesis",
            rating: 4.4,
            price: "subscription"
        }
    ],
    "speech-recognition": [
        {
            name: "Deepgram",
            url: "https://deepgram.com/",
            description: "专注于实时高精度语音转文字技术，使用深度学习提供行业领先的准确率。支持噪音环境下的识别和多种专业术语。",
            features: "实时转录能力强，支持自定义词汇和行业术语，提供说话人识别和情感分析功能。",
            category: "speech-recognition",
            rating: 4.8,
            price: "subscription"
        },
        {
            name: "AssemblyAI",
            url: "https://www.assemblyai.com/",
            description: "提供高级音频智能API，包括语音转文字、内容摘要、主题检测和情感分析。支持多种音频格式和实时处理。",
            features: "提供强大的后处理功能如自动标点、脏话过滤、章节分割、说话人区分等高级功能。",
            category: "speech-recognition",
            rating: 4.7,
            price: "subscription"
        },
        {
            name: "Speechmatics",
            url: "https://www.speechmatics.com/",
            description: "支持多种语言和方言的语音识别技术，专注于全球化和多样性识别能力。适用于媒体监控、客服质检和合规记录。",
            features: "支持超过30种语言，具有方言和口音识别能力，提供本地部署选项，适合企业级应用。",
            category: "speech-recognition",
            rating: 4.6,
            price: "subscription"
        },
        {
            name: "Whisper (OpenAI)",
            url: "https://github.com/openai/whisper",
            description: "开源的多语言语音识别系统，由OpenAI开发。支持多种语言转录和翻译，准确度较高，可免费下载和使用。",
            features: "完全开源，支持80多种语言，提供多种模型大小选择，适合研究和开发使用。",
            category: "speech-recognition",
            rating: 4.7,
            price: "free"
        },
        {
            name: "Picovoice",
            url: "https://picovoice.ai/",
            description: "提供本地设备上运行的语音识别，专注于离线和边缘设备应用。提供唤醒词检测、语音命令和语音助手开发工具。",
            features: "完全离线运行，保护隐私，低资源消耗，适合IoT设备和嵌入式系统。",
            category: "speech-recognition",
            rating: 4.5,
            price: "subscription"
        },
        {
            name: "Rev.ai",
            url: "https://www.rev.ai/",
            description: "专业的语音转文字API，由Rev转录服务提供技术支持。提供高准确度的自动转录，适合媒体、法律和教育领域。",
            features: "提供异步和实时API，支持自定义词汇表，具有出色的专业术语识别能力。",
            category: "speech-recognition",
            rating: 4.6,
            price: "subscription"
        },
        {
            name: "Voicegain",
            url: "https://www.voicegain.ai/",
            description: "实时语音识别和转录服务，专注于电话和客服场景。提供通话分析、关键词提取和质量监控功能。",
            features: "提供实时分析Dashboard，支持法规遵从功能，适合呼叫中心和客户服务场景。",
            category: "speech-recognition",
            rating: 4.4,
            price: "subscription"
        },
        {
            name: "Vernacular.ai",
            url: "https://vernacular.ai/",
            description: "专注于多语言和方言识别，特别是印度和亚洲语言。提供语音机器人和对话式AI平台。",
            features: "支持多种地区语言和方言，具有语境理解能力，提供完整的客服自动化解决方案。",
            category: "speech-recognition",
            rating: 4.3,
            price: "subscription"
        },
        {
            name: "Speechly",
            url: "https://www.speechly.com/",
            description: "为应用和网站提供语音UI开发工具，专注于自然对话体验和语音控制界面设计。",
            features: "提供实时反馈，支持混合语音和触摸界面，有完整的开发工具包，适合创建语音驱动的用户体验。",
            category: "speech-recognition",
            rating: 4.5,
            price: "subscription"
        }
    ],
    "audio-editing": [
        {
            name: "Descript",
            url: "https://www.descript.com/",
            description: "基于AI的音频和视频编辑平台，允许像编辑文档一样编辑媒体。提供转录、音频去除、声音克隆和内容编辑功能。",
            features: "文本编辑式的音频/视频编辑界面，提供高质量转录，自动移除填充词，支持多人协作。",
            category: "audio-editing",
            rating: 4.7,
            price: "subscription"
        },
        {
            name: "Adobe Podcast",
            url: "https://podcast.adobe.com/",
            description: "带有增强功能的AI音频录制和编辑工具，由Adobe提供。具有录音增强、噪音消除和高级音频处理能力。",
            features: "强大的音频修复功能，一键式音质增强，与Adobe Creative Cloud生态系统集成。",
            category: "audio-editing",
            rating: 4.6,
            price: "subscription"
        },
        {
            name: "Auphonic",
            url: "https://auphonic.com/",
            description: "自动音频后期处理和优化工具，专注于均衡化音量、降噪和音频标准化。适合播客、广播和音乐制作。",
            features: "批量处理能力，自动音频优化算法，支持多种输出格式和发布平台。",
            category: "audio-editing",
            rating: 4.5,
            price: "subscription"
        },
        {
            name: "iZotope RX",
            url: "https://www.izotope.com/en/products/rx.html",
            description: "专业的音频修复和增强软件，提供高级工具用于消除噪音、口哨声、咔哒声和其他音频问题。",
            features: "业界标准的音频修复工具，提供视觉化音频编辑，具有多种专业修复模块，适合影视后期和音频工程师。",
            category: "audio-editing",
            rating: 4.8,
            price: "paid"
        },
        {
            name: "Podcastle",
            url: "https://podcastle.ai/",
            description: "一体化播客制作工具，集录制、编辑、转录和增强功能于一体。适合播客创作者和内容制作人。",
            features: "提供AI驱动的声音转换，远程录制功能，多轨编辑，以及一键式发布工具。",
            category: "audio-editing",
            rating: 4.4,
            price: "subscription"
        },
        {
            name: "Cleanvoice.ai",
            url: "https://cleanvoice.ai/",
            description: "自动删除口头禅和填充词的AI工具，专注于使播客和语音内容更专业流畅。自动识别和移除"嗯"、"啊"等填充词。",
            features: "简单的上传处理流程，无需手动编辑即可获得专业质量，支持多种语言的填充词检测。",
            category: "audio-editing",
            rating: 4.3,
            price: "subscription"
        },
        {
            name: "Krisp",
            url: "https://krisp.ai/",
            description: "噪音消除和音频增强工具，可实时消除背景噪音和回声。适用于视频会议、录音和直播场景。",
            features: "实时处理能力，与主流通讯软件兼容，提供桌面应用程序和浏览器插件。",
            category: "audio-editing",
            rating: 4.5,
            price: "subscription"
        },
        {
            name: "Soundraw",
            url: "https://soundraw.io/",
            description: "AI驱动的背景音乐制作工具，可根据情绪、风格和长度生成原创无版权音乐。适合视频创作者和内容制作人。",
            features: "智能音乐创作界面，可自定义音乐结构，提供无限制使用的许可模式。",
            category: "audio-editing",
            rating: 4.4,
            price: "subscription"
        },
        {
            name: "Accusonus",
            url: "https://accusonus.com/",
            description: "专业的音频修复和增强插件，提供一系列工具用于旨在简化专业音频编辑流程。包括降噪、去混响和音频修复工具。",
            features: "单旋钮界面设计，易于使用，兼容主流DAW软件，适合音频专业人士和内容创作者。",
            category: "audio-editing",
            rating: 4.6,
            price: "subscription"
        }
    ],
    "music-generation": [
        {
            name: "AIVA (AI Virtual Artist)",
            url: "https://www.aiva.ai/",
            description: "专注于情感驱动的AI音乐创作，可创作古典、电影配乐和现代风格的原创音乐。适用于电影、游戏和媒体制作。",
            features: "支持自定义主题和风格，提供可商用版权，允许下载MIDI文件进行进一步编辑。",
            category: "music-generation",
            rating: 4.7,
            price: "subscription"
        },
        {
            name: "Soundful",
            url: "https://soundful.com/",
            description: "专业品质的AI音乐生成平台，提供多种音乐风格和类型。生成的音乐质量接近专业制作水平，适合创作者和营销人员。",
            features: "直观的音乐生成界面，提供完全授权使用权，支持自定义混音和导出高质量音频。",
            category: "music-generation",
            rating: 4.6,
            price: "subscription"
        },
        {
            name: "Amper Music",
            url: "https://www.ampermusic.com/",
            description: "面向创作者的AI作曲工具，允许用户通过选择风格、情绪和长度快速创建专业质量的音乐。已被集成到Shutterstock平台。",
            features: "专注于媒体制作工作流程，提供API集成选项，支持细节调整和高质量导出。",
            category: "music-generation",
            rating: 4.5,
            price: "subscription"
        },
        {
            name: "Ecrett Music",
            url: "https://ecrettmusic.com/",
            description: "基于场景和情绪创作音乐的AI工具，专为视频创作者设计。提供多种风格和场景预设，简化音乐选择过程。",
            features: "场景导向的音乐创作界面，支持音乐长度和结构自定义，提供商业使用许可。",
            category: "music-generation",
            rating: 4.4,
            price: "subscription"
        },
        {
            name: "MuseNet (OpenAI)",
            url: "https://openai.com/research/musenet",
            description: "可生成多种风格和乐器组合的深度学习模型，由OpenAI开发。能够创作长达4分钟的多乐器音乐作品。",
            features: "支持多种音乐风格混合，可模仿特定作曲家风格，提供开放研究访问。",
            category: "music-generation",
            rating: 4.6,
            price: "free"
        },
        {
            name: "Boomy",
            url: "https://boomy.com/",
            description: "让任何人都能创作原创音乐的AI工具，无需音乐理论知识。用户可以生成、编辑并发布音乐到流媒体平台。",
            features: "简单的创作流程，支持歌曲发行到Spotify等平台，提供版税分成模式。",
            category: "music-generation",
            rating: 4.3,
            price: "subscription"
        },
        {
            name: "Beatoven.ai",
            url: "https://www.beatoven.ai/",
            description: "为视频和播客创建版权无忧背景音乐，专注于情感和叙事驱动的音乐生成。提供与视频时间线同步的音乐创作。",
            features: "支持音乐情感映射到内容情节，提供多种风格选择，适合视频创作者和讲故事者。",
            category: "music-generation",
            rating: 4.4,
            price: "subscription"
        },
        {
            name: "Soundraw.io",
            url: "https://soundraw.io/",
            description: "根据情绪和风格生成独特音乐，专为内容创作者设计。提供高质量、无版权的背景音乐解决方案。",
            features: "智能音乐生成引擎，支持实时预览和调整，提供完整商业使用权。",
            category: "music-generation",
            rating: 4.5,
            price: "subscription"
        },
        {
            name: "Mubert",
            url: "https://mubert.com/",
            description: "提供无限AI音乐流和生成API，专注于生成式环境音乐和背景音乐。支持应用程序、游戏和交互式媒体集成。",
            features: "提供流媒体和API服务，支持实时音乐生成，适合开发者和创意项目。",
            category: "music-generation",
            rating: 4.3,
            price: "subscription"
        },
        {
            name: "Melodrive",
            url: "https://melodrive.com/",
            description: "自适应和情感化的音乐生成引擎，专为游戏和交互式媒体设计。音乐可根据游戏状态和玩家情绪实时变化。",
            features: "提供情绪反应式音乐系统，支持游戏引擎集成，适合游戏开发者和交互式内容创作者。",
            category: "music-generation",
            rating: 4.4,
            price: "subscription"
        }
    ],
    "voice-cloning": [
        {
            name: "Voice.ai",
            url: "https://voice.ai/",
            description: "实时声音转换和克隆工具，可以在通话和直播中模仿名人声音或创建自定义声音。支持实时转换和多种声音预设。",
            features: "实时性能优秀，提供名人声音预设，可集成到流媒体和通话应用中。",
            category: "voice-cloning",
            rating: 4.6,
            price: "subscription"
        },
        {
            name: "Respeecher",
            url: "https://www.respeecher.com/",
            description: "专业级声音克隆技术，被好莱坞电影和大型制作公司使用。可以重现历史人物和名人的声音，用于电影和媒体制作。",
            features: "超高质量的声音复制技术，支持定制声音模型，提供完整的许可和法律保障框架。",
            category: "voice-cloning",
            rating: 4.8,
            price: "subscription"
        },
        {
            name: "Voicemod",
            url: "https://www.voicemod.net/",
            description: "实时语音变声器和声音克隆工具，适用于游戏、直播和在线交流。提供多种预设声音效果和名人模仿声音。",
            features: "用户友好的界面，提供免费和高级版本，与流行游戏和通讯平台集成良好。",
            category: "voice-cloning",
            rating: 4.5,
            price: "subscription"
        },
        {
            name: "FakeYou",
            url: "https://fakeyou.com/",
            description: "提供大量名人、角色和虚构人物的声音克隆。用户可以输入文本，用选定的声音生成语音内容。",
            features: "拥有庞大的声音库，包含电影角色、政治人物、名人和动画角色等数千种声音。",
            category: "voice-cloning",
            rating: 4.4,
            price: "subscription"
        },
        {
            name: "Vocodes",
            url: "https://vocodes.com/",
            description: "文本到名人语音的转换工具，提供大量公众人物和虚构角色的声音选择。简单的界面允许快速创建模仿内容。",
            features: "直观的网页界面，无需注册即可使用基本功能，支持分享生成的音频。",
            category: "voice-cloning",
            rating: 4.3,
            price: "subscription"
        },
        {
            name: "15.ai",
            url: "https://15.ai/",
            description: "专注于动漫、游戏和流行文化角色声音的克隆工具。可以生成这些角色说出用户提供的任何文本。",
            features: "完全免费使用，语音生成质量高，特别适合粉丝创作和内容创作者。",
            category: "voice-cloning",
            rating: 4.5,
            price: "free"
        },
        {
            name: "Voice Cloning App by Listnr",
            url: "https://listnr.ai/voice-cloning",
            description: "允许用户通过提供短音频样本来克隆自己或他人的声音。适用于内容创作、有声书和视频配音。",
            features: "仅需少量录音即可创建高质量声音模型，支持多语言和情感控制。",
            category: "voice-cloning",
            rating: 4.4,
            price: "subscription"
        },
        {
            name: "Uberduck",
            url: "https://uberduck.ai/",
            description: "提供广泛的名人和角色声音库，并支持自定义声音模型训练。具有API接口，适合开发者集成。",
            features: "开发者友好的平台，提供声音训练工具，支持批量生成和项目管理功能。",
            category: "voice-cloning",
            rating: 4.5,
            price: "subscription"
        },
        {
            name: "Kits.ai",
            url: "https://kits.ai/",
            description: "专注于个人声音克隆技术，允许用户创建自己声音的数字副本，用于内容创作和个人项目。",
            features: "提供高度自然的声音克隆结果，简化的用户界面，以及严格的隐私保护政策。",
            category: "voice-cloning",
            rating: 4.4,
            price: "subscription"
        }
    ]
};

export default toolsData; 
