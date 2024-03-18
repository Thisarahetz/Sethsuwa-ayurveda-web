import React from "react";
import Skeleton, {
  SkeletonProps,
  SkeletonStyleProps,
} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
type Props = SkeletonProps & SkeletonStyleProps;

export default function CommonSkelton({ ...rest }: Props) {
  return (
    <Skeleton
      baseColor="#ffffff20"
      style={{ opacity: 0.2, borderRadius: "px" }}
      enableAnimation
      highlightColor="#00000015"
      {...rest}
    />
  );
}
