import { Button, type ButtonProps } from "@/components/ui/button";
import Link from "next/link";

interface MessengerButtonProps extends ButtonProps {
  message?: string;
}

const MESSENGER_LINK = "http://m.me/109009795460085?ref=website";

export default function MessengerButton({ children, message, ...props }: MessengerButtonProps) {
  // The new link format doesn't use the dynamic message in the same way, so we'll use the static link.
  // The 'ref' parameter will help track clicks from the website.
  const href = MESSENGER_LINK;

  return (
    <Button asChild {...props}>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    </Button>
  );
}
