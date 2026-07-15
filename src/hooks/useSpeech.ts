export function useSpeech() {

  function speak(text: string) {

    const speech = new SpeechSynthesisUtterance(text)

    speech.lang = "fr-FR"
    speech.rate = 0.8

    window.speechSynthesis.speak(speech)
  }

  return {
    speak
  }
}