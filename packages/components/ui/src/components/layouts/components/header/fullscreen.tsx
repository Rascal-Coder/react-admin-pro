import { useFullscreen } from 'ahooks';
import { Expand, Shrink } from 'lucide-react';

export function Fullscreen() {
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(document.body);
  return (
    <span
      onClick={toggleFullscreen}
      className="cursor-pointer leading-none p-[4] rounded-full bg-transparent hover:bg-[var(--ant-color-bg-layout)] transition-all"
    >
      {isFullscreen ? (
        <Shrink />
      ) : (
        <Expand />
      )}
    </span>
  );
};


