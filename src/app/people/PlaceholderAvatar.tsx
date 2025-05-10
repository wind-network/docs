import React from 'react';

interface PlaceholderAvatarProps {
  name: string;
  size?: number;
}

// A simple component to generate a placeholder avatar with initials
export default function PlaceholderAvatar({ name, size = 150 }: PlaceholderAvatarProps) {
  // Get initials from name
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  // Generate a deterministic color based on the name
  const getColorFromString = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const hue = Math.abs(hash % 360);
    return `hsl(${hue}, 70%, 60%)`;
  };

  const bgColor = getColorFromString(name);

  return (
    <div 
      style={{ 
        width: `${size}px`, 
        height: `${size}px`, 
        backgroundColor: bgColor,
        fontSize: `${size * 0.4}px`,
      }}
      className="rounded-full flex items-center justify-center text-white font-semibold"
    >
      {initials}
    </div>
  );
} 