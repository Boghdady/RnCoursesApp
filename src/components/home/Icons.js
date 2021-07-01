import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export function NotificationIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)" fill="#4775F2">
        <Path d="M20 10V8A8 8 0 004 8v2a4.441 4.441 0 01-1.547 3.193A4.183 4.183 0 001 16c0 2.5 4.112 4 11 4s11-1.5 11-4a4.183 4.183 0 00-1.453-2.807A4.44 4.44 0 0120 10zM9.145 21.9a2.992 2.992 0 005.71 0c-.894.066-1.844.1-2.855.1s-1.961-.032-2.855-.1z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export function PlayIcon(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M14 7.999a.999.999 0 00-.427-.819l-10-7A1 1 0 002 .999V15a.999.999 0 001.573.819l10-7A.995.995 0 0014 8.001v-.002c0 .001 0 .001 0 0z"
          fill="#546BFB"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export function LogoutIcon(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.4 2H8v2h2V1c0-.6-.4-1-1-1H1C.4 0 0 .4 0 1v9c0 .3.1.5.3.7l5 5c.2.2.4.3.7.3.1 0 .3 0 .4-.1.4-.1.6-.5.6-.9V6c0-.3-.1-.5-.3-.7L3.4 2zM5 12.6l-3-3V3.4l3 3v6.2z"
        fill="#546BFB"
      />
      <Path
        d="M15.7 7.3L12 3.6 10.6 5l2 2H8v2h4.6l-2 2 1.4 1.4 3.7-3.7c.4-.4.4-1 0-1.4z"
        fill="#D7DCFF"
      />
    </Svg>
  );
}

export function StartIcon(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M15.144 5.439l-4.317-.628L8.9.9a1.041 1.041 0 00-1.8 0L5.173 4.812l-4.317.627A1 1 0 00.3 7.145l3.123 3.045-.737 4.3a1 1 0 001.451 1.054L8 13.513l3.861 2.029a1 1 0 001.451-1.054l-.737-4.3L15.7 7.145a1 1 0 00-.554-1.705l-.002-.001z"
          fill="#546BFB"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export function BillingIcon(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M6 12h2c.6 0 1-.4 1-1V3.5l3.2 7.9c.2.5.8.8 1.3.5l1.9-.8c.5-.2.8-.8.5-1.3L12.1.5c-.2-.5-.8-.8-1.3-.5L9 .8C8.9.4 8.5 0 8 0H6c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1z"
          fill="#7D8FFF"
        />
        <Path
          d="M1 12h2c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1H1C.4 0 0 .4 0 1v10c0 .6.4 1 1 1z"
          fill="#546BFB"
        />
        <Path d="M16 14H0v2h16v-2z" fill="#D7DCFF" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export function IconClose(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16.263}
      height={16.263}
      viewBox="0 0 16.263 16.263"
      {...props}
    >
      <G fill="#4775F2" fillRule="evenodd">
        <Path d="M1.147 13.022L13.049 1.12a1.5 1.5 0 012.12 2.122L3.27 15.143a1.5 1.5 0 01-2.122-2.121z" />
        <Path
          fillOpacity={0.49}
          d="M3.182 1.06l12.02 12.021a1.5 1.5 0 01-2.12 2.122L1.06 3.182a1.5 1.5 0 012.121-2.121z"
        />
      </G>
    </Svg>
  );
}
