const tools = {
    textToSpeech: [
        {
            id: "tts-1",
            name: "ElevenLabs",
            url: "https://elevenlabs.io/",
            description: "Provides extremely realistic multilingual AI voice synthesis with subtle emotional expression and tone control.",
            features: ["29+ languages", "Industry-leading naturalness", "API integration"],
            category: "Text to Speech",
            rating: 4.9,
            price: "Paid",
            dateAdded: "2024-01-01"
        },
        {
            id: "tts-2",
            name: "Play.ht",
            url: "https://play.ht/",
            description: "Offers natural and fluid AI voice synthesis supporting multiple languages and voice styles.",
            features: ["900+ voices", "70+ languages", "WordPress plugin"],
            category: "Text to Speech",
            rating: 4.7,
            price: "Paid",
            dateAdded: "2024-01-02"
        },
        {
            id: "tts-3",
            name: "Murf.ai",
            url: "https://murf.ai/",
            description: "Professional-grade AI voice generator with studio-quality output and extensive voice library.",
            features: ["120+ voices", "Voice cloning", "Custom voice creation"],
            category: "Text to Speech",
            rating: 4.8,
            price: "Paid",
            dateAdded: "2024-01-03"
        },
        {
            id: "tts-4",
            name: "Amazon Polly",
            url: "https://aws.amazon.com/polly/",
            description: "Cloud-based text-to-speech service with neural TTS technology and multiple languages.",
            features: ["Neural TTS", "SSML support", "Real-time streaming"],
            category: "Text to Speech",
            rating: 4.6,
            price: "Paid",
            dateAdded: "2024-01-04"
        },
        {
            id: "tts-5",
            name: "Google Cloud Text-to-Speech",
            url: "https://cloud.google.com/text-to-speech",
            description: "Advanced text-to-speech service with WaveNet voices and multiple languages.",
            features: ["WaveNet voices", "Multiple languages", "Custom voice training"],
            category: "Text to Speech",
            rating: 4.7,
            price: "Paid",
            dateAdded: "2024-01-05"
        },
        {
            id: "tts-6",
            name: "Microsoft Azure Speech Service",
            url: "https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech/",
            description: "Enterprise-grade text-to-speech service with neural voices and SSML support.",
            features: ["Neural voices", "SSML support", "Custom voice training"],
            category: "Text to Speech",
            rating: 4.6,
            price: "Paid",
            dateAdded: "2024-01-06"
        },
        {
            id: "tts-7",
            name: "Coqui TTS",
            url: "https://coqui.ai/",
            description: "Open-source text-to-speech toolkit with state-of-the-art models.",
            features: ["Open source", "Multiple models", "Custom training"],
            category: "Text to Speech",
            rating: 4.5,
            price: "Free",
            dateAdded: "2024-01-07"
        },
        {
            id: "tts-8",
            name: "Resemble AI",
            url: "https://www.resemble.ai/",
            description: "AI voice generator with custom voice creation and real-time synthesis.",
            features: ["Custom voices", "Real-time synthesis", "API access"],
            category: "Text to Speech",
            rating: 4.7,
            price: "Paid",
            dateAdded: "2024-01-08"
        }
    ],
    speechToText: [
        {
            id: "stt-1",
            name: "Deepgram",
            url: "https://deepgram.com/",
            description: "Focuses on real-time high-precision speech-to-text technology with industry-leading accuracy.",
            features: ["Real-time transcription", "Custom vocabulary", "Speaker identification"],
            category: "Speech to Text",
            rating: 4.8,
            price: "Paid",
            dateAdded: "2024-01-09"
        },
        {
            id: "stt-2",
            name: "AssemblyAI",
            url: "https://www.assemblyai.com/",
            description: "Provides advanced audio intelligence APIs including speech-to-text, content summarization, and sentiment analysis.",
            features: ["Auto-punctuation", "Content moderation", "Speaker diarization"],
            category: "Speech to Text",
            rating: 4.7,
            price: "Paid",
            dateAdded: "2024-01-10"
        },
        {
            id: "stt-3",
            name: "Google Cloud Speech-to-Text",
            url: "https://cloud.google.com/speech-to-text",
            description: "Advanced speech recognition service with support for multiple languages and custom models.",
            features: ["Multiple languages", "Custom models", "Real-time streaming"],
            category: "Speech to Text",
            rating: 4.8,
            price: "Paid",
            dateAdded: "2024-01-11"
        },
        {
            id: "stt-4",
            name: "Microsoft Azure Speech Service",
            url: "https://azure.microsoft.com/en-us/services/cognitive-services/speech-to-text/",
            description: "Enterprise-grade speech recognition service with custom models and real-time transcription.",
            features: ["Custom models", "Real-time transcription", "Multiple languages"],
            category: "Speech to Text",
            rating: 4.7,
            price: "Paid",
            dateAdded: "2024-01-12"
        },
        {
            id: "stt-5",
            name: "Rev.ai",
            url: "https://www.rev.ai/",
            description: "Professional speech-to-text service with human-level accuracy and custom vocabulary support.",
            features: ["Human-level accuracy", "Custom vocabulary", "Multiple languages"],
            category: "Speech to Text",
            rating: 4.6,
            price: "Paid",
            dateAdded: "2024-01-13"
        },
        {
            id: "stt-6",
            name: "Otter.ai",
            url: "https://otter.ai/",
            description: "AI-powered meeting assistant with real-time transcription and speaker identification.",
            features: ["Real-time transcription", "Speaker identification", "Meeting summaries"],
            category: "Speech to Text",
            rating: 4.7,
            price: "Paid",
            dateAdded: "2024-01-14"
        },
        {
            id: "stt-7",
            name: "Sonix",
            url: "https://sonix.ai/",
            description: "Automated transcription service with support for multiple languages and custom vocabulary.",
            features: ["Multiple languages", "Custom vocabulary", "Subtitle generation"],
            category: "Speech to Text",
            rating: 4.6,
            price: "Paid",
            dateAdded: "2024-01-15"
        },
        {
            id: "stt-8",
            name: "Whisper AI",
            url: "https://openai.com/research/whisper",
            description: "Open-source speech recognition model with support for multiple languages.",
            features: ["Open source", "Multiple languages", "High accuracy"],
            category: "Speech to Text",
            rating: 4.5,
            price: "Free",
            dateAdded: "2024-01-16"
        }
    ],
    audioEditing: [
        {
            id: "ae-1",
            name: "Descript",
            url: "https://www.descript.com/",
            description: "AI-powered audio and video editing platform that allows editing media like a document.",
            features: ["Text-based editing", "High-quality transcription", "Auto-remove filler words"],
            category: "Audio Editing",
            rating: 4.8,
            price: "Paid",
            dateAdded: "2024-01-17"
        },
        {
            id: "ae-2",
            name: "Adobe Podcast",
            url: "https://podcast.adobe.com/",
            description: "AI audio recording and editing tool with enhanced features from Adobe.",
            features: ["Audio repair", "One-click enhancement", "Adobe Creative Cloud integration"],
            category: "Audio Editing",
            rating: 4.6,
            price: "Paid",
            dateAdded: "2024-01-18"
        },
        {
            id: "ae-3",
            name: "Audacity",
            url: "https://www.audacityteam.org/",
            description: "Free, open-source audio editor with professional-grade features.",
            features: ["Open source", "Multiple effects", "Multi-track editing"],
            category: "Audio Editing",
            rating: 4.5,
            price: "Free",
            dateAdded: "2024-01-19"
        },
        {
            id: "ae-4",
            name: "Pro Tools",
            url: "https://www.avid.com/pro-tools",
            description: "Industry-standard digital audio workstation for professional audio production.",
            features: ["Professional-grade", "Advanced plugins", "Industry standard"],
            category: "Audio Editing",
            rating: 4.9,
            price: "Paid",
            dateAdded: "2024-01-20"
        },
        {
            id: "ae-5",
            name: "Logic Pro",
            url: "https://www.apple.com/logic-pro/",
            description: "Professional audio production software for Mac with advanced features.",
            features: ["Professional tools", "Virtual instruments", "Advanced mixing"],
            category: "Audio Editing",
            rating: 4.8,
            price: "Paid",
            dateAdded: "2024-01-21"
        },
        {
            id: "ae-6",
            name: "FL Studio",
            url: "https://www.image-line.com/",
            description: "Popular digital audio workstation with comprehensive production tools.",
            features: ["Comprehensive tools", "Plugin support", "Pattern-based workflow"],
            category: "Audio Editing",
            rating: 4.7,
            price: "Paid",
            dateAdded: "2024-01-22"
        },
        {
            id: "ae-7",
            name: "Ableton Live",
            url: "https://www.ableton.com/",
            description: "Real-time music production and performance software.",
            features: ["Real-time performance", "Session view", "Live instruments"],
            category: "Audio Editing",
            rating: 4.8,
            price: "Paid",
            dateAdded: "2024-01-23"
        },
        {
            id: "ae-8",
            name: "Reaper",
            url: "https://www.reaper.fm/",
            description: "Affordable digital audio workstation with professional features.",
            features: ["Affordable", "Customizable", "Professional features"],
            category: "Audio Editing",
            rating: 4.6,
            price: "Paid",
            dateAdded: "2024-01-24"
        }
    ],
    musicGeneration: [
        {
            id: "mg-1",
            name: "AIVA",
            url: "https://www.aiva.ai/",
            description: "Focuses on emotion-driven AI music creation for classical, film scoring, and modern styles.",
            features: ["Custom themes", "Commercial license", "MIDI export"],
            category: "Music Generation",
            rating: 4.7,
            price: "Paid",
            dateAdded: "2024-01-25"
        },
        {
            id: "mg-2",
            name: "Soundful",
            url: "https://soundful.com/",
            description: "Professional-quality AI music generation platform with various styles and genres.",
            features: ["Intuitive interface", "Full licensing", "Custom mixing"],
            category: "Music Generation",
            rating: 4.6,
            price: "Paid",
            dateAdded: "2024-01-26"
        },
        {
            id: "mg-3",
            name: "OpenAI MuseNet",
            url: "https://openai.com/research/musenet",
            description: "AI model that can generate 4-minute musical compositions with 10 different instruments.",
            features: ["Multiple instruments", "Style transfer", "Long compositions"],
            category: "Music Generation",
            rating: 4.5,
            price: "Free",
            dateAdded: "2024-01-27"
        },
        {
            id: "mg-4",
            name: "Amper Music",
            url: "https://www.ampermusic.com/",
            description: "AI music composition platform for creating custom music tracks.",
            features: ["Custom tracks", "Style control", "Commercial license"],
            category: "Music Generation",
            rating: 4.6,
            price: "Paid",
            dateAdded: "2024-01-28"
        },
        {
            id: "mg-5",
            name: "Mubert",
            url: "https://mubert.com/",
            description: "AI-powered music generation service for creating background music.",
            features: ["Background music", "Mood-based generation", "API access"],
            category: "Music Generation",
            rating: 4.5,
            price: "Paid",
            dateAdded: "2024-01-29"
        },
        {
            id: "mg-6",
            name: "Magenta Studio",
            url: "https://magenta.tensorflow.org/studio",
            description: "Open-source music generation toolkit using TensorFlow.",
            features: ["Open source", "Multiple models", "Custom training"],
            category: "Music Generation",
            rating: 4.4,
            price: "Free",
            dateAdded: "2024-01-30"
        },
        {
            id: "mg-7",
            name: "Stable Audio",
            url: "https://stability.ai/stable-audio",
            description: "AI-powered music generation platform with high-quality output.",
            features: ["High quality", "Style control", "Commercial license"],
            category: "Music Generation",
            rating: 4.7,
            price: "Paid",
            dateAdded: "2024-01-31"
        },
        {
            id: "mg-8",
            name: "AudioCraft",
            url: "https://audiocraft.metademolab.com/",
            description: "Meta's AI model for high-quality music generation.",
            features: ["High quality", "Multiple styles", "Research-based"],
            category: "Music Generation",
            rating: 4.6,
            price: "Free",
            dateAdded: "2024-02-01"
        }
    ],
    voiceCloning: [
        {
            id: "vc-1",
            name: "Voice.ai",
            url: "https://voice.ai/",
            description: "Real-time voice conversion and cloning tool for calls and streaming.",
            features: ["Real-time performance", "Celebrity voice presets", "Streaming integration"],
            category: "Voice Cloning",
            rating: 4.7,
            price: "Paid",
            dateAdded: "2024-02-02"
        },
        {
            id: "vc-2",
            name: "Respeecher",
            url: "https://www.respeecher.com/",
            description: "Professional-grade voice cloning technology used by Hollywood and major production companies.",
            features: ["High-quality replication", "Custom voice models", "Licensing framework"],
            category: "Voice Cloning",
            rating: 4.8,
            price: "Paid",
            dateAdded: "2024-02-03"
        },
        {
            id: "vc-3",
            name: "Coqui TTS",
            url: "https://coqui.ai/",
            description: "Open-source voice cloning toolkit with state-of-the-art models.",
            features: ["Open source", "Multiple models", "Custom training"],
            category: "Voice Cloning",
            rating: 4.5,
            price: "Free",
            dateAdded: "2024-02-04"
        },
        {
            id: "vc-4",
            name: "Play.ht Voice Cloning",
            url: "https://play.ht/voice-cloning/",
            description: "Voice cloning feature within the Play.ht platform.",
            features: ["Easy integration", "Multiple languages", "Commercial license"],
            category: "Voice Cloning",
            rating: 4.6,
            price: "Paid",
            dateAdded: "2024-02-05"
        },
        {
            id: "vc-5",
            name: "Murf.ai Voice Cloning",
            url: "https://murf.ai/voice-cloning",
            description: "Voice cloning feature within the Murf.ai platform.",
            features: ["Studio quality", "Custom voices", "Commercial license"],
            category: "Voice Cloning",
            rating: 4.7,
            price: "Paid",
            dateAdded: "2024-02-06"
        },
        {
            id: "vc-6",
            name: "ElevenLabs Voice Cloning",
            url: "https://elevenlabs.io/voice-cloning",
            description: "Voice cloning feature within the ElevenLabs platform.",
            features: ["High quality", "Multiple languages", "API access"],
            category: "Voice Cloning",
            rating: 4.8,
            price: "Paid",
            dateAdded: "2024-02-07"
        },
        {
            id: "vc-7",
            name: "Voice.ai Studio",
            url: "https://voice.ai/studio",
            description: "Professional voice cloning studio with advanced features.",
            features: ["Advanced features", "Custom models", "Professional support"],
            category: "Voice Cloning",
            rating: 4.6,
            price: "Paid",
            dateAdded: "2024-02-08"
        },
        {
            id: "vc-8",
            name: "Resemble AI",
            url: "https://www.resemble.ai/",
            description: "AI voice cloning platform with custom voice creation.",
            features: ["Custom voices", "Real-time synthesis", "API access"],
            category: "Voice Cloning",
            rating: 4.7,
            price: "Paid",
            dateAdded: "2024-02-09"
        }
    ]
};

export default tools; 
