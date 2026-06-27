import { Room, RoomEvent } from 'livekit-client';

const form = document.querySelector<HTMLFormElement>('#presenter-form');
const livekitUrlInput = document.querySelector<HTMLInputElement>('#livekit-url');
const tokenInput = document.querySelector<HTMLTextAreaElement>('#token');
const shareButton = document.querySelector<HTMLButtonElement>('#share-button');
const status = document.querySelector<HTMLDivElement>('#status');

let room: Room | undefined;
const defaultLivekitUrl = import.meta.env.VITE_LIVEKIT_URL;

const setStatus = (message: string) => {
  if (status) {
    status.textContent = message;
  }
};

const setBusy = (isBusy: boolean) => {
  if (shareButton) {
    shareButton.disabled = isBusy;
  }
};

const requireElement = <ElementType extends Element>(
  element: ElementType | null,
  selector: string,
): ElementType => {
  if (!element) {
    throw new Error(`Missing required element: ${selector}`);
  }

  return element;
};

const connectAndShare = async (event: SubmitEvent) => {
  event.preventDefault();

  const livekitUrl = requireElement(livekitUrlInput, '#livekit-url').value.trim();
  const token = requireElement(tokenInput, '#token').value.trim();

  if (!livekitUrl || !token) {
    setStatus('Add a LiveKit URL and presenter token first.');
    return;
  }

  setBusy(true);
  setStatus('Connecting to LiveKit...');

  try {
    await room?.disconnect();

    room = new Room({
      adaptiveStream: true,
      dynacast: true,
    });

    room.on(RoomEvent.Disconnected, () => {
      setStatus('Disconnected.');
      setBusy(false);
    });

    await room.connect(livekitUrl, token);

    setStatus('Connected. Choose the screen, window, or tab to share...');
    await room.localParticipant.setScreenShareEnabled(true);

    setStatus('Screen sharing is live.');
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    setStatus(`Could not share screen: ${message}`);
    setBusy(false);
  }
};

if (livekitUrlInput && defaultLivekitUrl) {
  livekitUrlInput.value = defaultLivekitUrl;
}

requireElement(form, '#presenter-form').addEventListener('submit', connectAndShare);
