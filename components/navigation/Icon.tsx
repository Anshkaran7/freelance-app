import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';
import { SvgProps } from 'react-native-svg';

interface IconProps extends SvgProps {
    color?: string;
    size?: number;
}


export const FavIcon: React.FC<IconProps> = (props) => {
    return (
        <Svg
            width={23}
            height={30}
            viewBox="0 0 23 30"
            fill="none"
            {...props}
        >
            <Path
                d="M1.297 28V4.889A2.889 2.889 0 014.187 2H18.63a2.889 2.889 0 012.889 2.889V28l-8.55-5.496a2.889 2.889 0 00-3.124 0L1.297 28z"
                fill={props.color}
                stroke={props.color}
                strokeWidth={2.16667}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export const PlusIcon: React.FC<IconProps> = (props) => {
    return (
        <Svg
            width={49}
            height={48}
            viewBox="0 0 49 48"
            fill="none"
            {...props}
        >
            <Rect
                x={1.86264}
                y={1.56522}
                width={44.8696}
                height={44.8696}
                rx={14.1439}
                fill={"#FF5D01"}
                stroke={"#FF5D01"}
                strokeWidth={3.13043}
            />
            <Path
                d="M27.506 35.219a2.309 2.309 0 01-2.308 2.308h-1.534a2.309 2.309 0 01-2.309-2.308v-6.09a2.309 2.309 0 00-2.309-2.31h-6.489a2.309 2.309 0 01-2.309-2.308v-.908a2.309 2.309 0 012.31-2.308h6.488a2.309 2.309 0 002.309-2.309v-6.205a2.309 2.309 0 012.309-2.308h1.534a2.309 2.309 0 012.308 2.308v6.205a2.309 2.309 0 002.31 2.309h6.431a2.309 2.309 0 012.309 2.308v.908a2.309 2.309 0 01-2.309 2.309h-6.432a2.309 2.309 0 00-2.309 2.308v6.09z"
                fill="#fff"
            />
        </Svg>
    );
}

export const ProfileIcon: React.FC<IconProps> = (props) => {
    return (
        <Svg
            width={90}
            height={90}
            viewBox="0 0 66 32"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_1_84)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33.4 6.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75c-.006-5.382-4.368-9.744-9.75-9.75zm-5.055 16.266a6 6 0 0110.11 0 8.234 8.234 0 01-10.11 0zM30.4 15.25a3 3 0 116 0 3 3 0 01-6 0zm9.165 6.226a7.469 7.469 0 00-3.38-2.695 4.5 4.5 0 10-5.57 0 7.469 7.469 0 00-3.38 2.695 8.25 8.25 0 1112.33 0z"
                    fill={props.color}
                />
            </G>
            <Defs>
                <ClipPath id="clip0_1_84">
                    <Path fill="#fff" transform="translate(21.4 4)" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}


export const Icon2: React.FC<IconProps> = (props) => {
    return (
        <Svg
            width={29}
            height={30}
            viewBox="0 0 29 30"
            fill="none"
            {...props}
        >
            <Path
                d="M1.297 20.778V9.222A7.222 7.222 0 018.52 2h11.555a7.222 7.222 0 017.222 7.222v11.556A7.222 7.222 0 0120.075 28H8.52a7.222 7.222 0 01-7.223-7.222z"
                stroke={props.color}
                strokeWidth={2.16667}
            />
            <Path
                d="M20.797 18.611s-2.166 2.889-6.5 2.889c-4.333 0-6.5-2.889-6.5-2.889"
                stroke={props.color}
                strokeWidth={2.16667}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M9.242 12.111a.722.722 0 110-1.444.722.722 0 010 1.444zM19.353 12.111a.722.722 0 110-1.444.722.722 0 010 1.444z"
                fill={props.color}
                stroke={props.color}
                strokeWidth={2.16667}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export const HomeIcon: React.FC<IconProps> = (props) => {
    return (
        <Svg
            width={31}
            height={30}
            viewBox="0 0 31 30"
            fill="none"
            {...props}
        >
            <Path
                d="M11.1 28.27H8.065A6.066 6.066 0 012 22.204v-9.542a6.066 6.066 0 012.922-5.188l7.583-4.596a6.066 6.066 0 016.288 0l7.582 4.596a6.066 6.066 0 012.922 5.188v9.542a6.066 6.066 0 01-6.066 6.066h-3.033m-9.099 0v-6.066a4.55 4.55 0 119.1 0v6.066"
                fill={props.color}
            />
            <Path
                d="M11.1 28.27H8.065A6.066 6.066 0 012 22.204v-9.542a6.066 6.066 0 012.922-5.188l7.583-4.596a6.066 6.066 0 016.288 0l7.582 4.596a6.066 6.066 0 012.922 5.188v9.542a6.066 6.066 0 01-6.066 6.066h-3.033v-6.066a4.55 4.55 0 10-9.099 0v6.066z"
                stroke={props.color}
                strokeWidth={2.27479}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M11.048 22.036a4.524 4.524 0 019.049 0v7.375h-9.049v-7.375z"
                fill="#fff"
            />
        </Svg>
    )
}


export const BellIcon = (props: IconProps) => {
    return (
        <Svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            {...props}
        >
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
    )
}