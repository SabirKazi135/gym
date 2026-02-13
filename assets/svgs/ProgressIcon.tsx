import Svg, { Path } from "react-native-svg";

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

export default function ProgressIcon({
  width = 22,
  height = 22,
  color = "currentColor",
}: IconProps) {
  return (
    <Svg
      width={width * 0.8}
      height={height * 0.8}
      viewBox="0 0 21 12"
      fill="none"
    >


      <Path
        d="M13.6094 0.75H19.3237V6.46429"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.3214 0.75L11.25 8.82143C11.1165 8.9523 10.937 9.02561 10.75 9.02561C10.563 9.02561 10.3835 8.9523 10.25 8.82143L6.96429 5.53571C6.83077 5.40484 6.65125 5.33153 6.46429 5.33153C6.27732 5.33153 6.09781 5.40484 5.96429 5.53571L0.75 10.75"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
