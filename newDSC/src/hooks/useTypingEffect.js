import { useEffect, useState } from "react";

export default function useTypingEffect(phrases) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches) {
      setTypedText(phrases[0] ?? "");
      return undefined;
    }

    const phrase = phrases[phraseIndex] ?? "";
    const isComplete = typedText === phrase;
    const delay = isComplete ? 1500 : isErasing ? 42 : 78;
    const timer = window.setTimeout(() => {
      if (!isErasing && !isComplete) {
        setTypedText(phrase.slice(0, typedText.length + 1));
      } else if (!isErasing && isComplete) {
        setIsErasing(true);
      } else if (typedText.length > 0) {
        setTypedText(phrase.slice(0, typedText.length - 1));
      } else {
        setIsErasing(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isErasing, phraseIndex, phrases, typedText]);

  return typedText;
}