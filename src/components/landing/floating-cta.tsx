import MessengerButton from "./messenger-button"
import MessengerLogo from "../icons/messenger-logo"

export default function FloatingCta() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
        <MessengerButton
          variant="secondary"
          size="icon"
          className="rounded-full h-16 w-16 shadow-lg animate-bounce hover:animate-none"
          message="Hi! I'd like to order."
          aria-label="Chat to Order"
        >
          <MessengerLogo className="h-10 w-10 text-secondary-foreground" />
        </MessengerButton>
    </div>
  )
}
