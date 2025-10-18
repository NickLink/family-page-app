import { useCallback } from 'react';

export const useSpeechSynthesis = () => {
  const speak = useCallback((text: string, onEnd?: () => void, lang = 'uk-UA') => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.9;
      
      // Ensure voices are loaded before speaking
      const voices = window.speechSynthesis.getVoices();
      const ukVoice = voices.find(voice => voice.lang === lang);
      if (ukVoice) {
        utterance.voice = ukVoice;
      }
      
      if (onEnd) {
        utterance.onend = onEnd;
      }

      utterance.onerror = (event) => {
        console.error("Speech Synthesis Error:", event);
        if (onEnd) {
          onEnd(); // Proceed even if speech fails
        }
      };
      
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn("Speech Synthesis not supported by this browser.");
      if (onEnd) {
        setTimeout(onEnd, 1000); // Fallback to continue flow
      }
    }
  }, []);

  return { speak };
};