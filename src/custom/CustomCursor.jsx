import { useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../index.css'; // Include the CSS for the cursor-dot

const CustomCursor = () => {
    const cursorPosition = useRef({ x: 0, y: 0 });
    const dotPosition = useRef({ x: 0, y: 0 });

    const [springProps, api] = useSpring(() => ({
        x: 0,
        y: 0,
        config: { mass: 1, stiffness: 1000000, damping: 0 }, // High stiffness and zero damping
    }));

    useEffect(() => {
        const handleMouseMove = (e) => {
            cursorPosition.current = { x: e.clientX, y: e.clientY };

            // Position the dot cursor directly above the main cursor
            api.start({
                x: cursorPosition.current.x - 7, // Adjust for dot width
                y: cursorPosition.current.y - 10, // Position it above
                config: { mass: 1, stiffness: 1000000, damping: 0 }, // Ensure no gradual slowing
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [api]);

    useEffect(() => {
        const updateDotPosition = () => {
            dotPosition.current = {
                x: springProps.x.get(),
                y: springProps.y.get(),
            };
            requestAnimationFrame(updateDotPosition);
        };

        updateDotPosition();

        return () => cancelAnimationFrame(updateDotPosition);
    }, [springProps]);

    return (
        <animated.div
            className="cursor-dot"
            style={{
                transform: springProps.x.to(
                    (x) => `translate3d(${x}px, ${springProps.y.get()}px, 0)`
                ),
                width: '12px', // Dot width
                height: '12px', // Dot height
                backgroundColor: '#FF520E', // Dot color
                borderRadius: '50%', // Make it circular
                position: 'fixed',
                pointerEvents: 'none', // Ensure it doesn't interfere with mouse events
                boxShadow: '0 0 20px 4px rgba(255, 82, 14, 0.5)', // Apply shadow
            }}
        />
    );
};

export default CustomCursor;
