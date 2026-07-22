import React from "react";
import Image from "next/image";
import { headers } from "next/headers";

// Aspect ratio of the source screenshots per platform.
const DIMENSIONS = {
  ios: { width: 1206, height: 2622 },
  android: { width: 1080, height: 2424 },
};

export default async function PhoneScreenshot({
  name,
  locale,
  android,
  width = 260,
  alt = "",
  className,
  ...props
}) {
  // Explicit `android` prop wins; otherwise sniff the User-Agent of the request.
  let isAndroid = android;
  if (isAndroid === undefined) {
    const userAgent = (await headers()).get("user-agent") ?? "";
    isAndroid = /android/i.test(userAgent);
  }

  const platform = isAndroid ? "android" : "ios";
  const { width: sw, height: sh } = DIMENSIONS[platform];
  const height = Math.round((width * sh) / sw);
  const lang = locale ?? "en";

  return (
    <div className={`phone-mockup${className ? ` ${className}` : ""}`}>
      <Image
        src={`/screenshots/${platform}_${lang}_phone_${name}.png`}
        alt={alt}
        width={width}
        height={height}
        className="phone-mockup__screen"
        unoptimized
        {...props}
      />
    </div>
  );
}
