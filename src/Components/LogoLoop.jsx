


import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2
};

const toCssLength = value => (typeof value === 'number' ? `${value}px` : (value ?? undefined));
const cx = (...parts) => parts.filter(Boolean).join(' ');

const useResizeObserver = (callback, elements, dependencies) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const h = () => callback();
      window.addEventListener('resize', h);
      callback();
      return () => window.removeEventListener('resize', h);
    }
    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const o = new ResizeObserver(callback);
      o.observe(ref.current);
      return o;
    });
    callback();
    return () => observers.forEach(o => o?.disconnect());
  }, [callback, ...dependencies]);
};

const useImageLoader = (seqRef, onLoad, dependencies) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? [];
    if (images.length === 0) { onLoad(); return; }

    let remaining = images.length;
    const done = () => { if (--remaining === 0) onLoad(); };

    images.forEach(img => {
      if (img.complete) done();
      else {
        img.addEventListener('load', done, { once: true });
        img.addEventListener('error', done, { once: true });
      }
    });

    return () => {
      images.forEach(img => {
        img.removeEventListener('load', done);
        img.removeEventListener('error', done);
      });
    };
  }, [onLoad, seqRef, ...dependencies]);
};


const useAnimationLoop = (trackRef, targetVelocity, seqSize, isHovered, hoverSpeed, isVertical) => {
  const rafRef      = useRef(null);
  const tsRef       = useRef(null);
  const offsetRef   = useRef(0);
  const velRef      = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || seqSize <= 0) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    offsetRef.current = ((offsetRef.current % seqSize) + seqSize) % seqSize;

    if (prefersReduced) {
      track.style.transform = 'translate3d(0,0,0)';
      return () => { tsRef.current = null; };
    }

    const animate = (timestamp) => {
      if (tsRef.current === null) tsRef.current = timestamp;
      const dt = Math.max(0, timestamp - tsRef.current) / 1000;
      tsRef.current = timestamp;

      const target = isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;
      const ease   = 1 - Math.exp(-dt / ANIMATION_CONFIG.SMOOTH_TAU);
      velRef.current += (target - velRef.current) * ease;

      let next = offsetRef.current + velRef.current * dt;
      next = ((next % seqSize) + seqSize) % seqSize;
      offsetRef.current = next;

      track.style.transform = isVertical
        ? `translate3d(0,${-next}px,0)`
        : `translate3d(${-next}px,0,0)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      tsRef.current  = null;
    };
  }, [targetVelocity, seqSize, isHovered, hoverSpeed, isVertical, trackRef]);
};


export const LogoLoop = memo(({
  logos,
  speed        = 120,
  direction    = 'left',
  width        = '100%',
  logoHeight   = 28,
  gap          = 32,
  pauseOnHover,
  hoverSpeed,
  fadeOut      = false,
  fadeOutColor,
  scaleOnHover = false,
  renderItem,
  ariaLabel    = 'Partner logos',
  className,
  style
}) => {
  const containerRef = useRef(null);
  const trackRef     = useRef(null);
  const seqRef       = useRef(null);

  const [seqWidth,   setSeqWidth]   = useState(0);
  const [seqHeight,  setSeqHeight]  = useState(0);
  const [copyCount,  setCopyCount]  = useState(ANIMATION_CONFIG.MIN_COPIES);
  const [isHovered,  setIsHovered]  = useState(false);

  const isVertical = direction === 'up' || direction === 'down';
  const seqSize    = isVertical ? seqHeight : seqWidth;  

  const effectiveHoverSpeed = useMemo(() => {
    if (hoverSpeed !== undefined)  return hoverSpeed;
    if (pauseOnHover === true)     return 0;
    if (pauseOnHover === false)    return undefined;
    return 0;
  }, [hoverSpeed, pauseOnHover]);

  const targetVelocity = useMemo(() => {
    const mag  = Math.abs(speed);
    const dir  = isVertical
      ? (direction === 'up'   ? 1 : -1)
      : (direction === 'left' ? 1 : -1);
    return mag * dir * (speed < 0 ? -1 : 1);
  }, [speed, direction, isVertical]);

  const updateDimensions = useCallback(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    const seqEl = seqRef.current;
    if (!seqEl) return;

    const containerW  = containerEl.clientWidth;
    const seqRect     = seqEl.getBoundingClientRect();
    const seqW        = seqRect.width;
    const seqH        = seqRect.height;

    if (isVertical) {
      const parentH = containerEl.parentElement?.clientHeight ?? 0;
      if (parentH > 0) {
        const target = Math.ceil(parentH);
        if (containerEl.style.height !== `${target}px`)
          containerEl.style.height = `${target}px`;
      }
      if (seqH > 0) {
        setSeqHeight(Math.ceil(seqH));
        const viewport  = containerEl.clientHeight || parentH || seqH;
        const needed    = Math.ceil(viewport / seqH) + ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, needed));
      }
    } else if (seqW > 0) {
      setSeqWidth(Math.ceil(seqW));
      const needed = Math.ceil(containerW / seqW) + ANIMATION_CONFIG.COPY_HEADROOM;
      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, needed));
    }
  }, [isVertical]);

  useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight, isVertical]);
  useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight, isVertical]);

  useAnimationLoop(trackRef, targetVelocity, seqSize, isHovered, effectiveHoverSpeed, isVertical);

  const onEnter = useCallback(() => {
    if (effectiveHoverSpeed !== undefined) setIsHovered(true);
  }, [effectiveHoverSpeed]);
  const onLeave = useCallback(() => {
    if (effectiveHoverSpeed !== undefined) setIsHovered(false);
  }, [effectiveHoverSpeed]);

  const renderLogoItem = useCallback((item, key) => {
    if (renderItem) {
      return (
        <li
          className={cx(
            'flex-none text-[length:var(--logoloop-logoHeight)] leading-[1]',
            isVertical ? 'mb-[var(--logoloop-gap)]' : 'mr-[var(--logoloop-gap)]',
            scaleOnHover && 'overflow-visible group/item'
          )}
          key={key}
          role="listitem">
          {renderItem(item, key)}
        </li>
      );
    }

    const isNode = 'node' in item;

    const content = isNode ? (
      <span
        className={cx(
          'inline-flex items-center',
          'motion-reduce:transition-none',
          scaleOnHover && 'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120'
        )}
        aria-hidden={!!item.href && !item.ariaLabel}>
        {item.node}
      </span>
    ) : (
      <img
        className={cx(
          'h-[var(--logoloop-logoHeight)] w-auto block object-contain',
          '[-webkit-user-drag:none] pointer-events-none',
          '[image-rendering:-webkit-optimize-contrast]',
          'motion-reduce:transition-none',
          scaleOnHover && 'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120'
        )}
        src={item.src}
        srcSet={item.srcSet}
        sizes={item.sizes}
        width={item.width}
        height={item.height}
        alt={item.alt ?? ''}
        title={item.title}
        loading="lazy"
        decoding="async"
        draggable={false} />
    );

    const ariaLbl = isNode ? (item.ariaLabel ?? item.title) : (item.alt ?? item.title);

    const inner = item.href ? (
      <a
        className={cx(
          'inline-flex items-center no-underline rounded',
          'transition-opacity duration-200 ease-linear',
          'hover:opacity-80',
          'focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2'
        )}
        href={item.href}
        aria-label={ariaLbl || 'logo link'}
        target="_blank"
        rel="noreferrer noopener">
        {content}
      </a>
    ) : content;

    return (
      <li
        className={cx(
          'flex-none text-[length:var(--logoloop-logoHeight)] leading-[1]',
          isVertical ? 'mb-[var(--logoloop-gap)]' : 'mr-[var(--logoloop-gap)]',
          scaleOnHover && 'overflow-visible group/item'
        )}
        key={key}
        role="listitem">
        {inner}
      </li>
    );
  }, [isVertical, scaleOnHover, renderItem]);

  const logoLists = useMemo(() =>
    Array.from({ length: copyCount }, (_, i) => (
      <ul
        className={cx('flex items-center', isVertical && 'flex-col')}
        key={`c-${i}`}
        role="list"
        aria-hidden={i > 0}
        ref={i === 0 ? seqRef : undefined}>
        {logos.map((item, j) => renderLogoItem(item, `${i}-${j}`))}
      </ul>
    )), [copyCount, logos, renderLogoItem, isVertical]);

  const cssVars = useMemo(() => ({
    '--logoloop-gap':        `${gap}px`,
    '--logoloop-logoHeight': `${logoHeight}px`,
    ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor })
  }), [gap, logoHeight, fadeOutColor]);

  const containerStyle = useMemo(() => ({
    width: isVertical
      ? (toCssLength(width) === '100%' ? undefined : toCssLength(width))
      : (toCssLength(width) ?? '100%'),
    ...cssVars,
    ...style
  }), [width, cssVars, style, isVertical]);

  const rootClasses = useMemo(() => cx(
    'relative group',
    isVertical ? 'overflow-hidden h-full inline-block' : 'overflow-x-hidden',
    '[--logoloop-gap:32px]',
    '[--logoloop-logoHeight:28px]',
    '[--logoloop-fadeColorAuto:#000000]',   
    'dark:[--logoloop-fadeColorAuto:#000000]',
    scaleOnHover && 'py-[calc(var(--logoloop-logoHeight)*0.1)]',
    className
  ), [isVertical, scaleOnHover, className]);

  const FadeOverlays = fadeOut ? (
    isVertical ? (
      <>
        <div aria-hidden className={cx(
          'pointer-events-none absolute inset-x-0 top-0 z-10',
          'h-[clamp(24px,8%,120px)]',
          'bg-[linear-gradient(to_bottom,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
        )} />
        <div aria-hidden className={cx(
          'pointer-events-none absolute inset-x-0 bottom-0 z-10',
          'h-[clamp(24px,8%,120px)]',
          'bg-[linear-gradient(to_top,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
        )} />
      </>
    ) : (
      <>
        <div aria-hidden className={cx(
          'pointer-events-none absolute inset-y-0 left-0 z-10',
          'w-[clamp(24px,8%,120px)]',
          'bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
        )} />
        <div aria-hidden className={cx(
          'pointer-events-none absolute inset-y-0 right-0 z-10',
          'w-[clamp(24px,8%,120px)]',
          'bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
        )} />
      </>
    )
  ) : null;

  return (
    <div
      ref={containerRef}
      className={rootClasses}
      style={containerStyle}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}>
      {FadeOverlays}
      <div
        className={cx(
          'flex will-change-transform select-none relative z-0',
          'motion-reduce:transform-none',
          isVertical ? 'flex-col h-max w-full' : 'flex-row w-max'
        )}
        ref={trackRef}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}>
        {logoLists}
      </div>
    </div>
  );
});

LogoLoop.displayName = 'LogoLoop';
export default LogoLoop;