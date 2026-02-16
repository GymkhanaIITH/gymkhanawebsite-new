import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const BirdCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        // Force hide default cursor globally
        const style = document.createElement('style');
        style.innerHTML = `
            * {
                cursor: none !important;
            }
        `;
        document.head.appendChild(style);

        // GSAP quickTo for smooth movement
        const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });

        const moveCursor = (e: MouseEvent) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };

        window.addEventListener('mousemove', moveCursor);

        // Robust Hover detection
        const checkHover = (e: MouseEvent) => {
            let target = e.target as HTMLElement;
            let hovering = false;

            // Traverse up to find if anything is clickable
            while (target && target !== document.body) {
                const style = window.getComputedStyle(target);
                if (
                    target.tagName === 'A' ||
                    target.tagName === 'BUTTON' ||
                    target.getAttribute('role') === 'button' ||
                    style.cursor === 'pointer'
                ) {
                    hovering = true;
                    break;
                }
                target = target.parentElement as HTMLElement;
            }
            setIsHovering(hovering);
        };

        window.addEventListener('mouseover', checkHover);

        const handleMouseOut = (e: MouseEvent) => {
            if (e.relatedTarget === null) {
                setIsHovering(false);
            }
        };
        window.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', checkHover);
            window.removeEventListener('mouseout', handleMouseOut);
            document.head.removeChild(style);
            document.body.style.cursor = 'auto'; // cleanup
        };
    }, []);

    useEffect(() => {
        if (!imageRef.current) return;

        if (isHovering) {
            // Apply purple filter on hover (Single play)
            gsap.to(imageRef.current, {
                filter: "brightness(0.7) sepia(1) hue-rotate(240deg) saturate(500%)",
                scale: 1.2,
                duration: 0.1,
                overwrite: 'auto'
            });


        } else {
            // Reset everything
            gsap.killTweensOf(imageRef.current);
            gsap.to(imageRef.current, {
                filter: "none",
                scale: 1,
                rotation: 0,
                duration: 0.2,
                overwrite: 'auto'
            });
        }
    }, [isHovering]);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 pointer-events-none z-[99999]"
            style={{
                transform: 'translate(-50%, -50%)',
                width: '45px',
                height: '45px'
            }}
        >
            <img
                ref={imageRef}
                src="/images/logofooter.png"
                alt="Bird Cursor"
                className="w-full h-full object-contain drop-shadow-md"
                style={{
                    // Base drop shadow to separate from background
                    filter: "drop-shadow(0px 0px 1px rgba(255,255,255,0.3))"
                }}
            />
        </div>
    );
};

export default BirdCursor;
