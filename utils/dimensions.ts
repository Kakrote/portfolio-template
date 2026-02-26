// utils/dimension.ts
"use client"
// Get current screen size
export const getScreenSize = () => {
  if (typeof window === "undefined") {
    return { width: 0, height: 0 }
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

// Width percentage → pixels
export const wp = (percentage: number): number => {
  const { width } = getScreenSize()
  return (percentage * width) / 100
}

// Height percentage → pixels
export const hp = (percentage: number): number => {
  const { height } = getScreenSize()
  return (percentage * height) / 100
}