import React from "react";
import Svg, { Circle, ClipPath, Defs, G, Path, Rect } from "react-native-svg";
import { SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  color?: string;
  size?: number;
}

export const FollowIcon: React.FC<IconProps> = (props) => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M8 8a3.333 3.333 0 100-6.667A3.333 3.333 0 008 8zM2.273 14.667C2.273 12.087 4.84 10 8 10c.64 0 1.26.087 1.84.247"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.667 12c0 .213-.027.42-.08.62-.06.267-.167.527-.307.753A2.646 2.646 0 0112 14.667c-.687 0-1.307-.26-1.773-.687-.2-.173-.374-.38-.507-.607A2.614 2.614 0 019.333 12 2.666 2.666 0 0112 9.333c.787 0 1.5.34 1.98.887.427.473.687 1.1.687 1.78zM12.993 11.987h-1.986M12 11.013v1.994"
        stroke="#fff"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const FavIcon: React.FC<IconProps> = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4z"
        stroke={props.color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const PlusIcon: React.FC<IconProps> = (props) => {
  return (
    <Svg width={56} height={56} viewBox="0 0 56 56" fill="none" {...props}>
      <G filter="url(#filter0_d_1_591)">
        <Circle cx={28} cy={24} r={24} fill="#FF7F30" />
      </G>
      <Path
        d="M19 24h18M28 33V15"
        stroke="#fff"
        strokeWidth={2.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs></Defs>
    </Svg>
  );
};

export const ProfileIcon: React.FC<IconProps> = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12 12a5 5 0 100-10 5 5 0 000 10zM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const Icon2: React.FC<IconProps> = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M9.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 01-4.27-4.43C4.56 3.99 6.54 2 9 2a4.435 4.435 0 01.16 8.87zM16.41 4c1.94 0 3.5 1.57 3.5 3.5 0 1.89-1.5 3.43-3.37 3.5a1.13 1.13 0 00-.26 0M4.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0zM18.34 20c.72-.15 1.4-.44 1.96-.87 1.56-1.17 1.56-3.1 0-4.27-.55-.42-1.22-.7-1.93-.86"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const HomeIcon: React.FC<IconProps> = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M9.02 2.84l-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12z"
        fill="none"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M12 17.99v-3 3z" fill="none" />
      <Path
        d="M12 17.99v-3"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const BellIcon = (props: IconProps) => {
  return (
    <Svg width={24} height={25} viewBox="0 0 24 25" fill="none" {...props}>
      <Path
        d="M18.394 11.114c.654 6.041 3.22 7.867 3.22 7.867H1.388s3.371-2.398 3.371-10.789c0-1.907.71-3.737 1.975-5.085C7.997 1.757 9.713 1 11.5 1c.379 0 .755.034 1.123.1"
        stroke="#000"
        strokeWidth={1.68568}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.367 7.743a3.371 3.371 0 100-6.743 3.371 3.371 0 000 6.743z"
        fill="#F85A00"
        stroke="#F85A00"
        strokeWidth={1.68568}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.445 22.352a2.246 2.246 0 01-3.888 0"
        stroke="#000"
        strokeWidth={1.68568}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const LikeIcon = (props: IconProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 014.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12z"
        fill={props.color}
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const CommentIcon = (props: IconProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4z"
        stroke="#000"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ShareIcon = (props: IconProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M7.4 6.32l8.49-2.83c3.81-1.27 5.88.81 4.62 4.62l-2.83 8.49c-1.9 5.71-5.02 5.71-6.92 0l-.84-2.52-2.52-.84c-5.71-1.9-5.71-5.01 0-6.92zM10.11 13.65l3.58-3.59"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const SaveIcon = (props: IconProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M16.82 2H7.18C5.05 2 3.32 3.74 3.32 5.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71c.52-.29 1.36-.29 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86C20.68 3.74 18.95 2 16.82 2z"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const FilterIcon = (props: IconProps) => {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" fill="none" {...props}>
      <G clipPath="url(#clip0_25_58)">
        <Path
          d="M23.827 0H1.173C.133 0-.393 1.263.345 2l9.03 9.032v10.062c0 .382.187.74.5.96l3.906 2.733c.77.54 1.844-.007 1.844-.96V11.032l9.03-9.031C25.393 1.264 24.87 0 23.828 0z"
          fill={props.color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_25_58">
          <Path fill="#fff" d="M0 0H25V25H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const FlameIcon = (props: IconProps) => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M8.034 1.333L7.121 3.2a13.094 13.094 0 01-2.587 3.587l-.12.113a3.56 3.56 0 00-1.08 2.513v.12a4.573 4.573 0 002.8 4.26l.173.074a4.493 4.493 0 003.514 0h.04a4.667 4.667 0 002.806-4.34V6.633A5.754 5.754 0 019.741 9.58H9.7c-.04 0-.507.193-.707 0a.507.507 0 01-.04-.667l.047-.033h.033a3.627 3.627 0 00.813-4.913c-.866-1.32-1.813-2.634-1.813-2.634z"
        fill="#fff"
      />
    </Svg>
  );
};
