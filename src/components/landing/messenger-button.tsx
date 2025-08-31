import { Button, type ButtonProps } from "@/components/ui/button";
import Link from "next/link";

interface MessengerButtonProps extends ButtonProps {
  message?: string;
}

const MESSENGER_USERNAME = "siomai.master"; // Placeholder

export default function MessengerButton({ children, message, ...props }: MessengerButtonProps) {
  const baseUrl = `https://m.me/${MESSENGER_USERNAME}`;
  const href = message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;

  return (
    <Button asChild {...props}>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    </Button>
  );
}
