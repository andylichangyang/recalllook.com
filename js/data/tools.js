const toolsData = {
    "speech-synthesis": [
        {
            id: "ss-1",
            name: "Murf.ai",
            description: "Professional text-to-speech platform with 120+ voices in 20+ languages",
            category: "speech-synthesis",
            price: "paid",
            rating: 4.8,
            image: "assets/tools/murf.jpg",
            url: "https://murf.ai"
        },
        {
            id: "ss-2",
            name: "Play.ht",
            description: "AI voice generator with 570+ voices and multiple languages",
            category: "speech-synthesis",
            price: "free",
            rating: 4.6,
            image: "assets/tools/playht.jpg",
            url: "https://play.ht"
        },
        {
            id: "ss-3",
            name: "ElevenLabs",
            description: "Advanced text-to-speech with voice cloning capabilities",
            category: "speech-synthesis",
            price: "paid",
            rating: 4.9,
            image: "assets/tools/elevenlabs.jpg",
            url: "https://elevenlabs.io"
        },
        {
            id: "ss-4",
            name: "Amazon Polly",
            description: "Cloud-based text-to-speech service with 60+ voices",
            category: "speech-synthesis",
            price: "paid",
            rating: 4.7,
            image: "assets/tools/polly.jpg",
            url: "https://aws.amazon.com/polly"
        },
        {
            id: "ss-5",
            name: "Google Cloud Text-to-Speech",
            description: "High-quality text-to-speech with WaveNet voices",
            category: "speech-synthesis",
            price: "paid",
            rating: 4.8,
            image: "assets/tools/google-tts.jpg",
            url: "https://cloud.google.com/text-to-speech"
        },
        {
            id: "ss-6",
            name: "Microsoft Azure Speech Service",
            description: "Comprehensive speech services including text-to-speech",
            category: "speech-synthesis",
            price: "paid",
            rating: 4.7,
            image: "assets/tools/azure-speech.jpg",
            url: "https://azure.microsoft.com/speech-services"
        },
        {
            id: "ss-7",
            name: "Descript",
            description: "All-in-one audio and video editing with text-to-speech",
            category: "speech-synthesis",
            price: "paid",
            rating: 4.6,
            image: "assets/tools/descript.jpg",
            url: "https://www.descript.com"
        },
        {
            id: "ss-8",
            name: "Resemble AI",
            description: "AI voice generator with custom voice creation",
            category: "speech-synthesis",
            price: "paid",
            rating: 4.5,
            image: "assets/tools/resemble.jpg",
            url: "https://www.resemble.ai"
        }
    ],
    "speech-recognition": [
        {
            id: "sr-1",
            name: "Google Speech-to-Text",
            description: "Accurate speech recognition with support for 120+ languages",
            category: "speech-recognition",
            price: "paid",
            rating: 4.9,
            image: "assets/tools/google-stt.jpg",
            url: "https://cloud.google.com/speech-to-text"
        },
        {
            id: "sr-2",
            name: "Microsoft Azure Speech-to-Text",
            description: "Real-time speech recognition with custom models",
            category: "speech-recognition",
            price: "paid",
            rating: 4.8,
            image: "assets/tools/azure-stt.jpg",
            url: "https://azure.microsoft.com/speech-services"
        },
        {
            id: "sr-3",
            name: "Amazon Transcribe",
            description: "Automatic speech recognition with custom vocabulary",
            category: "speech-recognition",
            price: "paid",
            rating: 4.7,
            image: "assets/tools/amazon-transcribe.jpg",
            url: "https://aws.amazon.com/transcribe"
        },
        {
            id: "sr-4",
            name: "Otter.ai",
            description: "AI-powered meeting transcription and note-taking",
            category: "speech-recognition",
            price: "free",
            rating: 4.6,
            image: "assets/tools/otter.jpg",
            url: "https://otter.ai"
        },
        {
            id: "sr-5",
            name: "Rev.ai",
            description: "Professional transcription service with high accuracy",
            category: "speech-recognition",
            price: "paid",
            rating: 4.8,
            image: "assets/tools/rev.jpg",
            url: "https://www.rev.ai"
        },
        {
            id: "sr-6",
            name: "AssemblyAI",
            description: "Advanced speech recognition with custom models",
            category: "speech-recognition",
            price: "paid",
            rating: 4.7,
            image: "assets/tools/assemblyai.jpg",
            url: "https://www.assemblyai.com"
        },
        {
            id: "sr-7",
            name: "Sonix",
            description: "Fast and accurate transcription with speaker diarization",
            category: "speech-recognition",
            price: "paid",
            rating: 4.6,
            image: "assets/tools/sonix.jpg",
            url: "https://sonix.ai"
        },
        {
            id: "sr-8",
            name: "Trint",
            description: "AI-powered transcription with editing capabilities",
            category: "speech-recognition",
            price: "paid",
            rating: 4.5,
            image: "assets/tools/trint.jpg",
            url: "https://trint.com"
        }
    ],
    "audio-editing": [
        {
            id: "ae-1",
            name: "Adobe Audition",
            description: "Professional audio editing and mixing software",
            category: "audio-editing",
            price: "paid",
            rating: 4.8,
            image: "assets/tools/audition.jpg",
            url: "https://www.adobe.com/audition"
        },
        {
            id: "ae-2",
            name: "Audacity",
            description: "Free and open-source audio editor",
            category: "audio-editing",
            price: "free",
            rating: 4.5,
            image: "assets/tools/audacity.jpg",
            url: "https://www.audacityteam.org"
        },
        {
            id: "ae-3",
            name: "FL Studio",
            description: "Professional digital audio workstation",
            category: "audio-editing",
            price: "paid",
            rating: 4.7,
            image: "assets/tools/fl-studio.jpg",
            url: "https://www.image-line.com"
        },
        {
            id: "ae-4",
            name: "Pro Tools",
            description: "Industry-standard audio production software",
            category: "audio-editing",
            price: "paid",
            rating: 4.9,
            image: "assets/tools/pro-tools.jpg",
            url: "https://www.avid.com/pro-tools"
        },
        {
            id: "ae-5",
            name: "Logic Pro",
            description: "Professional audio production for Mac",
            category: "audio-editing",
            price: "paid",
            rating: 4.8,
            image: "assets/tools/logic-pro.jpg",
            url: "https://www.apple.com/logic-pro"
        },
        {
            id: "ae-6",
            name: "Ableton Live",
            description: "Real-time audio production and performance",
            category: "audio-editing",
            price: "paid",
            rating: 4.7,
            image: "assets/tools/ableton.jpg",
            url: "https://www.ableton.com"
        },
        {
            id: "ae-7",
            name: "Reaper",
            description: "Affordable professional audio production",
            category: "audio-editing",
            price: "paid",
            rating: 4.6,
            image: "assets/tools/reaper.jpg",
            url: "https://www.reaper.fm"
        },
        {
            id: "ae-8",
            name: "GarageBand",
            description: "Free audio production for Mac and iOS",
            category: "audio-editing",
            price: "free",
            rating: 4.4,
            image: "assets/tools/garageband.jpg",
            url: "https://www.apple.com/garageband"
        }
    ],
    "music-generation": [
        {
            id: "mg-1",
            name: "OpenAI MuseNet",
            description: "AI-powered music generation in various styles",
            category: "music-generation",
            price: "paid",
            rating: 4.7,
            image: "assets/tools/musenet.jpg",
            url: "https://openai.com/musenet"
        },
        {
            id: "mg-2",
            name: "Amper Music",
            description: "AI music composition and production",
            category: "music-generation",
            price: "paid",
            rating: 4.6,
            image: "assets/tools/amper.jpg",
            url: "https://www.ampermusic.com"
        },
        {
            id: "mg-3",
            name: "AIVA",
            description: "AI composer for original music creation",
            category: "music-generation",
            price: "paid",
            rating: 4.5,
            image: "assets/tools/aiva.jpg",
            url: "https://www.aiva.ai"
        },
        {
            id: "mg-4",
            name: "Mubert",
            description: "AI-generated music for content creators",
            category: "music-generation",
            price: "free",
            rating: 4.4,
            image: "assets/tools/mubert.jpg",
            url: "https://mubert.com"
        },
        {
            id: "mg-5",
            name: "Soundraw",
            description: "AI music generator for videos and content",
            category: "music-generation",
            price: "paid",
            rating: 4.6,
            image: "assets/tools/soundraw.jpg",
            url: "https://soundraw.io"
        },
        {
            id: "mg-6",
            name: "Magenta Studio",
            description: "Google's AI music generation tools",
            category: "music-generation",
            price: "free",
            rating: 4.5,
            image: "assets/tools/magenta.jpg",
            url: "https://magenta.tensorflow.org"
        },
        {
            id: "mg-7",
            name: "Ecrett Music",
            description: "AI music generator for videos",
            category: "music-generation",
            price: "paid",
            rating: 4.4,
            image: "assets/tools/ecrett.jpg",
            url: "https://ecrettmusic.com"
        },
        {
            id: "mg-8",
            name: "Stable Audio",
            description: "AI-powered music and sound generation",
            category: "music-generation",
            price: "paid",
            rating: 4.7,
            image: "assets/tools/stable-audio.jpg",
            url: "https://stability.ai/stable-audio"
        }
    ],
    "voice-cloning": [
        {
            id: "vc-1",
            name: "Coqui TTS",
            description: "Open-source text-to-speech with voice cloning",
            category: "voice-cloning",
            price: "free",
            rating: 4.5,
            image: "assets/tools/coqui.jpg",
            url: "https://coqui.ai"
        },
        {
            id: "vc-2",
            name: "Resemble AI",
            description: "Professional voice cloning and synthesis",
            category: "voice-cloning",
            price: "paid",
            rating: 4.8,
            image: "assets/tools/resemble.jpg",
            url: "https://www.resemble.ai"
        },
        {
            id: "vc-3",
            name: "Descript",
            description: "Voice cloning for audio and video editing",
            category: "voice-cloning",
            price: "paid",
            rating: 4.7,
            image: "assets/tools/descript.jpg",
            url: "https://www.descript.com"
        },
        {
            id: "vc-4",
            name: "Play.ht",
            description: "AI voice cloning with multiple voices",
            category: "voice-cloning",
            price: "paid",
            rating: 4.6,
            image: "assets/tools/playht.jpg",
            url: "https://play.ht"
        },
        {
            id: "vc-5",
            name: "Murf.ai",
            description: "Voice cloning for professional content",
            category: "voice-cloning",
            price: "paid",
            rating: 4.7,
            image: "assets/tools/murf.jpg",
            url: "https://murf.ai"
        },
        {
            id: "vc-6",
            name: "ElevenLabs",
            description: "Advanced voice cloning and synthesis",
            category: "voice-cloning",
            price: "paid",
            rating: 4.9,
            image: "assets/tools/elevenlabs.jpg",
            url: "https://elevenlabs.io"
        },
        {
            id: "vc-7",
            name: "Voice.ai",
            description: "Real-time voice cloning and conversion",
            category: "voice-cloning",
            price: "paid",
            rating: 4.6,
            image: "assets/tools/voice-ai.jpg",
            url: "https://voice.ai"
        },
        {
            id: "vc-8",
            name: "VoiceCraft",
            description: "AI voice cloning for content creation",
            category: "voice-cloning",
            price: "paid",
            rating: 4.5,
            image: "assets/tools/voicecraft.jpg",
            url: "https://voicecraft.ai"
        }
    ]
};

export default toolsData;
