import MessengerButton from "./messenger-button"
import MessengerLogo from "../icons/messenger-logo"

export default function FloatingCta() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
        <MessengerButton
          variant="ghost"
          className="rounded-full h-20 w-20 bg-white shadow-lg animate-bounce hover:animate-none p-4 flex items-center justify-center"
          message="Hi! I'd like to order."
          aria-label="Chat to Order"
        >
          <MessengerLogo className="h-full w-full text-blue-600" />
        </MessengerButton>
    </div>
  )
}
