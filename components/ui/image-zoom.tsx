'use client';

import Zoom, {
  type ControlledProps,
  type UncontrolledProps,
} from 'react-medium-image-zoom';
import { cn } from '@/lib/utils';

export type ImageZoomProps = UncontrolledProps & {
  isZoomed?: ControlledProps['isZoomed'];
  onZoomChange?: ControlledProps['onZoomChange'];
  className?: string;
  backdropClassName?: string;
  zoomMargin?: number;
};

export const ImageZoom = ({
  className,
  backdropClassName,
  zoomMargin = 100,
  ...props
}: ImageZoomProps) => (
  <div
    className={cn(
      'relative',
      '[&_[data-rmiz-ghost]]:pointer-events-none [&_[data-rmiz-ghost]]:absolute',
      '[&_[data-rmiz-btn-zoom]]:m-0 [&_[data-rmiz-btn-zoom]]:size-10 [&_[data-rmiz-btn-zoom]]:touch-manipulation [&_[data-rmiz-btn-zoom]]:appearance-none [&_[data-rmiz-btn-zoom]]:rounded-[50%] [&_[data-rmiz-btn-zoom]]:border-none [&_[data-rmiz-btn-zoom]]:bg-foreground/70 [&_[data-rmiz-btn-zoom]]:p-2 [&_[data-rmiz-btn-zoom]]:text-background [&_[data-rmiz-btn-zoom]]:outline-offset-2',
      '[&_[data-rmiz-btn-unzoom]]:m-0 [&_[data-rmiz-btn-unzoom]]:size-10 [&_[data-rmiz-btn-unzoom]]:touch-manipulation [&_[data-rmiz-btn-unzoom]]:appearance-none [&_[data-rmiz-btn-unzoom]]:rounded-[50%] [&_[data-rmiz-btn-unzoom]]:border-none [&_[data-rmiz-btn-unzoom]]:bg-foreground/70 [&_[data-rmiz-btn-unzoom]]:p-2 [&_[data-rmiz-btn-unzoom]]:text-background [&_[data-rmiz-btn-unzoom]]:outline-offset-2',
      '[&_[data-rmiz-btn-zoom]:not(:focus):not(:active)]:pointer-events-none [&_[data-rmiz-btn-zoom]:not(:focus):not(:active)]:absolute [&_[data-rmiz-btn-zoom]:not(:focus):not(:active)]:size-px [&_[data-rmiz-btn-zoom]:not(:focus):not(:active)]:overflow-hidden [&_[data-rmiz-btn-zoom]:not(:focus):not(:active)]:whitespace-nowrap [&_[data-rmiz-btn-zoom]:not(:focus):not(:active)]:[clip-path:inset(50%)] [&_[data-rmiz-btn-zoom]:not(:focus):not(:active)]:[clip:rect(0_0_0_0)]',
      '[&_[data-rmiz-btn-zoom]]:absolute [&_[data-rmiz-btn-zoom]]:top-2.5 [&_[data-rmiz-btn-zoom]]:right-2.5 [&_[data-rmiz-btn-zoom]]:bottom-auto [&_[data-rmiz-btn-zoom]]:left-auto [&_[data-rmiz-btn-zoom]]:cursor-zoom-in',
      '[&_[data-rmiz-btn-unzoom]]:absolute [&_[data-rmiz-btn-unzoom]]:top-5 [&_[data-rmiz-btn-unzoom]]:right-5 [&_[data-rmiz-btn-unzoom]]:bottom-auto [&_[data-rmiz-btn-unzoom]]:left-auto [&_[data-rmiz-btn-unzoom]]:z-[1] [&_[data-rmiz-btn-unzoom]]:cursor-zoom-out',
      '[&_[data-rmiz-content="found"]_img]:cursor-zoom-in',
      '[&_[data-rmiz-content="found"]_svg]:cursor-zoom-in',
      '[&_[data-rmiz-content="found"]_[role="img"]]:cursor-zoom-in',
      '[&_[data-rmiz-content="found"]_[data-zoom]]:cursor-zoom-in',
      className
    )}
  >
    <Zoom
      zoomMargin={zoomMargin}
      classDialog={cn(
        '[&::backdrop]:hidden',
        '[&[open]]:fixed [&[open]]:inset-0 [&[open]]:flex [&[open]]:items-center [&[open]]:justify-center [&[open]]:bg-background [&[open]]:p-6',
        '[&_[data-rmiz-modal-overlay]]:hidden',
        '[&_[data-rmiz-modal-content]]:relative [&_[data-rmiz-modal-content]]:max-h-full [&_[data-rmiz-modal-content]]:max-w-full',
        '[&_[data-rmiz-modal-img]]:h-auto [&_[data-rmiz-modal-img]]:w-auto [&_[data-rmiz-modal-img]]:max-h-full [&_[data-rmiz-modal-img]]:max-w-full [&_[data-rmiz-modal-img]]:cursor-zoom-out [&_[data-rmiz-modal-img]]:rounded-lg [&_[data-rmiz-modal-img]]:shadow-2xl',
        backdropClassName
      )}
      {...props}
    />
  </div>
);
